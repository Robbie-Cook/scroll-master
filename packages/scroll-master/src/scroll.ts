export type Options = {
  wrap?: any;
  wrapWith?: any;
  marginTop?: any;
  marginBottom?: any;
  stickyFor?: any;
  stickyClass?: any;
  stickyContainer?: any;
};

export type StickyElement = HTMLElement & { sticky: any };

export default class ScrollMaster {
  selector: string;
  elements: HTMLElement[];
  vp: { width: number; height: number };
  body: HTMLBodyElement | null;
  options: Options;
  scrollTop?: number;

  /**
   * Sticky instance constructor
   * @constructor
   * @param {string} selector - Selector which we can find elements
   * @param {string} options - Global options for sticky elements (could be overwritten by data-{option}="" attributes)
   */
  constructor(selector: string = "", options: Options = {}) {
    this.selector = selector;
    this.elements = [];

    this.vp = this.getViewportSize();
    this.body = document.querySelector("body");

    this.options = {
      wrap: options.wrap || false,
      wrapWith: options.wrapWith || "<span></span>",
      marginTop: options.marginTop || 0,
      marginBottom: options.marginBottom || 0,
      stickyFor: options.stickyFor || 0,
      stickyClass: options.stickyClass || "stuck",
      stickyContainer: options.stickyContainer || "body",
    };

    this.updateScrollTopPosition = this.updateScrollTopPosition.bind(this);

    this.updateScrollTopPosition();
    window.addEventListener("load", this.updateScrollTopPosition);
    window.addEventListener("scroll", this.updateScrollTopPosition);

    this.run();
  }

  /**
   * Function that waits for page to be fully loaded and then renders & activates every sticky element found with specified selector
   * @function
   */
  run() {
    // wait for page to be fully loaded
    const pageLoaded = setInterval(() => {
      if (document.readyState === "complete") {
        clearInterval(pageLoaded);

        const elements = document.querySelectorAll(this.selector);
        this.forEach(elements, (element: any) => this.renderElement(element));
      }
    }, 10);
  }

  /**
   * Function that assign needed variables for sticky element, that are used in future for calculations and other
   * @function
   * @param {node} element - Element to be rendered
   */
  renderElement(element: StickyElement) {
    // create container for variables needed in future
    element.sticky = {};

    // set default variables
    element.sticky.active = false;

    element.sticky.customStyles =
      element.getAttribute("data-custom-styles") ?? false;
    element.sticky.marginTop =
      parseInt(element.getAttribute("data-margin-top") ?? "") ||
      this.options.marginTop;
    element.sticky.marginBottom =
      parseInt(element.getAttribute("data-margin-bottom") ?? "") ||
      this.options.marginBottom;
    element.sticky.stickyFor =
      parseInt(element.getAttribute("data-sticky-for") ?? "") ||
      this.options.stickyFor;
    element.sticky.stickyClass =
      element.getAttribute("data-sticky-class") || this.options.stickyClass;
    element.sticky.wrap = element.hasAttribute("data-sticky-wrap")
      ? true
      : this.options.wrap;
    // @todo attribute for stickyContainer
    // element.sticky.stickyContainer = element.getAttribute('data-sticky-container') || this.options.stickyContainer;
    element.sticky.stickyContainer = this.options.stickyContainer;

    element.sticky.container = this.getStickyContainer(element);
    element.sticky.container.rect = this.getRectangle(element.sticky.container);

    element.sticky.rect = this.getRectangle(element);

    // fix when element is image that has not yet loaded and width, height = 0
    if (element.tagName.toLowerCase() === "img") {
      element.onload = () => (element.sticky.rect = this.getRectangle(element));
    }

    if (element.sticky.wrap) {
      this.wrapElement(element);
    }

    // activate rendered element
    this.activate(element);
  }

  /**
   * Wraps element into placeholder element
   * @function
   * @param {node} element - Element to be wrapped
   */
  wrapElement(element: StickyElement) {
    element.insertAdjacentHTML(
      "beforebegin",
      element.getAttribute("data-sticky-wrapWith") || this.options.wrapWith
    );
    element.previousSibling?.appendChild(element);
  }

  /**
   * Function that activates element when specified conditions are met and then initalise events
   * @function
   * @param {Element} element - Element to be activated
   */
  activate(element: StickyElement) {
    if (
      element.sticky.rect.top + element.sticky.rect.height <
        element.sticky.container.rect.top +
          element.sticky.container.rect.height &&
      element.sticky.stickyFor < this.vp.width &&
      !element.sticky.active
    ) {
      element.sticky.active = true;
    }

    if (this.elements.indexOf(element) < 0) {
      this.elements.push(element);
    }

    if (!element.sticky.resizeEvent) {
      this.initResizeEvents(element);
      element.sticky.resizeEvent = true;
    }

    if (!element.sticky.scrollEvent) {
      this.initScrollEvents(element);
      element.sticky.scrollEvent = true;
    }

    this.setPosition(element);
  }

  /**
   * Function which is adding onResizeEvents to window listener and assigns function to element as resizeListener
   * @function
   * @param {node} element - Element for which resize events are initialised
   */
  initResizeEvents(element: StickyElement) {
    element.sticky.resizeListener = () => this.onResizeEvents(element);
    window.addEventListener("resize", element.sticky.resizeListener);
  }

  /**
   * Removes element listener from resize event
   * @function
   * @param {node} element - Element from which listener is deleted
   */
  destroyResizeEvents(element: StickyElement) {
    window.removeEventListener("resize", element.sticky.resizeListener);
  }

  /**
   * Function which is fired when user resize window. It checks if element should be activated or deactivated and then run setPosition function
   * @function
   * @param {node} element - Element for which event function is fired
   */
  onResizeEvents(element: StickyElement) {
    this.vp = this.getViewportSize();

    element.sticky.rect = this.getRectangle(element);
    element.sticky.container.rect = this.getRectangle(element.sticky.container);

    if (
      element.sticky.rect.top + element.sticky.rect.height <
        element.sticky.container.rect.top +
          element.sticky.container.rect.height &&
      element.sticky.stickyFor < this.vp.width &&
      !element.sticky.active
    ) {
      element.sticky.active = true;
    } else if (
      element.sticky.rect.top + element.sticky.rect.height >=
        element.sticky.container.rect.top +
          element.sticky.container.rect.height ||
      (element.sticky.stickyFor >= this.vp.width && element.sticky.active)
    ) {
      element.sticky.active = false;
    }

    this.setPosition(element);
  }

  /**
   * Function which is adding onScrollEvents to window listener and assigns function to element as scrollListener
   * @function
   * @param {node} element - Element for which scroll events are initialised
   */
  initScrollEvents(element: StickyElement) {
    element.sticky.scrollListener = () => this.onScrollEvents(element);
    window.addEventListener("scroll", element.sticky.scrollListener);
  }

  /**
   * Removes element listener from scroll event
   * @function
   * @param {node} element - Element from which listener is deleted
   */
  destroyScrollEvents(element: StickyElement) {
    window.removeEventListener("scroll", element.sticky.scrollListener);
  }

  /**
   * Function which is fired when user scroll window. If element is active, function is invoking setPosition function
   * @function
   * @param {node} element - Element for which event function is fired
   */
  onScrollEvents(element: StickyElement) {
    if (element.sticky && element.sticky.active) {
      this.setPosition(element);
    }
  }

  /**
   * Main function for the library. Here are some condition calculations and css appending for sticky element when user scroll window
   * @function
   * @param {node} element - Element that will be positioned if it's active
   */
  setPosition(element: StickyElement) {
    this.css(element, { position: "", width: "", top: "", left: "" });
    // element.classList.remove("stuck");

    if (!element.sticky.active) {
      return;
    }

    if (!element.sticky.rect.width) {
      element.sticky.rect = this.getRectangle(element);
    }

    if (element.sticky.wrap) {
      this.css(element.parentElement, {
        display: "block",
        width: element.sticky.rect.width + "px",
        height: element.sticky.rect.height + "px",
      });
    }

    if (
      element.sticky.rect.top === 0 &&
      element.sticky.container === this.body
    ) {
      if (!element.sticky.customStyles) {
        this.css(element, {
          position: "fixed",
          top: element.sticky.rect.top + "px",
          left: element.sticky.rect.left + "px",
          width: element.sticky.rect.width + "px",
        });
      }
      if (element.sticky.stickyClass) {
        element.classList.add(element.sticky.stickyClass);
      }
    } else if (
      this.scrollTop &&
      this.scrollTop > element.sticky.rect.top - element.sticky.marginTop
    ) {
      if (!element.sticky.customStyles) {
        this.css(element, {
          position: "fixed",
          width: element.sticky.rect.width + "px",
          left: element.sticky.rect.left + "px",
        });
      }

      if (
        this.scrollTop + element.sticky.rect.height + element.sticky.marginTop >
        element.sticky.container.rect.top +
          element.sticky.container.offsetHeight -
          element.sticky.marginBottom
      ) {
        if (element.sticky.stickyClass) {
          element.classList.remove(element.sticky.stickyClass);
        }

        this.css(element, {
          top:
            element.sticky.container.rect.top +
            element.sticky.container.offsetHeight -
            (this.scrollTop +
              element.sticky.rect.height +
              element.sticky.marginBottom) +
            "px",
        });
      } else {
        if (element.sticky.stickyClass) {
          element.classList.add(element.sticky.stickyClass);
        }

        this.css(element, { top: element.sticky.marginTop + "px" });
      }
    } else {
      if (element.sticky.stickyClass) {
        element.classList.remove(element.sticky.stickyClass);
      }

      this.css(element, { position: "", width: "", top: "", left: "" });
      if (element.sticky.wrap) {
        this.css(element.parentElement, { display: "", width: "", height: "" });
      }
    }
  }

  /**
   * Function that updates element sticky rectangle (with sticky container), then activate or deactivate element, then update position if it's active
   * @function
   */
  update() {
    this.forEach(this.elements, (element: StickyElement) => {
      element.sticky.rect = this.getRectangle(element);
      element.sticky.container.rect = this.getRectangle(
        element.sticky.container
      );

      this.activate(element);
      this.setPosition(element);
    });
  }

  /**
   * Destroys sticky element, remove listeners
   * @function
   */
  destroy() {
    window.removeEventListener("load", this.updateScrollTopPosition);
    window.removeEventListener("scroll", this.updateScrollTopPosition);

    this.forEach(this.elements, (element: StickyElement) => {
      this.destroyResizeEvents(element);
      this.destroyScrollEvents(element);
      delete element.sticky;
    });
  }

  /**
   * Function that returns container element in which sticky element is stuck (if is not specified, then it's stuck to body)
   * @function
   * @param {node} element - Element which sticky container are looked for
   * @return {node} element - Sticky container
   */
  getStickyContainer(element: StickyElement) {
    let container = element.parentElement;

    while (
      !container?.hasAttribute("data-sticky-container") &&
      !container?.parentElement?.querySelector(
        element.sticky.stickyContainer
      ) &&
      container !== this.body
    ) {
      // @ts-expect-error
      container = container?.parentNode ?? null;
    }

    return container;
  }

  /**
   * Function that returns element rectangle & position (width, height, top, left)
   * @function
   * @param {node} element - Element which position & rectangle are returned
   * @return {object}
   */
  getRectangle(element: StickyElement) {
    this.css(element, { position: "", width: "", top: "", left: "" });

    const width = Math.max(
      element.offsetWidth,
      element.clientWidth,
      element.scrollWidth
    );
    const height = Math.max(
      element.offsetHeight,
      element.clientHeight,
      element.scrollHeight
    );

    let top = 0;
    let left = 0;

    do {
      top += element.offsetTop || 0;
      left += element.offsetLeft || 0;
      element = element.offsetParent as StickyElement;
    } while (element);

    return { top, left, width, height };
  }

  /**
   * Function that returns viewport dimensions
   * @function
   * @return {object}
   */
  getViewportSize() {
    return {
      width: Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      ),
      height: Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      ),
    };
  }

  /**
   * Function that updates window scroll position
   * @function
   * @return {number}
   */
  updateScrollTopPosition() {
    this.scrollTop =
      (window.pageYOffset || document.body.scrollTop) - (document.body.clientTop || 0) ||
      0;
  }

  /**
   * Helper function for loops
   * @helper
   * @param {array}
   * @param {function} callback - Callback function (no need for explanation)
   */
  forEach(
    array: string | any[] | NodeListOf<Element>,
    callback: {
      (element: any): void;
      (element: StickyElement): void;
      (element: StickyElement): void;
      (arg0: any): void;
    }
  ) {
    for (let i = 0, len = array.length; i < len; i++) {
      callback(array[i]);
    }
  }

  /**
   * Helper function to add/remove css properties for specified element.
   * @helper
   * @param {node} element - DOM element
   * @param {object} properties - CSS properties that will be added/removed from specified element
   */
  css(
    element: HTMLElement | null,
    properties: {
      [x: string]: any;
      position?: string;
      width?: string;
      top?: string;
      left?: string;
      display?: string;
      height?: string;
      hasOwnProperty?: any;
    }
  ) {
    for (let property in properties) {
      if (properties.hasOwnProperty(property) && element) {
        // @ts-expect-error
        element.style[property] = properties[property];
      }
    }
  }
}