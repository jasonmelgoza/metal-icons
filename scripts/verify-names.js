// Importing required modules
const fs = require('fs').promises
const path = require('path')

const srcPaths = {
  solid: path.resolve(__dirname, '../src/16/solid/'),
  outline: path.resolve(__dirname, '../src/16/outline/'),
}

// Main function
async function main() {
  // Read SVG file lists for each style
  let files = await Promise.all(
    Object.entries(srcPaths).map(async ([name, path]) => {
      return { name, files: (await fs.readdir(path)).filter((file) => file.endsWith('.svg')) }
    })
  )

  // Find any icons that exist in one style but not the other
  let diffs = []
  for (let current of files) {
    for (let other of files) {
      if (current === other) continue

      for (let file of current.files) {
        if (!other.files.includes(file)) {
          diffs.push({
            package: current.name,
            file: file,
            'Missing in?': other.name,
          })
        }
      }
    }
  }
  if (diffs.length > 0) {
    console.table(diffs)
  } else {
    console.log('All good!')
  }
}

main()
