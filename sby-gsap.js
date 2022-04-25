// GSAP Animation Sequences with ScrollTrigger
// Demo using Space Battleship Yamato Assets.
// Copyright - Yoshinobu Nishizaki /

// Preload images
window.onload = function () {
  //hide the preloader
  document.querySelector("#preloader").style.display = "none";
};

// Setup image sequences
function sequenceOne() {
  let section = document.querySelector("#v1");
  let canvas = section.querySelector(".c1");
  initCanvas(section, canvas);
}
sequenceOne();

function sequenceTwo() {
  let section = document.querySelector("#v2");
  let canvas = section.querySelector(".c2");
  initCanvas2(section, canvas);
}
sequenceTwo();

function sequenceThree() {
  let section = document.querySelector("#v3");
  let canvas = section.querySelector(".c3");
  initCanvas3(section, canvas);
}
sequenceThree();
// Todo: Refactor code

// GSAP ScrollTrigger Animation
function initCanvas(section, canvas) {
  // Animation text sections overlayed on the canvas
  let text = section.querySelector(".text");
  let context = canvas.getContext("2d");
  // Canvas size
  canvas.width = 960;
  canvas.height = 540;

  // Setup PNG sequence total frames
  let frameCount = 70;
  // Setup PNG sequence current frame
  const currentFrame = (index) => `./assets/${(index + 1).toString().padStart(4, "0")}.png`;
  // Setup empty array to push images
  let images = [];
  // Set start frame for image sequence
  let yamatoSequence = {
    frame: 0,
  };

  // Loop through frames and push to array
  for (let i = 0; i < frameCount; i++) {
    let img = new Image();
    img.src = currentFrame(i);
    images.push(img);
  }

  // GSAP ScrollTrigger Animation Timeline
  gsap
    .timeline({
      onUpdate: render,
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1.5,
        end: "+=100%",
        markers: false,
      },
    })
    // Text animation
    .to(text, {
      opacity: 1,
      y: -300,
      duration: 1.5,
    })
    // Image sequence animation
    .to(
      yamatoSequence,
      {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        duration: 2,
      },
      0
    );

  // Render image sequence
  images[0].onload = render;

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[yamatoSequence.frame], 0, 0);
  }
}

function initCanvas2(section, canvas) {
  let text = section.querySelector(".text");
  let context = canvas.getContext("2d");
  canvas.width = 960;
  canvas.height = 540;

  let frameCount = 212;
  const currentFrame = (index) => `./assets/${(index + 1).toString().padStart(4, "0")}.png`;

  let images = [];
  let yamatoSequence = {
    frame: 70,
  };

  for (let i = 0; i < frameCount; i++) {
    let img = new Image();
    img.src = currentFrame(i);
    images.push(img);
  }

  gsap
    .timeline({
      onUpdate: render,
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1.5,
        end: "+=100%",
        markers: false,
      },
    })
    .to(text, {
      opacity: 1,
      y: -300,
      duration: 1.5,
    })
    .to(
      yamatoSequence,
      {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        duration: 4,
      },
      0
    );

  images[0].onload = render;

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[yamatoSequence.frame], 0, 0);
  }
}

function initCanvas3(section, canvas) {
  let text = section.querySelector(".text");
  let context = canvas.getContext("2d");
  canvas.width = 960;
  canvas.height = 540;

  let frameCount = 432;
  const currentFrame = (index) => `./assets/${(index + 1).toString().padStart(4, "0")}.png`;

  let images = [];
  let yamatoSequence = {
    frame: 213,
  };

  for (let i = 0; i < frameCount; i++) {
    let img = new Image();
    img.src = currentFrame(i);
    images.push(img);
  }

  gsap
    .timeline({
      onUpdate: render,
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: true,
        end: "+=1000%",
        markers: false,
      },
    })
    .to(text, {
      opacity: 1,
      y: -300,
      duration: 1.5,
    })
    .to(
      yamatoSequence,
      {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        duration: 60,
      },
      0
    );

  images[0].onload = render;

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[yamatoSequence.frame], 0, 0);
  }
}

// GSAP ScrollTrigger Animation Text Sections
function initOther(section) {
  ScrollTrigger.create({
    trigger: section,
    pin: true,
    end: "+=10%",
  });
}
