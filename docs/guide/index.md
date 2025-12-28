# Intro

`figx` is a comprehensive and reliable figma utilities library.

## ✨ Features

- A comprehensive collection of utilities
- Easy to learn and use with clear documentation
- Written in TypeScript with native type support

## 📦 Install

```bash
$ npm install figx --save
# or
$ yarn add figx
# or
$ pnpm add figx
```

## 🔨 Usage

```ts
import { toRgb, ColorFormat } from 'figx';
toRgb('#FF0000'); // => 'rgb(255, 0, 0)';
toRgb({ r: 255, g: 0, b: 0 }, ColorFormat.ARRAY); // => [255, 0, 0]
toRgb('hsl(0, 100%, 50%)', ColorFormat.OBJECT); // => { r: 255, g: 0, b: 0 }
```
