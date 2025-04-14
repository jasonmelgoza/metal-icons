// Importing required modules
const fs = require('fs').promises
const { default: camelcase } = require('camelcase')
const { rimraf } = require('rimraf')
const svgr = require('@svgr/core').default
const babel = require('@babel/core')
const { dirname } = require('path')

// Transform function for react
let transform = {
  react: async (svg, componentName, format) => {
    let component = await svgr(svg, { ref: true, titleProp: true }, { componentName })
    let { code } = await babel.transformAsync(component, {
      plugins: [[require('@babel/plugin-transform-react-jsx'), { useBuiltIns: true }]],
    })

    if (format === 'esm') {
      return code
    }

    return code
      .replace('import * as React from "react"', 'const React = require("react")')
      .replace('export default', 'module.exports =')
  },
}

// Function to get icons
async function getIcons(style, size) {
  let files = await fs.readdir(`./optimized/${size}/${style}`)
  return Promise.all(
    files.map(async (file) => ({
      svg: await fs.readFile(`./optimized/${size}/${style}/${file}`, 'utf8'),
      componentName: `${camelcase(file.replace(/\.svg$/, ''), {
        pascalCase: true
      })}Icon`,
    }))
  )
}

// Function to export all icons
function exportAll(icons, format, includeExtension = true) {
  return icons
    .map(({ componentName }) => {
      let extension = includeExtension ? '.js' : ''
      if (format === 'esm') {
        return `export { default as ${componentName} } from './${componentName}${extension}'`
      }
      return `module.exports.${componentName} = require("./${componentName}${extension}")`
    })
    .join('\n')
}

// Function to ensure write operation
async function ensureWrite(file, text) {
  await fs.mkdir(dirname(file), { recursive: true })
  await fs.writeFile(file, text, 'utf8')
}

// Function to ensure write operation for JSON
async function ensureWriteJson(file, json) {
  await ensureWrite(file, JSON.stringify(json, null, 2) + '\n')
}

// Function to build icons
async function buildIcons(package, style, format, size) {
  let outDir = `./packages/metal-icons/${size}/${style}`
  if (format === 'esm') {
    outDir += '/esm'
  }

  let icons = await getIcons(style, size)

  await Promise.all(
    icons.flatMap(async ({ componentName, svg }) => {
      let content = await transform[package](svg, componentName, format)
      let types =
        package === 'react'
          ? `import * as React from 'react';\ndeclare const ${componentName}: React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & { title?: string, titleId?: string } & React.RefAttributes<SVGSVGElement>>;\nexport default ${componentName};\n`
          : null

      return [
        ensureWrite(`${outDir}/${componentName}.js`, content),
        ...(types ? [ensureWrite(`${outDir}/${componentName}.d.ts`, types)] : []),
      ]
    })
  )

  await ensureWrite(`${outDir}/index.js`, exportAll(icons, format))

  await ensureWrite(`${outDir}/index.d.ts`, exportAll(icons, 'esm', false))
}

// Function to build exports
async function buildExports(styles, size) {
  let pkg = {}

  // To appease Vite's optimizeDeps feature which requires a root-level import
  pkg[`.`] = {
    import: `./index.esm.js`,
    require: `./index.js`,
  }

  // For those that want to read the version from package.json
  pkg[`./package.json`] = { default: './package.json' }

  // Backwards compatibility with v1 imports (points to proxy that prints an error message):
  pkg[`./16/outline`] = { default: `./16/outline/index.js` }
  pkg[`./16/outline/index`] = { default: `./16/outline/index.js` }
  pkg[`./16/outline/index.js`] = { default: `./16/outline/index.js` }
  pkg[`./16/solid`] = { default: `./16/solid/index.js` }
  pkg[`./16/solid/index`] = { default: `./16/solid/index.js` }
  pkg[`./16/solid/index.js`] = { default: `./16/solid/index.js` }

  pkg[`./24/outline`] = { default: `./24/outline/index.js` }
  pkg[`./24/outline/index`] = { default: `./24/outline/index.js` }
  pkg[`./24/outline/index.js`] = { default: `./24/outline/index.js` }
  pkg[`./24/solid`] = { default: `./24/solid/index.js` }
  pkg[`./24/solid/index`] = { default: `./24/solid/index.js` }
  pkg[`./24/solid/index.js`] = { default: `./24/solid/index.js` }

  // Explicit exports for each style:
  for (let style of styles) {
    pkg[`./16/${style}`] = {
      types: `./16/${style}/index.d.ts`,
      import: `./16/${style}/esm/index.js`,
      require: `./16/${style}/index.js`,
    }
    pkg[`./16/${style}/*`] = {
      types: `./16/${style}/*.d.ts`,
      import: `./16/${style}/esm/*.js`,
      require: `./16/${style}/*.js`,
    }
    pkg[`./16/${style}/*.js`] = {
      types: `./16/${style}/*.d.ts`,
      import: `./16/${style}/esm/*.js`,
      require: `./16/${style}/*.js`,
    }

    pkg[`./24/${style}`] = {
      types: `./24/${style}/index.d.ts`,
      import: `./24/${style}/esm/index.js`,
      require: `./24/${style}/index.js`,
    }
    pkg[`./24/${style}/*`] = {
      types: `./24/${style}/*.d.ts`,
      import: `./24/${style}/esm/*.js`,
      require: `./24/${style}/*.js`,
    }
    pkg[`./24/${style}/*.js`] = {
      types: `./24/${style}/*.d.ts`,
      import: `./24/${style}/esm/*.js`,
      require: `./24/${style}/*.js`,
    }

    // This dir is basically an implementation detail, but it's needed for
    // backwards compatibility in case people were importing from it directly.
    pkg[`./16/${style}/esm/*`] = {
      types: `./16/${style}/*.d.ts`,
      import: `./16/${style}/esm/*.js`,
    }
    pkg[`./16/${style}/esm/*.js`] = {
      types: `./16/${style}/*.d.ts`,
      import: `./16/${style}/esm/*.js`,
    }

    pkg[`./24/${style}/esm/*`] = {
      types: `./24/${style}/*.d.ts`,
      import: `./24/${style}/esm/*.js`,
    }
    pkg[`./24/${style}/esm/*.js`] = {
      types: `./24/${style}/*.d.ts`,
      import: `./24/${style}/esm/*.js`,
    }
  }

  return pkg
}

// Main function
async function main(package, size) {
  try {
    const cjsPackageJson = { module: `./esm/index.js`, sideEffects: false }
    const esmPackageJson = { type: 'module', sideEffects: false }

    console.log(`🏗️ Building ${package} package for size ${size}...`)

    await Promise.all([rimraf(`./packages/metal-icons/${size}/solid/*`), rimraf(`./packages/metal-icons/${size}/outline/*`)])

    await Promise.all([
      buildIcons(package, 'solid', 'cjs', size),
      buildIcons(package, 'solid', 'esm', size),
      buildIcons(package, 'outline', 'cjs', size),
      buildIcons(package, 'outline', 'esm', size),
      ensureWriteJson(`./packages/metal-icons/${size}/solid/esm/package.json`, esmPackageJson),
      ensureWriteJson(`./packages/metal-icons/${size}/solid/package.json`, cjsPackageJson),
      ensureWriteJson(`./packages/metal-icons/${size}/outline/esm/package.json`, esmPackageJson),
      ensureWriteJson(`./packages/metal-icons/${size}/outline/package.json`, cjsPackageJson),
    ])

    let packageJson = JSON.parse(await fs.readFile(`./packages/metal-icons/package.json`, 'utf8'))

    packageJson.exports = await buildExports(['solid', 'outline'], size)

    await ensureWriteJson(`./packages/metal-icons/package.json`, packageJson)

    console.log(`🤘Finished building ${package} package for size ${size}.`)
  } catch (error) {
    console.error(`💀Error building ${package} package for size ${size}:`, error)
  }
}

let [package, size] = process.argv.slice(2)

if (!package || !size) {
  throw new Error('Please specify a package and size')
}

main(package, size)
