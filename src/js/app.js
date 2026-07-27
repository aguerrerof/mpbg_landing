const loadThirdPartyScript = src => {
  if (!src) return null;

  const existing = document.querySelector(`script[data-src="${src}"]`);
  if (existing) return existing;

  const script = document.createElement('script');
  script.async = true;
  script.src = src;
  script.dataset.src = src;
  document.head.appendChild(script);
  return script;
};

const scheduleIdleTask = callback => {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(callback, { timeout: 2000 });
    return;
  }

  window.setTimeout(callback, 0);
};

const initAnalytics = () => {
  const body = document.body;
  if (!body) return;

  const gtmId = body.dataset.gtmId;
  const gtagId = body.dataset.gtagId;

  const loadGtm = () => {
    if (!gtmId || window.__mpbgGtmLoaded) return;
    window.__mpbgGtmLoaded = true;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
    });

    const gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    document.head.appendChild(gtmScript);
  };

  const loadGtag = () => {
    if (!gtagId || window.__mpbgGtagLoaded) return;
    window.__mpbgGtagLoaded = true;

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
      window.dataLayer.push(arguments);
    };

    loadThirdPartyScript(`https://www.googletagmanager.com/gtag/js?id=${gtagId}`);
    window.gtag('js', new Date());
    window.gtag('config', gtagId);
  };

  const init = () => {
    loadGtm();
    loadGtag();
  };

  if (document.readyState === 'complete') {
    scheduleIdleTask(init);
  } else {
    window.addEventListener('load', () => {
      scheduleIdleTask(init);
    }, { once: true });
  }
};

initAnalytics();

document.addEventListener('DOMContentLoaded', () => {
  const calendlyEventName = 'calendly.event_scheduled';

  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const lightbox = document.getElementById('image-lightbox');
  const lightboxImage = document.getElementById('image-lightbox-img');
  const lightboxClose = document.getElementById('image-lightbox-close');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });

    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        mobileMenu.classList.add('hidden');
      }
    });
  }

  const openLightbox = (source, altText) => {
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = source;
    lightboxImage.alt = altText || '';
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
    document.body.classList.add('overflow-hidden');
  };

  const closeLightbox = () => {
    if (!lightbox || !lightboxImage) return;
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    lightboxImage.src = '';
    lightboxImage.alt = '';
    document.body.classList.remove('overflow-hidden');
  };

  document.querySelectorAll('.js-zoom-image').forEach(trigger => {
    trigger.addEventListener('click', () => {
      openLightbox(trigger.dataset.fullsrc || '', trigger.dataset.alt || '');
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', event => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });
  }

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeLightbox();
    }
  });

  const brochureEmbed = document.querySelector('[data-lazy-pdf]');

  const loadBrochureEmbed = container => {
    if (!container || container.dataset.loaded === 'true') {
      return;
    }

    const pdfSrc = container.dataset.pdfSrc;

    if (!pdfSrc) {
      return;
    }

    container.innerHTML = `
      <object data="${pdfSrc}" type="application/pdf" class="w-full h-[650px] bg-zinc-950">
        <div class="flex flex-col items-center justify-center h-full p-8 text-center space-y-6">
          <div class="p-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">
            <svg class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div class="space-y-2 max-w-md">
            <h3 class="text-xl font-semibold text-white">Visualización en pantalla</h3>
            <p class="text-lg text-zinc-400 leading-relaxed">Tu navegador no permite embeber directamente el PDF.
              Puedes descargarlo directamente o abrirlo en una nueva pestaña.</p>
          </div>
          <a href="${pdfSrc}" download
            class="px-6 py-3 bg-zinc-100 text-zinc-950 rounded-xl font-semibold text-lg hover:bg-white transition-colors">
            Descargar Brochure PDF
          </a>
        </div>
      </object>
    `;

    container.dataset.loaded = 'true';
  };

  if (brochureEmbed) {
    if ('IntersectionObserver' in window) {
      const brochureObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            loadBrochureEmbed(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, {
        rootMargin: '300px 0px',
        threshold: 0
      });

      brochureObserver.observe(brochureEmbed);
    } else {
      loadBrochureEmbed(brochureEmbed);
    }
  }

  window.addEventListener('message', event => {
    if (!event?.data || typeof event.data !== 'object') return;

    const sourceName = event.origin || '';
    const isCalendlyMessage = sourceName.includes('calendly.com') || sourceName.includes('calendly');
    const isScheduledEvent = event.data.event === 'calendly.event_scheduled';

    if (!isCalendlyMessage || !isScheduledEvent) return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: calendlyEventName,
      calendly_event_name: 'event_scheduled',
    });
  });
  
  const contactoSection = document.getElementById('contacto');
  
  if (contactoSection) {
    const calendlyObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const calendlyCSS = document.createElement('link');
          calendlyCSS.rel = 'stylesheet';
          calendlyCSS.href = 'https://assets.calendly.com/assets/external/widget.css';
          document.head.appendChild(calendlyCSS);
          const calendlyScript = document.createElement('script');
          calendlyScript.src = 'https://assets.calendly.com/assets/external/widget.js';
          calendlyScript.async = true;
          document.body.appendChild(calendlyScript);
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '400px 0px',
      threshold: 0
    });

    calendlyObserver.observe(contactoSection);
  }
});
