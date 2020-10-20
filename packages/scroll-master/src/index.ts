import Sticky from "./scroll";

// Allows import from web
if (window) {
  (window as any).ScrollMaster = Sticky;
}

export default Sticky;