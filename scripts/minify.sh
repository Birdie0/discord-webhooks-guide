#!/usr/bin/env bash

# minify html
pnpm exec html-minifier \
  --collapse-boolean-attributes \
  --collapse-whitespace \
  --decode-entities \
  --minify-css true \
  --minify-js true \
  --process-conditional-comments \
  --remove-attribute-quotes \
  --remove-comments \
  --remove-empty-attributes \
  --remove-optional-tags \
  --remove-script-type-attributes \
  --remove-style-link-type-attributes \
  --sort-attributes \
  --sort-class-name \
  --use-short-doctype \
  --input-dir ./book \
  --output-dir ./book \
  --file-ext html

# minify css
find ./book -type f -name "*.css" | \
  xargs -P0 -i -- pnpm exec csso --comments none -i {} -o {}

# minify js
find ./book -type f -name "*.js" | \
  xargs -P0 -i -- pnpm exec terser {} -o {}

# minify svg
pnpm exec svgo -q -r -f ./book
