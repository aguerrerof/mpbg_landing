const DEFAULT_LOCALE = 'es';
const STORAGE_KEY = 'mpbg-locale';
const SUPPORTED_LOCALES = ['es', 'en'];

const translations = {
  es: {
    meta: {
      title: 'MPBG Consulting | Consultoría Tecnológica, Desarrollo de Software & Staff Augmentation',
      description: 'Líderes en consultoría tecnológica B2B y B2C, arquitectura de software, desarrollo a medida, automatización y staff augmentation. Equipo de +30 consultores multidisciplinarios.',
      keywords: 'consultoria tecnologica, desarrollo de software, staff augmentation, arquitectura de software, laravel, python, microservicios, n8n automatizacion, sercop, mpbg consulting'
    },
    locale: {
      esLabel: 'Español',
      enLabel: 'Inglés'
    },
    nav: {
      services: 'Servicios',
      stack: 'Tecnologías & Capacidades',
      caseStudy: 'Caso de Éxito',
      schedule: 'Agendar',
      menu: 'Abrir menú'
    },
   hero: {
      badge: 'Primera asesoría gratuita',
      title: 'Consultoría Tecnológica, Desarrollo de Software & Staff Augmentation',
      description: 'Resolvemos la complejidad operativa e infraestructura de tu empresa o aplicación, adaptándonos perfectamente a lo que tus requerimientos exigen para acelerar el éxito de tus productos digitales.',
      primaryCta: 'Agendar consultoría gratuita (Videollamada)'
    },
    skills: {
      tag: 'Infografía de Capacidades & Stack Empresarial',
      title: 'Ecosistema técnico que impulsa al equipo detrás de MPBG',
      desc: 'Infografía corporativa interactiva con el stack tecnológico de nuestros 30 consultores especialistas.',
      backend: { title: 'Backend' },
      frontend: { title: 'Frontend & Móvil' },
      db: { title: 'Bases de Datos' },
      cloud: { title: 'Cloud & DevOps' },
      auto: { title: 'Automatización & ERP' },
      ai: { title: 'IA Generativa & Modelos' }
    },
    case: {
      badge: '✨ Caso de Éxito Real',
      title: 'Caso de éxito: Sniffy - Transformación de una operación logística en una plataforma escalable.',
      desc: 'En MPBG Consulting transformamos una operación logística compleja en una infraestructura de alto rendimiento. Sniffy necesitaba mayor velocidad, control operativo centralizado y una base lista para crecer.'
    },
    contact: {
      sub: 'Proceso de Admisión Técnica',
      title: 'Inicia tu consultoría técnica corporativa',
      desc: 'Completa tus requerimientos a continuación; al enviarlos, podrás agendar inmediatamente tu videollamada con nuestro equipo de consultores.'
    },
    form: {
      stepTag: 'Paso 1 de 2',
      heading: 'Requerimientos del proyecto',
      name: 'Nombre y Apellido *',
      email: 'Correo Electrónico *',
      company: 'Empresa / Proyecto *',
      q1: 'Área de apoyo técnico *',
      selectOpt: 'Selecciona una opción...',
      q2: 'Presupuesto estimado *',
      selectRange: 'Selecciona un rango...',
      challenge: 'Cuéntenos algo que nos ayude a prepararnos para la reunión:',
      error: 'Por favor completa todos los campos obligatorios.',
      btn: 'Continuar a agendar videollamada'
    },
    video: {
      badge: '🟢 Paso 2 de 2: Videollamada técnica (30 min)',
      title: 'Selecciona fecha y hora en el calendario',
      loading: 'Cargando disponibilidad de consultores...'
    },
    direct: {
      title: '¿Prefieres contacto directo?'
    },
    services: {
      tag: 'Soluciones de Alto Impacto',
      title: 'Soluciones reales para problemas de negocio reales',
      consulting: {
        title: 'Consultoría Estratégica & Optimización Cloud',
        painPoint: '¿Costos operativos en la nube descontrolados, lentitud en los sistemas o plataformas difíciles de escalar?',
        description: 'Diagnosticamos tu infraestructura, reducimos costos innecesarios y diseñamos bases sólidas para garantizar la continuidad y velocidad de tu empresa.'
      },
      software: {
        title: 'Desarrollo a Medida & Automatización',
        painPoint: '¿Procesos manuales repetitivos, sistemas desconectados o falta de visibilidad operativa en tiempo real?',
        description: 'Construimos plataformas a medida y conectamos tus sistemas clave (ERP, logísticos y comerciales) mediante flujos automatizados que eliminan errores y horas de trabajo manual.'
      },
      staff: {
        title: 'Refuerzo de Equipos (Staff Augmentation)',
        painPoint: '¿Faltan consultores especializados o líderes técnicos calificados para cumplir con los plazos de entrega del negocio?',
        description: 'Integramos de forma inmediata consultores experimentados a tus células de trabajo internas, asegurando entregas puntuales y altos estándares de calidad.'
      }
    }
  },
  en: {
    meta: {
      title: 'MPBG Consulting | Tech Consulting, Software Development & Staff Augmentation',
      description: 'Leaders in B2B and B2C tech consulting, software architecture, custom development, automation, and staff augmentation. Team of 30+ multidisciplinary consultants.',
      keywords: 'tech consulting, software development, staff augmentation, software architecture, devops, laravel, python, microservices, n8n automation, mpbg consulting'
    },
    locale: {
      esLabel: 'Spanish',
      enLabel: 'English'
    },
    nav: {
      services: 'Services',
      stack: 'Technologies & Capabilities',
      caseStudy: 'Case Study',
      schedule: 'Book',
      menu: 'Open menu'
    },
    hero: {
      badge: '✨ 30+ Multidisciplinary Consultants · First free consultation',
      title: 'Technology Consulting, Software Development & Staff Augmentation',
      description: 'We streamline operational complexity and tech infrastructure for your business or app. We offer 30+ multidisciplinary consultants specializing in cloud architecture, custom software, and team augmentation to accelerate your digital growth.',
      primaryCta: 'Book Free Consultation (Video Call)'
    },
    skills: {
      tag: 'Capabilities Infographic & Stack',
      title: 'Technical ecosystem powering the team behind MPBG',
      desc: 'Interactive corporate infographic displaying the stack of our 30 specialist consultants.',
      backend: { title: 'Backend' },
      frontend: { title: 'Frontend & Mobile' },
      db: { title: 'Databases' },
      cloud: { title: 'Cloud & DevOps' },
      auto: { title: 'Automation & ERP' },
      ai: { title: 'Generative AI & Models' }
    },
    case: {
      badge: '✨ Real Case Study',
      title: 'Case study: Sniffy - Transforming a logistics operation into a scalable platform.',
      desc: 'At MPBG Consulting we transformed a complex logistics operation into a high-performance infrastructure. Sniffy needed faster processing, centralized operational control, and a scalable foundation.'
    },
    contact: {
      sub: 'Technical Admission Process',
      title: 'Start your corporate technical consulting',
      desc: 'Complete your requirements below; upon submission, you can immediately schedule your video call with our consulting team.'
    },
    form: {
      stepTag: 'Step 1 of 2',
      heading: 'Project Requirements',
      name: 'Full Name *',
      email: 'Email Address *',
      company: 'Company / Project *',
      q1: 'Technical Support Area *',
      selectOpt: 'Select an option...',
      q2: 'Estimated Budget *',
      selectRange: 'Select a range...',
      challenge: 'Tell us something that helps us prepare for the call:',
      error: 'Please fill out all required fields.',
      btn: 'Continue to schedule video call'
    },
    video: {
      badge: '🟢 Step 2 of 2: Technical Video Call (30 min)',
      title: 'Select date and time on the calendar',
      loading: 'Loading consultant availability...'
    },
    direct: {
      title: 'Prefer direct contact?'
    },
    services: {
      tag: 'High-Impact Solutions',
      title: 'Real solutions for real business challenges',
      consulting: {
        title: 'Strategic Consulting & Cloud Optimization',
        painPoint: 'Uncontrolled cloud operating costs, slow systems, or platforms hard to scale?',
        description: 'We diagnose your infrastructure, reduce unnecessary costs, and build solid foundations to ensure continuity and speed.'
      },
      software: {
        title: 'Custom Development & Automation',
        painPoint: 'Repetitive manual processes, disconnected systems, or lack of real-time operational visibility?',
        description: 'We build custom platforms and connect your core systems (ERP, logistics, and sales) through automated workflows that eliminate manual work hours.'
      },
      staff: {
        title: 'Team Augmentation (Staff Augmentation)',
        painPoint: 'Missing specialized consultants or qualified leads to meet business delivery deadlines?',
        description: 'We immediately integrate experienced consultants into your internal squads, ensuring timely deliveries and high quality standards.'
      }
    }
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
  try { window.localStorage.setItem(STORAGE_KEY, locale); } catch {}
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

const updateLanguageButtons = locale => {
  document.querySelectorAll('[data-lang-switch]').forEach(button => {
    const isActive = button.dataset.langSwitch === locale;
    button.setAttribute('aria-pressed', String(isActive));
    button.classList.toggle('bg-blue-100', isActive);
    button.classList.toggle('text-blue-950', isActive);
    button.classList.toggle('border-blue-100', isActive);
    button.classList.toggle('bg-blue-900/60', !isActive);
    button.classList.toggle('text-blue-200', !isActive);
    button.classList.toggle('border-blue-800', !isActive);
  });
};

const renderLocalizedContent = locale => {
  const meta = translations[locale]?.meta;
  if (meta) {
    document.title = meta.title;
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute('content', meta.description);
    const keywordsEl = document.querySelector('meta[name="keywords"]');
    if (keywordsEl) keywordsEl.setAttribute('content', meta.keywords);
  }

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const translation = getTranslation(locale, element.dataset.i18n);
    if (translation) {
      element.innerHTML = translation;
    }
  });
};

let currentLocale = getUrlLocale() || safeGetStoredLocale() || DEFAULT_LOCALE;

const applyLocale = (locale, options = {}) => {
  const normalizedLocale = SUPPORTED_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
  const { persist = true } = options;
  currentLocale = normalizedLocale;
  renderLocalizedContent(normalizedLocale);
  updateLanguageButtons(normalizedLocale);
  if (persist) safeSetStoredLocale(normalizedLocale);
};

applyLocale(currentLocale, { persist: false });

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  const closeMobileMenu = () => {
    if (mobileMenu) mobileMenu.classList.add('hidden');
  };

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', event => {
      event.stopPropagation();
      mobileMenu.classList.toggle('hidden');
    });
    mobileLinks.forEach(link => { link.addEventListener('click', closeMobileMenu); });
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

  const stepFormContainer = document.getElementById('step-form-container');
  const stepVideoContainer = document.getElementById('step-video-container');
  const backToFormBtn = document.getElementById('back-to-form-btn');
  
  const unifiedForm = document.getElementById('unified-challenge-form');
  const unifiedError = document.getElementById('unified-error');
  const unifiedName = document.getElementById('unified-name');
  const unifiedEmail = document.getElementById('unified-email');
  const unifiedCompany = document.getElementById('unified-company');
  const unifiedArea = document.getElementById('unified-area');
  const unifiedBudget = document.getElementById('unified-budget');
  const unifiedChallenge = document.getElementById('unified-challenge');

  let calendlyLoaded = false;

  const loadCalendlyWidget = (prefillData) => {
    const container = document.getElementById('video-embed-container');
    const loader = document.getElementById('calendly-loader');

    const hideLoader = () => {
      if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 300);
      }
    };

    const calendlyConfig = {
      url: 'https://calendly.com/mpbg-agent/30min?hide_landing_page_details=1&hide_gdpr_banner=1',
      parentElement: container,
      prefill: {
        name: prefillData.name,
        email: prefillData.email,
        customAnswers: {
          a1: prefillData.combinedDetails 
        }
      }
    };

    if (window.Calendly) {
      if (!calendlyLoaded) {
        window.Calendly.initInlineWidget(calendlyConfig);
        calendlyLoaded = true;
      }
      setTimeout(hideLoader, 800);
    } else {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => {
        if (container && window.Calendly) {
          window.Calendly.initInlineWidget(calendlyConfig);
          calendlyLoaded = true;
          setTimeout(hideLoader, 800);
        }
      };
      document.body.appendChild(script);
    }
  };

  if (unifiedForm) {
    unifiedForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!unifiedName.value || !unifiedEmail.value || !unifiedCompany.value || !unifiedArea.value || !unifiedBudget.value) {
        if (unifiedError) unifiedError.classList.remove('hidden');
        return;
      }
      if (unifiedError) unifiedError.classList.add('hidden');

      const combinedDetails = 
        `Empresa / Cargo: ${unifiedCompany.value} | ` +
        `Área de Apoyo: ${unifiedArea.value} | ` +
        `Presupuesto: ${unifiedBudget.value} | ` +
        `Detalle del Proyecto: ${unifiedChallenge.value || 'N/A'}`;

      stepFormContainer.classList.add('hidden');
      stepVideoContainer.classList.remove('hidden');

      loadCalendlyWidget({
        name: unifiedName.value,
        email: unifiedEmail.value,
        combinedDetails: combinedDetails
      });
    });
  }

  if (backToFormBtn) {
    backToFormBtn.addEventListener('click', () => {
      stepVideoContainer.classList.add('hidden');
      stepFormContainer.classList.remove('hidden');
    });
  }
});