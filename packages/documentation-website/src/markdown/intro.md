## Installation

###  ES6 / CommonJS

```typescript
import ScrollMaster from "scroll-master";
```

or

```typescript
const { default: ScrollMaster } = require("scroll-master");
```
then, you can call scroll master to keep your item in view

```typescript
new ScrollMaster('.selector');
```

## Options

Option | Type | Default | Description
------ | ---- | ------- | ----
data-sticky-wrap | boolean | false | When it's `true` sticky element is wrapped in `<span></span>` which has sticky element dimensions. Prevents content from "jumping".
data-margin-top | number | 0 | Margin between page and sticky element when scrolled
data-sticky-for | number | 0 | Breakpoint which when is bigger than viewport width, sticky is activated and when is smaller, then sticky is destroyed
data-sticky-class | string | "stuck" | Class added to sticky element when it is stuck
data-custom-styles | boolean | false | Whether to remove default styles for sticky element (and only apply classname)
