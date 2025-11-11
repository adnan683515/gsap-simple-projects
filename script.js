let mm = gsap.matchMedia();


mm.add("(min-width: 1024px)", () => {

  gsap.from("#logo", {
    y: -400,
    scale: 6,

    color: 'white',
    scrollTrigger: {
      trigger: '.navbar',
      start: 'top 100%',
      end: '100% top',
      scrub: true
    }
  });

  gsap.from('.content h1', {
    y: 80,
    opacity: 0,
    stagger: .2,
    scrollTrigger: {
      trigger: '.content',
      start: '10% 50%',
      scrub: true,
      toggleActions: 'play reverse play reverse'
    }
  });

  const photos = document.querySelector('.photos');
  const photosContainer = photos.scrollWidth;
  const windowInner = window.innerWidth;
  const scrollDistance = photosContainer - windowInner + 280;

  gsap.to('.photos', {
    x: -scrollDistance,
    scrollTrigger: {
      trigger: '.photos-wrapper',
      start: '40% 40%',
      end: `+=${scrollDistance}`,
      scrub: true,
      pin: true
    }
  });

  gsap.from('.tags li', {
    y: 80,
    opacity: 0,
    stagger: .2,
    rotate: 10,
    scrollTrigger: {
      trigger: '.tags',
      start: 'top 70%',
      end: 'bottom 40%',
    }
  });

  gsap.from('.footer', {
    y: 100,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: '.footer',
      start: 'top 100%',
    }
  });

});


mm.add("(max-width: 1023px)", () => {

  gsap.from("#logo", {
    y: -100,
    scale: 3,
    color: 'white',
    scrollTrigger: {
      trigger: '.navbar',
      start: 'top 90%',
      end: '100% top',
      scrub: true
    }
  });

  gsap.from('.content h1', {
    y: 50,
    opacity: 0,
    stagger: .15,
    scrollTrigger: {
      trigger: '.content',
      start: 'top 80%',
      scrub: true,
      toggleActions: 'play reverse play reverse'
    }
  });

  const photos = document.querySelector('.photos');
  const photosContainer = photos.scrollWidth;
  const windowInner = window.innerWidth;
  const scrollDistance = photosContainer - windowInner + 100;

  gsap.to('.photos', {
    x: -scrollDistance,
    scrollTrigger: {
      trigger: '.photos-wrapper',
      start: 'top 50%',
      end: `+=${scrollDistance}`,
      scrub: true,
      pin: true
    }
  });

  gsap.from('.tags li', {
    y: 50,
    opacity: 0,
    stagger: .15,
    rotate: 5,
    scrollTrigger: {
      trigger: '.tags',
      start: 'top 80%',
      end: 'bottom 50%',
    }
  });

  gsap.from('.footer', {
    y: 60,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: '.footer',
      start: 'top 95%',
    }
  });

});
