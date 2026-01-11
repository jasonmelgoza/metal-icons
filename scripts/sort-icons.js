const fs = require('fs').promises
const path = require('path')

const iconsJsonPath = path.resolve(__dirname, '../packages/website/public/data/icons.json')

async function main() {
  try {
    // Read the icons.json file
    const fileContent = await fs.readFile(iconsJsonPath, 'utf8')
    const icons = JSON.parse(fileContent)

    // Sort alphabetically by name and reassign IDs sequentially
    const sorted = icons
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((item, index) => ({
        id: index + 1,
        name: item.name,
      }))

    // Write back to file with 2-space indentation and trailing newline
    const output = JSON.stringify(sorted, null, 2) + '\n'
    await fs.writeFile(iconsJsonPath, output, 'utf8')

    console.log(`✓ Sorted ${sorted.length} icons alphabetically and reassigned IDs`)
  } catch (error) {
    console.error('Error sorting icons:', error.message)
    process.exit(1)
  }
}

main()
