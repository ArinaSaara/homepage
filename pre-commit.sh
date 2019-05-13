#!/bin/sh
if npm run r; then
#if workbox generateSW workbox-config.js ; then
  git add sw.js
  exit 0
else
  echo "Cannot generate sw.js"
  echo "Aborting"
fi

