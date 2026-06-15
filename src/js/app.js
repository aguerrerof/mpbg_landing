document.addEventListener('DOMContentLoaded', () => {
  const calendlyEventName = 'calendly.event_scheduled';

  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const lightbox = document.getElementById('image-lightbox');
  const lightboxImage = document.getElementById('image-lightbox-img');
  const lightboxClose = document.getElementById('image-lightbox-close');
  const heroRotator = document.getElementById('hero-rotator');
  const heroSlides = heroRotator ? heroRotator.querySelectorAll('[data-hero-slide]') : [];
  const heroDots = heroRotator ? heroRotator.querySelectorAll('[data-hero-dot]') : [];
  const heroPrev = heroRotator ? heroRotator.querySelector('.hero-prev') : null;
  const heroNext = heroRotator ? heroRotator.querySelector('.hero-next') : null;
  const heroInterval = heroRotator ? Number(heroRotator.dataset.heroInterval || 5500) : 5500;

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
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

  const setHeroSlide = index => {
    heroSlides.forEach((slide, slideIndex) => {
      slide.classList.toggle('is-active', slideIndex === index);
    });

    heroDots.forEach((dot, dotIndex) => {
      dot.classList.toggle('bg-white/70', dotIndex === index);
      dot.classList.toggle('bg-white/30', dotIndex !== index);
    });
  };

  let heroIndex = 0;
  let heroTimer = null;

  const restartHeroTimer = () => {
    if (heroTimer) {
      clearInterval(heroTimer);
    }

    heroTimer = setInterval(() => {
      heroIndex = (heroIndex + 1) % heroSlides.length;
      setHeroSlide(heroIndex);
    }, heroInterval);
  };

  const goToHeroSlide = index => {
    heroIndex = (index + heroSlides.length) % heroSlides.length;
    setHeroSlide(heroIndex);
    restartHeroTimer();
  };

  if (heroSlides.length && heroDots.length) {
    setHeroSlide(heroIndex);

    heroDots.forEach((dot, dotIndex) => {
      dot.addEventListener('click', () => goToHeroSlide(dotIndex));
    });

    if (heroPrev) {
      heroPrev.addEventListener('click', () => goToHeroSlide(heroIndex - 1));
    }

    if (heroNext) {
      heroNext.addEventListener('click', () => goToHeroSlide(heroIndex + 1));
    }

    restartHeroTimer();
  }

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

  // Calendly emits booking events via postMessage; forward the scheduled event to GTM.
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
});
