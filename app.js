const flightpath = {
  curviness: 1.25,
  autoRotate: true,
  values: [
    { x: 350, y: 0 },
    { x: 450, y: 0 },
    { x: 550, y: 0 },

    { x: window.innerWidth, y: -700 }
  ]
};

const tween = new TimelineLite();

tween.add(
  TweenLite.to(".paper-plane", 1, {
    bezier: flightpath,
    ease: Power1.easeInOut
  })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".animation",
  duration: 1000,
  triggerHook: 0
})

  .setTween(tween)

  .setPin(".animation")
  .addTo(controller);
