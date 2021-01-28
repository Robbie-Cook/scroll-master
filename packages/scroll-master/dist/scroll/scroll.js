"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var merge_1 = __importDefault(require("lodash/merge"));
var throttle_1 = __importDefault(require("lodash/throttle"));
var ScrollMaster = /** @class */ (function () {
    /**
     * Sticky instance constructor
     * @constructor
     * @param selector - Selector which we can find elements
     * @param options - Global options for sticky elements (could be overwritten by data-{option}="" attributes)
     */
    function ScrollMaster(selector, options) {
        var _this = this;
        if (selector === void 0) { selector = ""; }
        if (options === void 0) { options = {}; }
        /**
         * Function that returns element rectangle & position (width, height, top, left)
         * @function
         * @param element - Element which position & rectangle are returned
         * @return {object}
         */
        this.getRectangle = function (element) {
            _this.css(element, { position: "", width: "", top: "", left: "" });
            var width = Math.max(element.offsetWidth, element.clientWidth, element.scrollWidth);
            var height = Math.max(element.offsetHeight, element.clientHeight, element.scrollHeight);
            var top = 0;
            var left = 0;
            do {
                top += element.offsetTop || 0;
                left += element.offsetLeft || 0;
                element = element.offsetParent;
            } while (element);
            return { top: top, left: left, width: width, height: height };
        };
        this.selector = selector;
        this.elements = [];
        this.vp = this.getViewportSize();
        this.body = document.querySelector("body");
        this.options = merge_1["default"](options, {
            wrap: false,
            wrapWith: "<span></span>",
            marginTop: 0,
            stickyFor: 0,
            stickyClass: "stuck",
            stickyContainer: "body"
        });
        this.updateScrollTopPosition = this.updateScrollTopPosition.bind(this);
        this.updateScrollTopPosition();
        window.addEventListener("load", this.updateScrollTopPosition);
        window.addEventListener("scroll", throttle_1["default"](this.updateScrollTopPosition, 10), true);
        this.run();
    }
    /**
     * Function that waits for page to be fully loaded and then renders & activates every sticky element found with specified selector
     * @function
     */
    ScrollMaster.prototype.run = function () {
        var _this = this;
        document.addEventListener("DOMContentLoaded", function () {
            var elements = document.querySelectorAll(_this.selector);
            _this.forEach(elements, function (element) { return _this.renderElement(element); });
        });
    };
    /**
     * Function that assign needed variables for sticky element, that are used in future for calculations and other
     * @function
     * @param element - Element to be rendered
     */
    ScrollMaster.prototype.renderElement = function (element) {
        var _this = this;
        var _a, _b, _c, _d;
        var position = "top";
        if (element.hasAttribute("data-sticky-position") &&
            element.getAttribute("data-sticky-position") === "bottom") {
            position = "bottom";
        }
        // @ts-expect-error
        element.sticky = {
            active: false,
            customStyles: (_a = !!element.getAttribute("data-custom-styles")) !== null && _a !== void 0 ? _a : false,
            marginTop: parseInt((_b = element.getAttribute("data-margin-top")) !== null && _b !== void 0 ? _b : "") ||
                this.options.marginTop,
            marginBottom: parseInt((_c = element.getAttribute("data-margin-bottom")) !== null && _c !== void 0 ? _c : "") ||
                this.options.marginBottom,
            stickyFor: parseInt((_d = element.getAttribute("data-sticky-for")) !== null && _d !== void 0 ? _d : "") ||
                this.options.stickyFor,
            stickyClass: element.getAttribute("data-sticky-class") || this.options.stickyClass,
            wrap: element.hasAttribute("data-sticky-wrap") ? true : this.options.wrap,
            position: position,
            stickyContainer: this.options.stickyContainer,
            rect: this.getRectangle(element),
            container: this.getStickyContainer(element)
        };
        element.sticky.container.rect = this.getRectangle(element.sticky.container);
        // fix when element is image that has not yet loaded and width, height = 0
        if (element.tagName.toLowerCase() === "img") {
            element.onload = function () { return (element.sticky.rect = _this.getRectangle(element)); };
        }
        if (element.sticky.wrap) {
            this.wrapElement(element);
        }
        // activate rendered element
        this.activate(element);
    };
    /**
     * Wraps element into placeholder element
     * @function
     * @param element - Element to be wrapped
     */
    ScrollMaster.prototype.wrapElement = function (element) {
        var _a;
        element.insertAdjacentHTML("beforebegin", element.getAttribute("data-sticky-wrapWith") || this.options.wrapWith);
        (_a = element.previousSibling) === null || _a === void 0 ? void 0 : _a.appendChild(element);
    };
    /**
     * Function that activates element when specified conditions are met and then initalise events
     * @function
     * @param element - Element to be activated
     */
    ScrollMaster.prototype.activate = function (element) {
        if (element.sticky.rect.top + element.sticky.rect.height <
            element.sticky.container.rect.top +
                element.sticky.container.rect.height &&
            element.sticky.stickyFor < this.vp.width &&
            !element.sticky.active) {
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
    };
    /**
     * Function which is adding onResizeEvents to window listener and assigns function to element as resizeListener
     * @function
     * @param element - Element for which resize events are initialised
     */
    ScrollMaster.prototype.initResizeEvents = function (element) {
        var _this = this;
        element.sticky.resizeListener = function () { return _this.onResizeEvents(element); };
        window.addEventListener("resize", element.sticky.resizeListener);
    };
    /**
     * Removes element listener from resize event
     * @function
     * @param element - Element from which listener is deleted
     */
    ScrollMaster.prototype.destroyResizeEvents = function (element) {
        window.removeEventListener("resize", element.sticky.resizeListener);
    };
    /**
     * Function which is fired when user resize window. It checks if element should be activated or deactivated and then run setPosition function
     * @function
     * @param element - Element for which event function is fired
     */
    ScrollMaster.prototype.onResizeEvents = function (element) {
        this.vp = this.getViewportSize();
        element.sticky.rect = this.getRectangle(element);
        element.sticky.container.rect = this.getRectangle(element.sticky.container);
        if (element.sticky.rect.top + element.sticky.rect.height <
            element.sticky.container.rect.top +
                element.sticky.container.rect.height &&
            element.sticky.stickyFor < this.vp.width &&
            !element.sticky.active) {
            element.sticky.active = true;
        }
        else if (element.sticky.rect.top + element.sticky.rect.height >=
            element.sticky.container.rect.top +
                element.sticky.container.rect.height ||
            (element.sticky.stickyFor >= this.vp.width && element.sticky.active)) {
            element.sticky.active = false;
        }
        this.setPosition(element);
    };
    /**
     * Function which is adding onScrollEvents to window listener and assigns function to element as scrollListener
     * @function
     * @param element - Element for which scroll events are initialised
     */
    ScrollMaster.prototype.initScrollEvents = function (element) {
        var _this = this;
        element.sticky.scrollListener = function () { return _this.onScrollEvents(element); };
        window.addEventListener("scroll", element.sticky.scrollListener, true);
    };
    /**
     * Removes element listener from scroll event
     * @function
     * @param element - Element from which listener is deleted
     */
    ScrollMaster.prototype.destroyScrollEvents = function (element) {
        window.removeEventListener("scroll", element.sticky.scrollListener, true);
    };
    /**
     * Function which is fired when user scroll window. If element is active, function is invoking setPosition function
     * @function
     * @param element - Element for which event function is fired
     */
    ScrollMaster.prototype.onScrollEvents = function (element) {
        if (element.sticky && element.sticky.active) {
            this.setPosition(element);
        }
    };
    /**
     * Code to initialise the position
     */
    ScrollMaster.prototype.initPosition = function (element) {
        if (!element.sticky.active) {
            element.classList.remove(element.sticky.stickyClass);
            return;
        }
        element.classList.add(element.sticky.stickyClass);
        if (!element.sticky.rect.width) {
            element.sticky.rect = this.getRectangle(element);
        }
        if (element.sticky.wrap) {
            this.css(element.parentElement, {
                display: "block",
                width: element.sticky.rect.width + "px",
                height: element.sticky.rect.height + "px"
            });
        }
    };
    /**
     * Set the position for sticky-bottom
     */
    ScrollMaster.prototype.setStickyBottomPosition = function (element) {
        this.initPosition(element);
        var stickyContainer = this.getStickyContainer(element);
        var bottom = element.sticky.marginBottom + "px";
        element.classList.remove(element.sticky.stickyClass);
        // Logic if we have a container
        if (stickyContainer) {
            var stickyContainerBox = this.getRectangle(stickyContainer);
            var elementBox = this.getRectangle(element);
            var bottomOfStickyContainer = stickyContainerBox.top + stickyContainerBox.height;
            var currentYBottom = Math.ceil(window.scrollY) + window.innerHeight;
            // If container not visible, should be hidden
            if (currentYBottom < stickyContainerBox.top + elementBox.height) {
                this.css(element, { display: "none" });
            }
            else if (currentYBottom >
                bottomOfStickyContainer - element.sticky.marginBottom) {
                // After the bottom of container comes into view
                bottom = currentYBottom -
                    (bottomOfStickyContainer - element.sticky.marginBottom) + "px";
                element.style.removeProperty("display");
                this.css(element, { position: "fixed", bottom: bottom });
            }
            else {
                this.css(element, { position: "fixed", bottom: "0px" });
                element.style.removeProperty("display");
            }
            // // Once container comes into view
            // if (window.scrollY < stickyContainerBox.top + element.sticky.marginTop) {
            //   // this.css(element, { display: "none" });
            // } else if (!element.classList.contains(element.sticky.stickyClass)) {
            //   element.classList.add(element.sticky.stickyClass);
            //   element.style.removeProperty("display");
            // }
        }
        this.css(element, { position: "fixed", bottom: bottom });
    };
    /**
     * Main function for the library. Here are some condition calculations and css appending for sticky element when user scroll window
     * @function
     * @param element - Element that will be positioned if it's active
     */
    ScrollMaster.prototype.setPosition = function (element) {
        this.css(element, { position: "", width: "", top: "", left: "" });
        this.initPosition(element);
        if (element.sticky.position === "bottom") {
            return this.setStickyBottomPosition(element);
        }
        if (element.sticky.rect.top === 0 &&
            element.sticky.container === this.body) {
            if (!element.sticky.customStyles) {
                this.css(element, {
                    position: "fixed",
                    top: element.sticky.rect.top + "px",
                    left: element.sticky.rect.left + "px",
                    width: element.sticky.rect.width + "px"
                });
            }
            if (element.sticky.stickyClass) {
                element.classList.add(element.sticky.stickyClass);
            }
        }
        else if (this.scrollTop &&
            this.scrollTop > element.sticky.rect.top - element.sticky.marginTop) {
            if (!element.sticky.customStyles) {
                this.css(element, {
                    position: "fixed",
                    width: element.sticky.rect.width + "px",
                    left: element.sticky.rect.left + "px"
                });
            }
            if (this.scrollTop + element.sticky.rect.height + element.sticky.marginTop >
                element.sticky.container.rect.top +
                    element.sticky.container.offsetHeight -
                    element.sticky.marginBottom) {
                if (element.sticky.stickyClass) {
                    element.classList.remove(element.sticky.stickyClass);
                }
                this.css(element, {
                    top: element.sticky.container.rect.top +
                        element.sticky.container.offsetHeight -
                        (this.scrollTop +
                            element.sticky.rect.height +
                            element.sticky.marginBottom) +
                        "px"
                });
            }
            else {
                if (element.sticky.stickyClass) {
                    element.classList.add(element.sticky.stickyClass);
                }
                this.css(element, { top: element.sticky.marginTop + "px" });
            }
        }
        else {
            if (element.sticky.stickyClass) {
                element.classList.remove(element.sticky.stickyClass);
            }
            this.css(element, { position: "", width: "", top: "", left: "" });
            if (element.sticky.wrap) {
                this.css(element.parentElement, { display: "", width: "", height: "" });
            }
        }
    };
    /**
     * Function that updates element sticky rectangle (with sticky container), then activate or deactivate element, then update position if it's active
     * @function
     */
    ScrollMaster.prototype.update = function () {
        var _this = this;
        this.forEach(this.elements, function (element) {
            element.sticky.rect = _this.getRectangle(element);
            element.sticky.container.rect = _this.getRectangle(element.sticky.container);
            _this.activate(element);
            _this.setPosition(element);
        });
    };
    /**
     * Destroys sticky element, remove listeners
     * @function
     */
    ScrollMaster.prototype.destroy = function () {
        var _this = this;
        window.removeEventListener("load", this.updateScrollTopPosition);
        window.removeEventListener("scroll", function () {
            _this.updateScrollTopPosition();
        });
        this.forEach(this.elements, function (element) {
            _this.destroyResizeEvents(element);
            _this.destroyScrollEvents(element);
            // @ts-expect-error
            delete element.sticky;
        });
    };
    /**
     * Function that returns container element in which sticky element is stuck (if is not specified, then it's stuck to body)
     * @function
     * @param element - Element which sticky container are looked for
     * @return {node} element - Sticky container
     */
    ScrollMaster.prototype.getStickyContainer = function (element) {
        var _a, _b;
        var container = element.parentElement;
        while (!(container === null || container === void 0 ? void 0 : container.hasAttribute("data-sticky-container")) &&
            !((_a = container === null || container === void 0 ? void 0 : container.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector(element.sticky.stickyContainer)) &&
            container !== this.body) {
            // @ts-expect-error
            container = (_b = container === null || container === void 0 ? void 0 : container.parentNode) !== null && _b !== void 0 ? _b : null;
        }
        return container;
    };
    /**
     * Function that returns viewport dimensions
     * @function
     * @return {object}
     */
    ScrollMaster.prototype.getViewportSize = function () {
        return {
            width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
            height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
        };
    };
    /**
     * Function that updates window scroll position
     * @function
     * @return {number}
     */
    ScrollMaster.prototype.updateScrollTopPosition = function () {
        this.scrollTop =
            (window.pageYOffset || document.body.scrollTop) -
                (document.body.clientTop || 0) || 0;
    };
    /**
     * Helper function for loops
     * @helper
     * @param
     * @param callback - Callback function (no need for explanation)
     */
    ScrollMaster.prototype.forEach = function (array, callback) {
        for (var i = 0, len = array.length; i < len; i++) {
            callback(array[i]);
        }
    };
    /**
     * Helper function to add/remove css properties for specified element.
     * @helper
     * @param element - DOM element
     * @param properties - CSS properties that will be added/removed from specified element
     */
    ScrollMaster.prototype.css = function (element, properties) {
        for (var property in properties) {
            if (properties.hasOwnProperty(property) && element) {
                // @ts-expect-error
                element.style[property] = properties[property];
            }
        }
    };
    return ScrollMaster;
}());
exports["default"] = ScrollMaster;
//# sourceMappingURL=scroll.js.map