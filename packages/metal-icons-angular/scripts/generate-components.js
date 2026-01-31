const fs = require('fs');
const path = require('path');

// Helper to convert kebab-case to PascalCase
function toPascalCase(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Helper to convert kebab-case to camelCase
function toCamelCase(str) {
  const pascal = toPascalCase(str);
  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

// Process SVG content to make it Angular-compatible
function processSvgContent(svgContent) {
  // Remove width and height attributes, keep viewBox
  let processed = svgContent
    .replace(/\s*width="[^"]*"/g, '')
    .replace(/\s*height="[^"]*"/g, '')
    .replace(/fill="none"/g, '')
    .replace(/fill="black"/g, 'fill="currentColor"')
    .trim();
  
  // Remove XML declaration if present
  processed = processed.replace(/<\?xml[^>]*\?>\s*/g, '');
  
  return processed;
}

// Generate Angular component from SVG file
function generateComponent(iconName, size, style, svgPath) {
  const svgContent = fs.readFileSync(svgPath, 'utf8');
  const processedSvg = processSvgContent(svgContent);
  
  const componentName = `${toPascalCase(iconName)}IconComponent`;
  const selector = `metal-icon-${iconName}-${size}-${style}`;
  
  const template = `import { Component } from '@angular/core';

@Component({
  selector: '${selector}',
  standalone: true,
  template: \`
    ${processedSvg}
  \`,
  styles: [\`
    :host {
      display: inline-block;
      width: 1em;
      height: 1em;
    }
    svg {
      width: 100%;
      height: 100%;
    }
  \`]
})
export class ${componentName} {}
`;
  
  return { componentName, template };
}

// Generate index file for a directory
function generateIndexFile(components) {
  return components
    .map(comp => `export { ${comp.componentName} } from './${comp.fileName}';`)
    .join('\n') + '\n';
}

// Main generation function
function generateAllComponents() {
  const sizes = ['16', '24'];
  const styles = ['solid', 'outline'];
  const srcBase = path.join(__dirname, '../../../src');
  const libBase = path.join(__dirname, '../src/lib');
  
  sizes.forEach(size => {
    styles.forEach(style => {
      const svgDir = path.join(srcBase, size, style);
      const outputDir = path.join(libBase, size, style);
      
      // Ensure output directory exists
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      
      // Get all SVG files
      const svgFiles = fs.readdirSync(svgDir)
        .filter(file => file.endsWith('.svg'))
        .sort();
      
      console.log(`Processing ${size}/${style}: ${svgFiles.length} icons`);
      
      const components = [];
      
      svgFiles.forEach(svgFile => {
        const iconName = svgFile.replace('.svg', '');
        const svgPath = path.join(svgDir, svgFile);
        
        const { componentName, template } = generateComponent(iconName, size, style, svgPath);
        const fileName = `${iconName}-icon.component`;
        const componentPath = path.join(outputDir, `${fileName}.ts`);
        
        // Write component file
        fs.writeFileSync(componentPath, template);
        
        components.push({ componentName, fileName });
      });
      
      // Generate index.ts for this size/style combination
      const indexContent = generateIndexFile(components);
      fs.writeFileSync(path.join(outputDir, 'index.ts'), indexContent);
      
      console.log(`✓ Generated ${components.length} components for ${size}/${style}`);
    });
  });
  
  console.log('\n✓ All components generated successfully!');
}

// Run the generator
try {
  generateAllComponents();
} catch (error) {
  console.error('Error generating components:', error);
  process.exit(1);
}
