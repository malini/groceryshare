# GroceryShare

This template should help get you started developing with Vue 3 in Vite.

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
cd frontend/
npm install
```

### Compile and Hot-Reload for Development

```sh
cd frontend/
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
cd frontend/
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
cd frontend/
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev) - Not supported yet

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
cd frontend/
npm run lint
```
