gsap.from("#logo", {
  y: -160, //y axis
  scale: 6, //size of text
  color: 'white',
  scrollTrigger: {
    trigger: '.navbar',
    start: 'top 100%', //scroll start hobe 
    end: '100% top',
    // markers : true,
    scrub: true //end scrooll-end  k na cross kore tototkhn tmi scroll koro
  }
})


gsap.from('.content h1', {

  y: 80,
  opacity: 0,
  stagger: .2,

  scrollTrigger: {
    trigger: '.content',
    start: '10% 50%',
    // end : 'bottom top',
    scrub: true,

    toggleActions: 'play reverse play reverse' //reverse korar jonno 
  }
})


const photos = document.querySelector('.photos') //oi div ta k dorlam
const photosConTainer = photos.scrollWidth //photo container ar width ber korlam
const windowInner = window.innerWidth //device ar width ber korlam
const scrollDistance = photosConTainer - windowInner + 280 //koto tuku scroll korbo calculate korlam



gsap.to('.photos', {
  x: -scrollDistance,
  scrollTrigger : {
    trigger : '.photos-wrapper',
    start : '40% 40%',
    end : `+=${scrollDistance}`,
    scrub : true,
    pin : true
  }
})

gsap.from('.tags li',{

  y : 80,
  opacity : 0,
  stagger : .2,
  rotate : 10,
  scrollTrigger : {

    trigger : '.tags',
    start : 'top 70%',
    end : 'bottom 40%',
  }
})
gsap.from('.footer',{
  y : 100,
  opacity : 0, 
  duration : 2,
  scrollTrigger : {

    trigger : '.footer',
    start : 'top 100%',


  }
})