#!/bin/sh
if workbox generateSW workbox-config.js ; then
  git add sw.js
  exit 0
else
  echo "Cannot generate sw.js"
  echo "Aborting"
fi