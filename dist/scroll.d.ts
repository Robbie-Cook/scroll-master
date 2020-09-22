export default class Sticky {
    /**
     * Sticky instance constructor
     * @constructor
     * @param {string} selector - Selector which we can find elements
     * @param {string} options - Global options for sticky elements (could be overwritten by data-{option}="" attributes)
     */
    constructor(selector?: string, options?: string);
    selector: string;
    elements: any[];
    vp: object;
    body: HTMLBodyElement | null;
    options: {
        wrap: any;
        wrapWith: any;
        marginTop: any;
        marginBottom: any;
        stickyFor: any;
        stickyClass: any;
        stickyContainer: any;
    };
    /**
     * Function that updates window scroll position
     * @function
     * @return {number}
     */
    updateScrollTopPosition(): number;
    /**
     * Function that waits for page to be fully loaded and then renders & activates every sticky element found with specified selector
     * @function
     */
    run(): void;
    /**
     * Function that assign needed variables for sticky element, that are used in future for calculations and other
     * @function
     * @param {node} element - Element to be rendered
     */
    renderElement(element: any): void;
    /**
     * Wraps element into placeholder element
     * @function
     * @param {node} element - Element to be wrapped
     */
    wrapElement(element: any): void;
    /**
     * Function that activates element when specified conditions are met and then initalise events
     * @function
     * @param {node} element - Element to be activated
     */
    activate(element: any): void;
    /**
     * Function which is adding onResizeEvents to window listener and assigns function to element as resizeListener
     * @function
     * @param {node} element - Element for which resize events are initialised
     */
    initResizeEvents(element: any): void;
    /**
     * Removes element listener from resize event
     * @function
     * @param {node} element - Element from which listener is deleted
     */
    destroyResizeEvents(element: any): void;
    /**
     * Function which is fired when user resize window. It checks if element should be activated or deactivated and then run setPosition function
     * @function
     * @param {node} element - Element for which event function is fired
     */
    onResizeEvents(element: any): void;
    /**
     * Function which is adding onScrollEvents to window listener and assigns function to element as scrollListener
     * @function
     * @param {node} element - Element for which scroll events are initialised
     */
    initScrollEvents(element: any): void;
    /**
     * Removes element listener from scroll event
     * @function
     * @param {node} element - Element from which listener is deleted
     */
    destroyScrollEvents(element: any): void;
    /**
     * Function which is fired when user scroll window. If element is active, function is invoking setPosition function
     * @function
     * @param {node} element - Element for which event function is fired
     */
    onScrollEvents(element: any): void;
    /**
     * Main function for the library. Here are some condition calculations and css appending for sticky element when user scroll window
     * @function
     * @param {node} element - Element that will be positioned if it's active
     */
    setPosition(element: any): void;
    /**
     * Function that updates element sticky rectangle (with sticky container), then activate or deactivate element, then update position if it's active
     * @function
     */
    update(): void;
    /**
     * Destroys sticky element, remove listeners
     * @function
     */
    destroy(): void;
    /**
     * Function that returns container element in which sticky element is stuck (if is not specified, then it's stuck to body)
     * @function
     * @param {node} element - Element which sticky container are looked for
     * @return {node} element - Sticky container
     */
    getStickyContainer(element: any): any;
    /**
     * Function that returns element rectangle & position (width, height, top, left)
     * @function
     * @param {node} element - Element which position & rectangle are returned
     * @return {object}
     */
    getRectangle(element: any): object;
    /**
     * Function that returns viewport dimensions
     * @function
     * @return {object}
     */
    getViewportSize(): object;
    scrollTop: number | undefined;
    /**
     * Helper function for loops
     * @helper
     * @param {array}
     * @param {function} callback - Callback function (no need for explanation)
     */
    forEach(array: any, callback: Function): void;
    /**
     * Helper function to add/remove css properties for specified element.
     * @helper
     * @param {node} element - DOM element
     * @param {object} properties - CSS properties that will be added/removed from specified element
     */
    css(element: any, properties: object): void;
}
