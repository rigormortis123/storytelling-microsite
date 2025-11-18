import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

var first = gsap.timeline({
  scrollTrigger: {
    trigger: "#first",
    markers: false,
    pin: true,
    scrub: 2,
  },
});

first.to("#first-foreground", {
  y: -1200,
});

first.to(
  "#first-foreground-cover",
  {
    y: -1202,
  },
  0
);

first.to(
  "#first-background",
  {
    y: -600,
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
  "#first-h1",
  {
    opacity: 0,
    duration: 0.05,
  },
  0.2
);

first.to(
  "#first-background",
  {
    opacity: 0,
    duration: 0.1,
  },
  0.3
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
  0.4
);

first.to(
  "#first-bubble-two",
  {
    opacity: 1,
    duration: 0.1,
  },
  0.2
);

first.to(
  "#first-bubble-two",
  {
    opacity: 0,
    duration: 0.1,
  },
  0.4
);

var second = gsap.timeline({
  scrollTrigger: {
    trigger: "#second",
    markers: false,
    pin: true,
    scrub: 2,
  },
});

second.to("#second img", {
  y: 0,
  opacity: 1,
  duration: 0.1,
});

second.to("#second img", {
  y: -200,
  opacity: 0,
  duration: 0.1,
}),
  0.5;

var third = gsap.timeline({
  scrollTrigger: {
    trigger: "#third",
    markers: false,
    pin: true,
    scrub: 2,
  },
});

third.to("#third-left-one", {
  y: 0,
  opacity: 1,
  duration: 0.08,
});

third.to(
  "#third-right-one",
  {
    y: 0,
    opacity: 1,
    duration: 0.08,
  },
  0.15
);

third.to(
  "#third-left-two",
  {
    y: 0,
    opacity: 1,
    duration: 0.08,
  },
  0.3
);

third.to(
  "#third-right-two",
  {
    y: 0,
    opacity: 1,
    duration: 0.08,
  },
  0.45
);

third.to(
  "#third-right-one",
  {
    y: -1100,
    opacity: 1,
  },
  0.6
);

third.to(
  "#third-right-two",
  {
    y: -1100,
    opacity: 1,
  },
  0.6
);

third.to(
  "#third-left-one",
  {
    y: -1000,
    opacity: 1,
  },
  0.6
);

third.to(
  "#third-left-two",
  {
    y: -1000,
    opacity: 1,
  },
  0.6
);

var fourth = gsap.timeline({
  scrollTrigger: {
    trigger: "#fourth",
    markers: false,
    pin: true,
    scrub: 2,
  },
});

fourth.to("#fourth-background", {
  y: -2500,
});

var fifth = gsap.timeline({
  scrollTrigger: {
    trigger: "#fifth",
    markers: false,
    pin: true,
    scrub: 2,
  },
});

fifth.to("#fifth-panel", {
  y: 0,
  opacity: 1,
  duration: 0.2,
});

fifth.to(
  "#fifth-panel",
  {
    y: -200,
    opacity: 0,
    duration: 0.2,
  },
  0.5
);

var sixth = gsap.timeline({
  scrollTrigger: {
    trigger: "#sixth",
    markers: false,
    pin: true,
    scrub: 2,
  },
});

sixth.to("#sixth-left", {
  y: 0,
  opacity: 1,
  duration: 0.13,
});

sixth.to(
  "#sixth-right",
  {
    y: 0,
    opacity: 1,
    duration: 0.13,
  },
  0.2
);

sixth.to(
  "#sixth-bubble",
  {
    opacity: 1,
    duration: 0.13,
  },
  0.4
);

sixth.to(
  "#sixth-left",
  {
    y: -900,
    duration: 0.3,
  },
  0.6
);

sixth.to(
  "#sixth-right",
  {
    y: -1000,
    duration: 0.3,
  },
  0.6
);

sixth.to(
  "#sixth-bubble",
  {
    y: -250,
    duration: 0.3,
  },
  0.6
);

sixth.to(
  "#sixth-bubble",
  {
    opacity: 0,
    duration: 0.13,
  },
  0.8
);

var seventh = gsap.timeline({
  scrollTrigger: {
    trigger: "#seventh",
    markers: false,
    pin: true,
    scrub: 2,
  },
});

seventh.to("#seventh img", {
  y: 0,
  scale: 1,
  duration: 0.3,
});

seventh.to(
  "#seventh img",
  {
    y: -1000,
  },
  0.6
);

seventh.to(
  "#footer-h1",
  {
    opacity: 1,
    duration: 0.13,
  },
  0.4
);

var footer = gsap.timeline({
  scrollTrigger: {
    trigger: "footer",
    markers: false,
    pin: true,
    scrub: 2,
  },
});

footer.to(".footer-wrapper", {
  y: 0,
  duration: 0.2,
});
