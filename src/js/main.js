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
  y: -1000,
});

first.to(
  "#first-foreground-cover",
  {
    y: -1002,
  },
  0
);

first.to(
  "#first-background",
  {
    y: -400,
  },
  0
);

first.to(
  "#first-background",
  {
    opacity: 0,
  },
  0.1
);

first.to(
  "#first-h1",
  {
    y: "-150%",
  },
  0
);

first.to(
  "#first-h1",
  {
    opacity: 0,
    duration: 0.05,
  },
  0.1
);

first.to(
  "#first-bubble-one",
  {
    opacity: 1,
    duration: 0.1,
  },
  0.04
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
  0.22
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

second.to("#second img", {
  y: 0,
  opacity: 1,
  duration: 0.02,
});

second.to(
  "#second img",
  {
    y: -200,
    opacity: 0,
    duration: 0.02,
  },
  0.04
);

var third = gsap.timeline({
  scrollTrigger: {
    trigger: "#third",
    markers: true,
    pin: true,
    scrub: 2,
  },
});

third.to("#third-left-one", {
  y: 0,
  opacity: 1,
  duration: 0.1,
});

third.to(
  "#third-right-one",
  {
    y: 0,
    opacity: 1,
    duration: 0.1,
  },
  0.16
);

third.to(
  "#third-left-two",
  {
    y: 0,
    opacity: 1,
    duration: 0.1,
  },
  0.32
);

third.to(
  "#third-right-two",
  {
    y: 0,
    opacity: 1,
    duration: 0.1,
  },
  0.48
);

third.to(
  "#third-right-one",
  {
    y: -1000,
    opacity: 1,
  },
  0.6
);

third.to(
  "#third-right-two",
  {
    y: -1000,
    opacity: 1,
  },
  0.6
);

third.to(
  "#third-left-one",
  {
    y: -800,
    opacity: 1,
  },
  0.6
);

third.to(
  "#third-left-two",
  {
    y: -800,
    opacity: 1,
  },
  0.6
);

var fourth = gsap.timeline({
  scrollTrigger: {
    trigger: "#fourth",
    markers: true,
    pin: true,
    scrub: 2,
  },
});

fourth.to("#fourth-background", {
  y: -2000,
});

var fifth = gsap.timeline({
  scrollTrigger: {
    trigger: "#fifth",
    markers: true,
    pin: true,
    scrub: 2,
  },
});

fifth.to("#fifth-panel", {
  y: 0,
  opacity: 1,
  duration: 0.05,
});

fifth.to(
  "#fifth-panel",
  {
    y: -200,
    opacity: 0,
    duration: 0.05,
  },
  0.1
);
