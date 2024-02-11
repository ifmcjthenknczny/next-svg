# next-svg

## Description

`next-svg` is a lightweight module that provides React component that is especially designed to simplify the integration of SVG images into Next.js applications. With `next-svg`, you can momentarily and in satisfactory way import and render SVG files, customize and manage their appearance properties like color, width, height.

## What you need to know - briefly

- Install by running `npm install next-svg`.
- Import the React component `Svg` from this module as the default import into a JSX/TSX file.
- The only required prop is `name` (the filename without extension).
- The SVG component searches for files located in the `/public/svg` directory. Ensure all your SVG files are placed there. If you wish to organize them into subdirectories, utilize the `subdirectory` prop.
- Additional props are available to customize the SVG image further.

## Installation

To install `next-svg` in your Next.js project, simply run:

```bash
npm install next-svg
```
or
```bash
yarn add next-svg
```

## Usage

Import `next-svg` module in your React component file:

```javascript
import Svg from 'next-svg';
```

Then, use the `Svg` component in your JSX/TSX file to render SVG images:

```javascript
<Svg name="icon" />
```

## Props

The `Svg` component accepts the following props:

- `name` (required): The filename of the SVG image to render (no `.svg` extension needed).
- `subdirectory` (optional): The subdirectory within the `/public/svg/` directory where the SVG file is located.
- `className` (optional): Additional CSS class names to apply to the container div.
- `color` (optional): The fill color of the SVG image.
- `width` (optional): The width of the SVG image.
- `height` (optional): The height of the SVG image.

## Example

```javascript
import React from 'react';
import Svg from 'next-svg';

const MySvgComponent = () => {
  return (
      <Svg name="logo" subdirectory="icons" className="logo" color="blue" width={100} height={100} />
  );
};

export default MySvgComponent;
```

In this example, the file path is `/public/svg/icons/logo.svg`. The SVG is rendered with a blue fill color and a width and height of 100 pixels. Div in which SVG file is placed gains all styles from className `logo`.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.