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

## Install

```sh
npm i scroll-master
```

> A package that helps you with your scrolling things

N.B. Forked from [https://github.com/rgalus/sticky-js](sticky-js).

## Usage

Check out https://rgalus.github.io/sticky-js/ for a basic example (ofc, replace 'Sticky' with 'ScrollMaster')

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
ScrollMaster('.selector');
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

## Author

👤 **Robbie Cook <robbie@robbie.pw>**

- Website: robbie.pw
- Github: [@Robbie-Cook](https://github.com/Robbie-Cook)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Robbie Cook <robbie@robbie.pw>](https://github.com/Robbie-Cook).<br />
This project is [MIT](https://github.com/Robbie-Cook/scroll-master/blob/master/LICENSE) licensed.

This project was forked from [sticky-js](https://github.com/rgalus/sticky-js)

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
