import ScrollMaster from "./scroll";

// Allows import from web
if (window) {
  (window as any).ScrollMaster = ScrollMaster;
}

console.log('hello');
(window as any).hello = "hi"!

export default ScrollMaster;