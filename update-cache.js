const fs = require('fs');
const path = require('path');

// GENERACIÓN AUTOMÁTICA: Crea un string basado en YYYYMMDDHHmm
const now = new Date();
const autoVersion = now.getFullYear() +
    String(now.getMonth() + 1).padStart(2, '0') +
    String(now.getDate()).padStart(2, '0') +
    String(now.getHours()).padStart(2, '0') +
    String(now.getMinutes()).padStart(2, '0');

const BASE_DIR = './';

// Regex que detecta la ruta con o sin slash inicial y con o sin versión previa
const assets = [
  { 
    name: 'CSS',
    regex: /\/?dist\/css\/styles\.css(?:\?v=[a-zA-Z0-9.-]*)?/g, 
    replacement: `dist/css/styles.css?v=${autoVersion}` 
  },
  { 
    name: 'JS',
    regex: /\/?dist\/js\/app\.js(?:\?v=[a-zA-Z0-9.-]*)?/g, 
    replacement: `dist/js/app.js?v=${autoVersion}` 
  }
];

function walk(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && !['node_modules', '.git', 'dist'].includes(file)) {
      walk(fullPath);
    } else if (path.extname(file) === '.html') {
      updateFile(fullPath);
    }
  });
}

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let hasChanged = false;

  assets.forEach(asset => {
    if (asset.regex.test(content)) {
      content = content.replace(asset.regex, (match) => {
        // Mantenemos el slash inicial si el archivo original lo tenía (ej: /dist/...)
        const prefix = match.startsWith('/') ? '/' : '';
        return prefix + asset.replacement;
      });
      hasChanged = true;
    }
  });

  if (hasChanged) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ v=${autoVersion} aplicada en: ${filePath}`);
  }
}

console.log(`🚀 Iniciando auto-actualización de caché...`);
walk(BASE_DIR);
console.log(`\n✨ ¡Cache busting completado globalmente!`);