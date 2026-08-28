const DEFAULT_LOCALE = 'es';
const STORAGE_KEY = 'mpbg-locale';
const SUPPORTED_LOCALES = ['es', 'en'];

const translations = {
  es: {
    meta: {
      title: 'MPBG Consulting | Software, IA y Talento Tech B2B',
      description: 'Consultoría B2B en software a medida, automatización con IA y reclutamiento IT. Ayudamos a equipos a escalar con más control, menos fricción y resultados medibles.',
      keywords: 'consultoria software, staff augmentation, desarrollo a medida, automatizacion IA, reclutamiento IT, arquitectura de software, MPBG, Ecuador, software B2B',
      ogTitle: 'MPBG Consulting | Software, IA y Talento Tech B2B',
      ogDescription: 'Escala tu operación con software a medida, automatización con IA y talento senior. Agenda una sesión inicial sin costo.',
      twitterTitle: 'MPBG Consulting | Software, IA y Talento Tech B2B',
      twitterDescription: 'Escala tu operación con software a medida, automatización con IA y talento senior. Agenda una sesión inicial sin costo.',
      structuredDescription: 'Consultoría B2B en software a medida, automatización con IA, staff augmentation y reclutamiento IT.'
    },
    locale: {
      esLabel: 'Español',
      enLabel: 'Inglés'
    },
    nav: {
      services: 'Servicios',
      caseStudy: 'Casos de Éxito',
      brochure: 'Brochure',
      schedule: 'Agendar',
      menu: 'Abrir menú'
    },
    hero: {
      badge: 'Consultoría B2B · Sesión inicial sin costo',
      title: 'Escala tu operación tecnológica <br class="hidden sm:block" /><span class="text-zinc-400 font-normal">sin perder control ni velocidad</span>',
      description: 'Sumamos talento senior, software a medida y automatización para que tu equipo avance con más claridad, menos fricción y mejores decisiones operativas.',
      primaryCta: 'Agendar diagnóstico',
      secondaryCta: 'Ver Servicios'
    },
    services: {
      tag: 'Servicios estratégicos B2B',
      title: 'Capacidades pensadas para equipos que necesitan avanzar con orden y escalar sin fricción',
      description: 'Acompañamos a líderes de negocio y tecnología con staff augmentation, software a medida, automatización con IA y reclutamiento IT, con foco en control operativo, trazabilidad y resultados medibles.',
      staff: {
        label: 'Staff Augmentation',
        subtitle: 'Talento senior',
        title: 'Capacidad senior para avanzar sin fricción',
        description: 'Sumamos perfiles que se integran a tu tecnología, tus procesos y tu nivel de gobierno desde el primer sprint.',
        point1: '<strong class="text-zinc-100">Incorporación rápida.</strong> Perfiles senior y lead con onboarding ordenado.',
        point2: '<strong class="text-zinc-100">Continuidad operativa.</strong> Seguimiento claro, prioridades visibles y menos retrabajo.',
        point3: '<strong class="text-zinc-100">Ideal para.</strong> Picos de demanda, expansión de squads y cobertura temporal.',
        imageAlt: 'Profesionales senior integrándose a un equipo de tecnología'
      },
      software: {
        label: 'Software a Medida',
        subtitle: 'Arquitectura modular',
        title: 'Soluciones pensadas para crecer con tu operación',
        description: 'Diseñamos productos y backoffice B2B con una base flexible, entregas graduales y mantenimiento sostenible.',
        point1: '<strong class="text-zinc-100">Base modular.</strong> Backoffice, portales y herramientas listas para crecer.',
        point2: '<strong class="text-zinc-100">Tecnología adecuada.</strong> Elegimos la solución por estabilidad, soporte y rendimiento.',
        point3: '<strong class="text-zinc-100">Ideal para.</strong> Operaciones internas, productos B2B y automatización de procesos.',
        imageAlt: 'Equipo creando software a medida para una operación B2B'
      },
      automation: {
        label: 'Automatización con IA',
        subtitle: 'Procesos trazables',
        title: 'Automatización con IA para reducir tareas repetitivas',
        description: 'Automatizamos tareas críticas con visibilidad total, control y conexión con tus sistemas actuales.',
        point1: '<strong class="text-zinc-100">Conexión con tus plataformas.</strong> CRM, ERP y bases de datos dentro de un mismo flujo.',
        point2: '<strong class="text-zinc-100">Monitoreo claro.</strong> Menos intervención manual y más control sobre cada paso.',
        point3: '<strong class="text-zinc-100">Ideal para.</strong> Clasificación, seguimiento, validación y reporting.',
        imageAlt: 'Automatización de procesos empresariales con inteligencia artificial'
      },
      recruiting: {
        label: 'Reclutamiento IT',
        subtitle: 'Validación experta',
        title: 'Talento IT validado para reducir riesgo de contratación',
        description: 'Filtramos candidatos con evaluación práctica y criterio de negocio para acelerar la contratación sin bajar el estándar.',
        point1: '<strong class="text-zinc-100">Validación práctica.</strong> Pruebas reales y revisión de habilidades blandas.',
        point2: '<strong class="text-zinc-100">Ajuste al entorno.</strong> Tecnologías, seniority y forma de trabajo en una sola evaluación.',
        point3: '<strong class="text-zinc-100">Ideal para.</strong> Contratación rápida con menos riesgo y menos retrabajo.',
        imageAlt: 'Búsqueda y validación de talento tecnológico para empresas'
      },
      hybrid: {
        title: '¿Necesitas combinar más de una capacidad?',
        description: 'Diseñamos un alcance híbrido según tus prioridades, tu ritmo de entrega y el nivel de control que necesita tu operación.',
        cta: 'Agendar diagnóstico'
      }
    },
    caseStudy: {
      tag: 'Sniffy OS',
      title: 'Modernización de la operación logística y entregas',
      description: 'Consolidamos una operación muy manual en una plataforma centralizada para crecer en volumen sin sumar complejidad.',
      metric1Label: 'Reducción de tareas manuales',
      metric2Label: 'Control operativo en tiempo real',
      bullet1: 'Migración a una base de datos más estable y escalable',
      bullet2: 'Integración automatizada con sistemas de envío',
      bullet3: 'Backoffice a medida para centralizar la operación',
      imageHover: 'Ver publicación en Instagram',
      viewPost: 'Ver publicación'
    },
    brochure: {
      tag: 'Material ejecutivo',
      title: 'Brochure ejecutivo y capacidades',
      description: 'Descarga o visualiza una versión clara de nuestras capacidades para compartirla con dirección, operaciones o recursos humanos.',
      download: 'Descargar PDF',
      open: 'Abrir PDF',
      fallback: {
        title: 'Visualización en pantalla',
        description: 'Tu navegador no permite embeber directamente el PDF. Puedes descargarlo directamente o abrirlo en una nueva pestaña.',
        download: 'Descargar Brochure PDF'
      }
    },
    contact: {
      tag: 'Sesión inicial sin costo · Sin compromiso',
      title: 'Agenda una sesión de diagnóstico',
      description: 'Revisamos tu operación, capacidad de equipo y oportunidades de automatización en una sesión de 30 minutos sin costo.',
      emailLabel: 'Correo Corporativo',
      channelsLabel: 'Canales profesionales',
      linkedin: 'LinkedIn',
      instagram: 'Instagram'
    },
    footer: {
      description: 'Software, talento y automatización para operaciones que necesitan avanzar.'
    },
    embed: {
      title: 'Visualización en pantalla',
      description: 'Tu navegador no permite embeber directamente el PDF. Puedes descargarlo directamente o abrirlo en una nueva pestaña.',
      download: 'Descargar Brochure PDF'
    }
  },
  en: {
    meta: {
      title: 'MPBG Consulting | Software, AI and B2B Tech Talent',
      description: 'B2B consulting in custom software, AI automation, and IT recruiting. We help teams scale with more control, less friction, and measurable results.',
      keywords: 'software consulting, staff augmentation, custom development, AI automation, IT recruiting, software architecture, MPBG, Ecuador, B2B software',
      ogTitle: 'MPBG Consulting | Software, AI and B2B Tech Talent',
      ogDescription: 'Scale your operation with custom software, AI automation, and senior talent. Book a free initial session.',
      twitterTitle: 'MPBG Consulting | Software, AI and B2B Tech Talent',
      twitterDescription: 'Scale your operation with custom software, AI automation, and senior talent. Book a free initial session.',
      structuredDescription: 'B2B consulting in custom software, AI automation, staff augmentation, and IT recruiting.'
    },
    locale: {
      esLabel: 'Spanish',
      enLabel: 'English'
    },
    nav: {
      services: 'Services',
      caseStudy: 'Success Stories',
      brochure: 'Brochure',
      schedule: 'Book',
      menu: 'Open menu'
    },
    hero: {
      badge: 'B2B consulting · Free initial session',
      title: 'Scale your technology operation <br class="hidden sm:block" /><span class="text-zinc-400 font-normal">without losing control or speed</span>',
      description: 'We combine senior talent, custom software, and automation so your team can move with more clarity, less friction, and better operating decisions.',
      primaryCta: 'Book a diagnosis',
      secondaryCta: 'View Services'
    },
    services: {
      tag: 'Strategic B2B services',
      title: 'Capabilities designed for teams that need to move in order and scale without friction',
      description: 'We support business and technology leaders with staff augmentation, custom software, AI automation, and IT recruiting, focused on operational control, traceability, and measurable results.',
      staff: {
        label: 'Staff Augmentation',
        subtitle: 'Senior talent',
        title: 'Senior capacity to move without friction',
        description: 'We add profiles that integrate with your technology, your processes, and your governance level from the first sprint.',
        point1: '<strong class="text-zinc-100">Fast onboarding.</strong> Senior and lead profiles with an orderly ramp-up.',
        point2: '<strong class="text-zinc-100">Operational continuity.</strong> Clear follow-up, visible priorities, and less rework.',
        point3: '<strong class="text-zinc-100">Best for.</strong> Demand spikes, squad expansion, and temporary coverage.',
        imageAlt: 'Senior professionals joining a technology team'
      },
      software: {
        label: 'Custom Software',
        subtitle: 'Modular architecture',
        title: 'Solutions built to grow with your operation',
        description: 'We design B2B products and back office tools with a flexible base, phased delivery, and sustainable maintenance.',
        point1: '<strong class="text-zinc-100">Modular base.</strong> Back office, portals, and tools ready to grow.',
        point2: '<strong class="text-zinc-100">Right technology.</strong> We choose the solution for stability, support, and performance.',
        point3: '<strong class="text-zinc-100">Best for.</strong> Internal operations, B2B products, and process automation.',
        imageAlt: 'Team building custom software for a B2B operation'
      },
      automation: {
        label: 'AI Automation',
        subtitle: 'Traceable processes',
        title: 'AI automation to reduce repetitive work',
        description: 'We automate critical tasks with full visibility, control, and connection to your current systems.',
        point1: '<strong class="text-zinc-100">Connected to your platforms.</strong> CRM, ERP, and databases within one flow.',
        point2: '<strong class="text-zinc-100">Clear monitoring.</strong> Less manual intervention and more control over each step.',
        point3: '<strong class="text-zinc-100">Best for.</strong> Classification, follow-up, validation, and reporting.',
        imageAlt: 'Business process automation with artificial intelligence'
      },
      recruiting: {
        label: 'IT Recruiting',
        subtitle: 'Expert validation',
        title: 'Validated IT talent to reduce hiring risk',
        description: 'We screen candidates with hands-on evaluation and business criteria to speed up hiring without lowering the bar.',
        point1: '<strong class="text-zinc-100">Practical validation.</strong> Real tests and soft-skill review.',
        point2: '<strong class="text-zinc-100">Environment fit.</strong> Technology, seniority, and work style in one assessment.',
        point3: '<strong class="text-zinc-100">Best for.</strong> Fast hiring with less risk and less rework.',
        imageAlt: 'Search and validation of technology talent for companies'
      },
      hybrid: {
        title: 'Need to combine more than one capability?',
        description: 'We design a hybrid scope based on your priorities, your delivery pace, and the level of control your operation needs.',
        cta: 'Book a diagnosis'
      }
    },
    caseStudy: {
      tag: 'Sniffy OS',
      title: 'Modernizing logistics and delivery operations',
      description: 'We consolidated a very manual operation into a centralized platform to grow volume without adding complexity.',
      metric1Label: 'Reduction in manual work',
      metric2Label: 'Real-time operational control',
      bullet1: 'Migration to a more stable and scalable database',
      bullet2: 'Automated integration with shipping systems',
      bullet3: 'Custom back office to centralize operations',
      imageHover: 'View post on Instagram',
      viewPost: 'View post',
      imageAlt: 'Sniffy OS success story - modernization of the logistics core and fulfillment'
    },
    brochure: {
      tag: 'Executive material',
      title: 'Executive brochure and capabilities',
      description: 'Download or preview a clear version of our capabilities to share with leadership, operations, or human resources.',
      download: 'Download PDF',
      open: 'Open PDF',
      fallback: {
        title: 'On-screen view',
        description: 'Your browser does not allow direct PDF embedding. You can download it or open it in a new tab.',
        download: 'Download brochure PDF'
      }
    },
    contact: {
      tag: 'Free initial session · No commitment',
      title: 'Book a diagnostic session',
      description: 'We review your operation, team capacity, and automation opportunities in a free 30-minute session.',
      emailLabel: 'Corporate email',
      channelsLabel: 'Professional channels',
      linkedin: 'LinkedIn',
      instagram: 'Instagram'
    },
    footer: {
      description: 'Software, talent, and automation for operations that need to move faster.'
    },
    embed: {
      title: 'On-screen view',
      description: 'Your browser does not allow direct PDF embedding. You can download it or open it in a new tab.',
      download: 'Download brochure PDF'
    }
  }
};

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
      event: 'gtm.js'
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

const safeGetStoredLocale = () => {
  try {
    const locale = window.localStorage.getItem(STORAGE_KEY);
    return SUPPORTED_LOCALES.includes(locale) ? locale : null;
  } catch {
    return null;
  }
};

const safeSetStoredLocale = locale => {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Ignore storage failures.
  }
};

const getUrlLocale = () => {
  const params = new URLSearchParams(window.location.search);
  const locale = params.get('lang');
  return SUPPORTED_LOCALES.includes(locale) ? locale : null;
};

const getTranslation = (locale, key) => {
  const value = key.split('.').reduce((acc, part) => (acc ? acc[part] : undefined), translations[locale]);
  return typeof value === 'string' ? value : '';
};

const currentLocaleMeta = locale => ({
  lang: locale === 'en' ? 'en' : 'es-EC',
  ogLocale: locale === 'en' ? 'en_US' : 'es_EC'
});

const updateUrlLocale = locale => {
  const url = new URL(window.location.href);

  if (locale === DEFAULT_LOCALE) {
    url.searchParams.delete('lang');
  } else {
    url.searchParams.set('lang', locale);
  }

  window.history.replaceState({}, '', url);
};

const updateLanguageButtons = locale => {
  document.querySelectorAll('[data-lang-switch]').forEach(button => {
    const isActive = button.dataset.langSwitch === locale;
    button.setAttribute('aria-pressed', String(isActive));
    button.classList.toggle('bg-zinc-100', isActive);
    button.classList.toggle('text-zinc-950', isActive);
    button.classList.toggle('border-zinc-100', isActive);
    button.classList.toggle('bg-zinc-900/60', !isActive);
    button.classList.toggle('text-zinc-400', !isActive);
    button.classList.toggle('border-zinc-800', !isActive);
  });
};

const updateMetaTags = locale => {
  const copy = translations[locale];
  const meta = currentLocaleMeta(locale);

  document.documentElement.lang = meta.lang;
  document.body.dataset.locale = locale;
  document.title = copy.meta.title;

  const metaTitle = document.getElementById('meta-title');
  const metaDescription = document.getElementById('meta-description');
  const metaKeywords = document.getElementById('meta-keywords');
  const metaOgTitle = document.getElementById('meta-og-title');
  const metaOgDescription = document.getElementById('meta-og-description');
  const metaOgLocale = document.getElementById('meta-og-locale');
  const metaTwitterTitle = document.getElementById('meta-twitter-title');
  const metaTwitterDescription = document.getElementById('meta-twitter-description');
  const structuredData = document.getElementById('structured-data');

  if (metaTitle) metaTitle.content = copy.meta.title;
  if (metaDescription) metaDescription.content = copy.meta.description;
  if (metaKeywords) metaKeywords.content = copy.meta.keywords;
  if (metaOgTitle) metaOgTitle.content = copy.meta.ogTitle;
  if (metaOgDescription) metaOgDescription.content = copy.meta.ogDescription;
  if (metaOgLocale) metaOgLocale.content = meta.ogLocale;
  if (metaTwitterTitle) metaTwitterTitle.content = copy.meta.twitterTitle;
  if (metaTwitterDescription) metaTwitterDescription.content = copy.meta.twitterDescription;
  if (structuredData) {
    structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'MPBG Consulting',
      url: 'https://mpbg.ec',
      logo: 'https://mpbg.ec/assets/brand/logo_white.png',
      image: 'https://mpbg.ec/assets/brand/og-image.jpg',
      description: copy.meta.structuredDescription,
      email: 'info@mpbg.ec',
      sameAs: [
        'https://www.linkedin.com/company/mpbg-consulting',
        'https://www.instagram.com/mpbg_consulting'
      ],
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'EC'
      },
      priceRange: '$$'
    }, null, 2);
  }
};

const renderLocalizedContent = locale => {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const translation = getTranslation(locale, element.dataset.i18n);
    if (translation) {
      element.innerHTML = translation;
    }
  });

  document.querySelectorAll('[data-i18n-attr]').forEach(element => {
    element.dataset.i18nAttr.split(',').map(pair => pair.trim()).forEach(pair => {
      if (!pair) return;

      const [attribute, key] = pair.split(':').map(part => part.trim());
      if (!attribute || !key) return;

      const translation = getTranslation(locale, key);
      if (translation) {
        element.setAttribute(attribute, translation);
      }
    });
  });
};

let currentLocale = getUrlLocale() || safeGetStoredLocale() || DEFAULT_LOCALE;
let brochureEmbedContainer = null;

const applyLocale = (locale, options = {}) => {
  const normalizedLocale = SUPPORTED_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
  const { persist = true, syncUrl = true } = options;

  currentLocale = normalizedLocale;
  updateMetaTags(normalizedLocale);
  renderLocalizedContent(normalizedLocale);
  updateLanguageButtons(normalizedLocale);

  if (persist) {
    safeSetStoredLocale(normalizedLocale);
  }

  if (syncUrl) {
    updateUrlLocale(normalizedLocale);
  }

  if (brochureEmbedContainer && brochureEmbedContainer.dataset.loaded === 'true') {
    renderBrochureEmbed(brochureEmbedContainer, true);
  }
};

const renderBrochureEmbed = (container, force = false) => {
  if (!container || (!force && container.dataset.loaded === 'true')) {
    return;
  }

  const pdfSrc = container.dataset.pdfSrc;
  if (!pdfSrc) {
    return;
  }

  const copy = translations[currentLocale].embed;

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
          <h3 class="text-xl font-semibold text-white">${copy.title}</h3>
          <p class="text-lg text-zinc-400 leading-relaxed">${copy.description}</p>
        </div>
        <a href="${pdfSrc}" download
          class="px-6 py-3 bg-zinc-100 text-zinc-950 rounded-xl font-semibold text-lg hover:bg-white transition-colors">
          ${copy.download}
        </a>
      </div>
    </object>
  `;

  container.dataset.loaded = 'true';
};

initAnalytics();
applyLocale(currentLocale, { persist: false, syncUrl: false });

document.addEventListener('DOMContentLoaded', () => {
  const calendlyEventName = 'calendly.event_scheduled';

  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const lightbox = document.getElementById('image-lightbox');
  const lightboxImage = document.getElementById('image-lightbox-img');
  const lightboxClose = document.getElementById('image-lightbox-close');
  const brochureEmbed = document.querySelector('[data-lazy-pdf]');
  brochureEmbedContainer = brochureEmbed;

  const closeMobileMenu = () => {
    if (mobileMenu) {
      mobileMenu.classList.add('hidden');
    }
  };

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', event => {
      event.stopPropagation();
      mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('click', event => {
      if (!mobileMenu.contains(event.target) && !menuBtn.contains(event.target)) {
        closeMobileMenu();
      }
    });
  }

  document.querySelectorAll('[data-lang-switch]').forEach(button => {
    button.addEventListener('click', () => {
      applyLocale(button.dataset.langSwitch);
      closeMobileMenu();
    });
  });

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

  if (brochureEmbed) {
    if ('IntersectionObserver' in window) {
      const brochureObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            renderBrochureEmbed(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, {
        rootMargin: '300px 0px',
        threshold: 0
      });

      brochureObserver.observe(brochureEmbed);
    } else {
      renderBrochureEmbed(brochureEmbed);
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
      calendly_event_name: 'event_scheduled'
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
