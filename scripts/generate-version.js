const fs = require('fs').promises
const path = require('path')

const metalIconsPackagePath = path.resolve(__dirname, '../packages/metal-icons/package.json')
const versionJsonPath = path.resolve(__dirname, '../packages/website/src/data/version.json')

async function main() {
  try {
    const packageContent = await fs.readFile(metalIconsPackagePath, 'utf8')
    const { version } = JSON.parse(packageContent)

    const versionData = { version: `v${version}` }
    const output = JSON.stringify(versionData, null, 2) + '\n'

    await fs.mkdir(path.dirname(versionJsonPath), { recursive: true })
    await fs.writeFile(versionJsonPath, output, 'utf8')

    console.log(`✓ Generated version.json with version v${version}`)
  } catch (error) {
    console.error('Error generating version:', error.message)
    process.exit(1)
  }
}

main()
