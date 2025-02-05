#!/usr/bin/env bash

(
  set -e

  # go to highlight.js package folder and install dependencies
  cd node_modules/highlight.js
  pnpm install

  # generate highlight.js file
  node tools/build.js -t browser json typescript bash powershell dos python

  # return back
  cd ../..

  # copy result file to theme/highlight.js
  mkdir -p theme
  mv node_modules/highlight.js/build/highlight.min.js theme/highlight.js
)
