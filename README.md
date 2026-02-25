<p align="center">
  <img src="assets/logo.svg" alt="ogdens-word-list logo" width="640" />
</p>

# ogdens-word-list

`ogdens-word-list` checks text against Ogden's Basic English word list so you can quickly spot words that may reduce readability.

## Project overview

The library exposes two functions:

- `check(text)`: returns words not found in the Basic English list (case-insensitive matching for known words).
- `highlight(text)`: returns HTML with non-matching words wrapped in an underline `<span>`.

## Install

```bash
npm install ogdens-word-list
```

## Usage

```js
const enBasic = require('ogdens-word-list');

const text = 'cat kubernetes dog';
const unsupported = enBasic.check(text);

console.log(unsupported); // ["kubernetes"]
console.log(enBasic.highlight(text));
// cat <span style="text-decoration: underline;">kubernetes</span> dog
```

Browser usage is still supported with the bundled script:

```html
<script src="en-basic.js"></script>
<script>
  console.log(enBasic.check('cat kubernetes dog'));
</script>
```

## Scripts

- `npm run lint`: run Biome lint checks.
- `npm run lint:fix`: apply Biome lint fixes where possible.
- `npm run format`: format supported files with Biome.
- `npm test`: run Jest tests.
- `npm run test:coverage`: run Jest with coverage thresholds.
- `npm run prepare`: enable git hooks with Husky.

## Development workflow

1. Install dependencies with `npm install`.
2. Enable hooks with `npm run prepare`.
3. Make changes.
4. Run `npm run lint` and `npm test` before pushing.

### Commit message linting

This repository uses Commitlint with conventional commit rules.

- Hook file: `.husky/commit-msg`
- To enable locally after clone: `npm run prepare`

## Release process

Releases are managed with Release Please + automated npm publish via GitHub Actions:

1. Merge conventional commits into `main` or `master`.
2. Release Please opens/updates a release PR with version and changelog updates.
3. Merge the release PR to create a GitHub release.
4. On release publish, `.github/workflows/publish.yml` runs lint/tests and publishes to npm.

> To enable publishing, set the `NPM_TOKEN` repository secret.
