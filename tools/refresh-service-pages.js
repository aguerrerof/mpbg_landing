const fs = require('fs');
const path = require('path');

const root = process.cwd();
const sharedHeader = `  <body class="bg-[#0f0720] text-gray-100">
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W878S26Z"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

<header class="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/10">
  <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
    <a href="/" class="transition-transform hover:scale-105 active:scale-95">
        <picture>
          <source srcset="/assets/brand/logo_white.webp" type="image/webp">
          <img src="/assets/brand/logo_white.png" alt="MPBG Consulting" class="h-9 w-auto" loading="eager"
            fetchpriority="high" decoding="async" width="180" height="36"> <!-- Ajusta el width real de tu logo -->
        </picture>
      </a>
    <div class="hidden md:flex gap-8 items-center text-sm font-medium text-white/85">
      <a href="/#servicios" class="hover:text-white">Servicios</a>
      <a href="/#tech-stack" class="hover:text-white">Tech Stack</a>
      <a href="/#casos-de-exito" class="hover:text-white">Casos de éxito</a>
      <a href="/#contacto" class="hover:text-white">Contacto</a>
    </div>
    <button id="menu-btn" class="md:hidden text-white" aria-label="Abrir menú">☰</button>
  </nav>
  <div id="mobile-menu" class="md:hidden hidden bg-[#12091f] border-t border-white/10">
    <div class="px-6 py-6 flex flex-col gap-4 text-sm font-medium text-white/85">
      <a href="/#servicios" class="mobile-link">Servicios</a>
      <a href="/#tech-stack" class="mobile-link">Tech Stack</a>
      <a href="/#casos-de-exito" class="mobile-link">Casos de éxito</a>
      <a href="/#contacto" class="mobile-link">Contacto</a>
    </div>
  </div>
</header>
`;

function transform(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');
  html = html.replace(/<body class="[^"]*">[\s\S]*?<main>/, sharedHeader + '\n<main>');
  html = html.replace(/<a href="\/#">[\s\S]*?Inicio[\s\S]*?<\/a>\s*/g, '');
  html = html.replace(/<link rel="stylesheet" href="\/dist\/css\/styles.css\?v=[^"]*">/g, '<link rel="stylesheet" href="/dist/css/styles.css?v=20260408-2">');
  html = html.replace(/<link rel="stylesheet" href="\/assets\/css\/fonts.css\?v=[^"]*">/g, '<link rel="stylesheet" href="/assets/css/fonts.css?v=20260408-2">');
  html = html.replace(/<script src="\/dist\/js\/app.js\?v=[^"]*" defer><\/script>/g, '<script src="/dist/js/app.js?v=20260408-2" defer></script>');
  html = html.replace(/Ã¡|Ã©|Ã­|Ã³|Ãº|Ã±|Ã‰|Ã�|Ã“|Ãš|Ã‘|Â©|Â|â€œ|â€|â†’/g, m => ({
    'Ã¡':'á','Ã©':'é','Ã­':'í','Ã³':'ó','Ãº':'ú','Ã±':'ñ','Ã‰':'É','Ã�':'Í','Ã“':'Ó','Ãš':'Ú','Ã‘':'Ñ','Â©':'©','Â':'','â€œ':'“','â€':'”','â†’':'→'
  }[m] || m));
  html = html.replace(/<section class="bg-gradient-to-r from-purple-700 via-purple-600 to-blue-800 pt-40 pb-20">[\s\S]*?<\/section>/, (m) => m.replace('bg-gradient-to-r from-purple-700 via-purple-600 to-blue-800 pt-40 pb-20', 'relative overflow-hidden bg-[#12091f] pt-40 pb-24').replace(/<div class="container mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">/,'<div class="container mx-auto px-6 max-w-6xl"><div class="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-14 items-center">').replace(/<\/div>\s*<\/section>$/, '</div></div></section>'));
  html = html.replace(/<section class="bg-white py-20">[\s\S]*?<\/section>/, '<section class="relative overflow-hidden bg-[#0f162b] py-24"><div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.14),transparent_30%)]"></div><div class="relative container mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-start">$&</div></section>');
  html = html.replace(/<section class="bg-\[#f4f1fb\] py-20">[\s\S]*?<\/section>/g, '');
  html = html.replace(/<footer class="bg-blue-950 text-gray-300 py-12">[\s\S]*?<\/footer>/, `<footer class="bg-blue-950 text-gray-300 py-12">
  <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
    <div class="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
      <img src="/assets/brand/logo_white.png" alt="MPBG Consulting" class="h-10" loading="lazy" decoding="async">
      <p class="text-sm text-gray-400">Conectamos los puntos, tú dominas el mercado.</p>
      <p class="text-sm text-gray-500">© 2026 MPBG Consulting</p>
    </div>
    <div class="flex items-center gap-6">
      <a href="https://www.linkedin.com/company/mpbg-consulting" target="_blank" aria-label="LinkedIn" class="text-gray-400 hover:text-white transition">in</a>
      <a href="https://www.instagram.com/mpbg_consulting" target="_blank" aria-label="Instagram" class="text-gray-400 hover:text-white transition">ig</a>
    </div>
  </div>
</footer>`);
  fs.writeFileSync(filePath, html, 'utf8');
}

for (const name of fs.readdirSync(path.join(root, 'servicios'))) {
  if (name.endsWith('.html')) transform(path.join(root, 'servicios', name));
}



