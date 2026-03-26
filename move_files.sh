#!/bin/bash

# Loop through all subdirectories
for dir in */; do
    # Remove trailing slash
    dirname="${dir%/}"

    # Skip if not a directory
    [ -d "$dirname" ] || continue

    # Move and rename code.html
    if [ -f "$dirname/code.html" ]; then
        mv "$dirname/code.html" "./${dirname}.html"
        echo "Moved $dirname/code.html -> ${dirname}.html"
    fi

    # Move and rename screen.png
    if [ -f "$dirname/screen.png" ]; then
        mv "$dirname/screen.png" "./${dirname}.png"
        echo "Moved $dirname/screen.png -> ${dirname}.png"
    fi
done
