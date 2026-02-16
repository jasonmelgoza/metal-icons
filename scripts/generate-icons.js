const fs = require('fs').promises
const path = require('path')

const srcPath = path.resolve(__dirname, '../src/16/solid')
const iconsJsonPath = path.resolve(__dirname, '../packages/website/public/data/icons.json')

async function main() {
  try {
    const files = await fs.readdir(srcPath)
    const svgFiles = files.filter((file) => file.endsWith('.svg'))

    const icons = svgFiles
      .map((file) => file.replace(/\.svg$/, ''))
      .sort((a, b) => a.localeCompare(b))
      .map((name, index) => ({
        id: index + 1,
        name,
      }))

    const output = JSON.stringify(icons, null, 2) + '\n'
    await fs.mkdir(path.dirname(iconsJsonPath), { recursive: true })
    await fs.writeFile(iconsJsonPath, output, 'utf8')

    console.log(`✓ Generated icons.json with ${icons.length} icons from src/16/solid/`)
  } catch (error) {
    console.error('Error generating icons:', error.message)
    process.exit(1)
  }
}

main()
