import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

var first = gsap.timeline({
  scrollTrigger: {
    trigger: "#first",
    markers: true,
    pin: true,
    scrub: 2,
  },
});

first.to("#first-foreground", {
  y: "-400px",
});

first.to(
  "#first-foreground-cover",
  {
    y: "-400px",
  },
  0
);

first.to(
  "#first-background",
  {
    y: "-200px",
  },
  0
);

first.to(
  "#first-h1",
  {
    y: "-150%",
  },
  0
);

first.to(
  "#first-bubble-one",
  {
    opacity: 1,
    duration: 0.1,
  },
  0.02
);

first.to(
  "#first-bubble-one",
  {
    opacity: 0,
    duration: 0.1,
  },
  0.32
);

first.to(
  "#first-bubble-two",
  {
    opacity: 1,
    duration: 0.1,
  },
  0.16
);

first.to(
  "#first-bubble-two",
  {
    opacity: 0,
    duration: 0.1,
  },
  0.32
);

var second = gsap.timeline({
  scrollTrigger: {
    trigger: "#second",
    markers: true,
    pin: true,
    scrub: 2,
  },
});

second.to(
  "#second img",
  {
    y: -0,
    opacity: 1,
    duration: 0.05,
  },
  0
);

flotte.to(
  ".appear",
  {
    y: -200,
    opacity: 0,
    duration: 0.05,
  },
  0.15
);

var multiple = gsap.timeline({
  scrollTrigger: {
    trigger: ".container-4",
    markers: true,
    pin: true,
    scrub: 2,
  },
});

multiple.to(".appear-first-left", {
  y: -200,
  opacity: 1,
  duration: 0.02,
});

multiple.to(
  ".appear-first-right",
  {
    y: -200,
    opacity: 1,
    duration: 0.02,
  },
  0.02
);

multiple.to(
  ".appear-second-left",
  {
    y: -200,
    opacity: 1,
    duration: 0.02,
  },
  0.04
);

multiple.to(
  ".appear-second-right",
  {
    y: -200,
    opacity: 1,
    duration: 0.02,
  },
  0.06
);
