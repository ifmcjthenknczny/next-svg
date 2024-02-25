# next-svg

## Description

`next-svg` is a lightweight module that provides React component that is especially designed to simplify the integration of SVG images into Next.js applications. With `next-svg`, you can momentarily and in satisfactory way import and render SVG files, customize and manage their appearance properties like color, width, height.

## What you need to know - put briefly

- Install by running `npm install next-svg`.
- Import the React component `Svg` from this module as the default import into a JSX/TSX file.
- The only required prop is `name` (the filename without extension).
- The SVG component searches for files located in the `/public/svg` directory. Ensure all your SVG files are placed there. If you wish to organize them into subdirectories, utilize the `subdirectory` prop.
- Additional props are available to customize the SVG image further.

## Installation

To install `next-svg` in your Next.js project, simply run:

```bash
npm i next-svg
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

- `name` **(required)**: The filename of the SVG image to render (no `.svg` extension needed).
- `subdirectory` (optional): The subdirectory within the `/public/svg/` directory where the SVG file is located.
- `className` (optional): Additional CSS class names to apply to the container div.
- `color` (optional): The fill color of the SVG image (accepts CSS values).
- `width` (optional): The width of the SVG image (accepts CSS values).
- `height` (optional): The height of the SVG image (accepts CSS values).

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

## Roadmap

- Develop functionality to enable users to configure the main folder for SVG files and other stuff.
- Ensure compatibility with different project architectures, including Next.js projects.
- Write comprehensive tests to validate the reliability and stability of the new feature.
- Optimize performance and resource utilization to minimize overhead.
- Provide illustrative examples and usage scenarios to assist users in implementing the feature.

## Contribution Guidelines

Contributions to the development of the custom SVG folder configuration feature are highly encouraged! If you wish to contribute, please adhere to the following guidelines:

    Fork the repository and create a new branch for your changes.
    Implement your changes following the project's coding standards and conventions.
    Submit a pull request with a descriptive summary of the proposed changes and their rationale.
    Engage in constructive discussions and address any feedback or suggestions from the maintainers.

## Feedback and Support

Your feedback and suggestions regarding the custom SVG folder configuration feature are invaluable! If you have any questions or ideas, please don't hesitate to reach out. Your input will help shape the future development of this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.