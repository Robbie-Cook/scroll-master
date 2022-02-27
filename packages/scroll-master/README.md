<h1 align="center">Welcome to Scroll Master 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/Robbie-Cook/scroll-master#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/Robbie-Cook/scroll-master/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/Robbie-Cook/scroll-master/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/Robbie-Cook/Scroll Master Monorepo" />
  </a>
</p>

## Demo

Website: https://scrollmaster.robbie.digital

Code: https://github.com/Robbie-Cook/scroll-master/tree/master/packages/test

## Install

```sh
npm i scroll-master
```

> A better `position: sticky`


N.B. Forked from [https://github.com/rgalus/sticky-js](sticky-js).

### ES6 / CommonJS

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

### HTML

```html
<script src="https://unpkg.com/scroll-master@latest/dist/index.js">
```

then

```html
<script>
ScrollMaster.default('selector');
</script>
```

### Options

Option | Type | Default | Description
------ | ---- | ------- | ----
data-sticky-wrap | boolean | false | When it's `true` sticky element is wrapped in `<span></span>` which has sticky element dimensions. Prevents content from "jumping".
data-margin-top | number | 0 | Margin between page and sticky element when scrolled
data-sticky-for | number | 0 | Breakpoint which when is bigger than viewport width, sticky is activated and when is smaller, then sticky is destroyed
data-sticky-class | string | "stuck" | Class added to sticky element when it is stuck
data-custom-styles | boolean | false | Whether to remove default styles for sticky element (and only apply classname)
