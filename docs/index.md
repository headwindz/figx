---
title: figx - Figma Utilities Library
hero:
  title: figx
  desc: A comprehensive and reliable figma utilities library
  actions:
    - text: Guide
      link: /guide
    - text: Getting Started
      link: /utilities
footer: Open-source MIT Licensed | Copyright © 2020-present n0ruSh <br />Powered by [dumi](https://d.umijs.org)
---

## ✨ Features

- A comprehensive collection of utilities
- Easy to learn and use with clear documentation
- Written in TypeScript with native type support

## 📦 Install

```bash
$ npm install figx --save
# or
$ yarn add figx
```

## 🔨 Usage

```ts
import { toRgb, ColorFormat } from 'figx';
toRgb('#FF0000'); // => 'rgb(255, 0, 0)';
toRgb({ r: 255, g: 0, b: 0 }, ColorFormat.ARRAY); // => [255, 0, 0]
toRgb('hsl(0, 100%, 50%)', ColorFormat.OBJECT); // => { r: 255, g: 0, b: 0 }
```

## 💻 Demos

- [Sandbox][sandbox-link]
- [Runkit][runkit-link]

[sandbox-link]: https://codesandbox.io/s/demo-316l9?file=/src/index.js
[runkit-link]: https://runkit.com/n0rush/61d919edcdc69d0008742627

## 🤝 Contributing

```bash
$ git clone git@github.com:n0ruSh/figx.git
$ yarn
$ yarn start
```

Open your browser and visit http://127.0.0.1:8000
