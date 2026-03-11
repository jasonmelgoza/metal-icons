// Importing required modules
const fs = require('fs').promises
const path = require('path')

const srcPath = path.resolve(__dirname, '../src/16/solid')
const iconsJsonPath = path.resolve(__dirname, '../packages/website/public/data/icons.json')

// Main function
async function main() {
  try {
    // Read SVG filenames from the source directory
    const files = await fs.readdir(srcPath)
    const svgFiles = files.filter((file) => file.endsWith('.svg'))

    // Build sorted icon list with sequential IDs
    const icons = svgFiles
      .map((file) => file.replace(/\.svg$/, ''))
      .sort((a, b) => a.localeCompare(b))
      .map((name, index) => ({
        id: index + 1,
        name,
      }))

    // Write icons.json, creating the output directory if needed
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
