# Description

Used the Vue framework and provided mock API data to deliver the following UI using only single-file components
Design: https://www.figma.com/file/WsYziGEHRaKAIwqx2Hbd4A/VUE-Test

## Requirements
Use Slots
Create multiple Components from the example
Include basic styling, sorting, pagination, and items per page
Search/filter should function
Indicators should toggle between 3 states


## Functional Requirements
Does not need to add a product
Make responsive up to tablet size with 2 columns of data
Try to keep your development time to around 1 hour, max

## Considerations
- The implementation is not 1:1 to the design, it covers the minmun requirements for styles, if given more time I'll do a better css folder management and overall look and feel
- I added pagination since it was needed for product navigation.
- Used Pinia for state management and better reactivity.
- Added a composable for shared functionality and keeping the componetns cleaner.
- Left broken data from the mock api in order to show the alt value fallback for accessibility.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
