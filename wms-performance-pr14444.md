Patch contains changes from Openlayers PR#14444, fixes #14436.

See https://github.com/openlayers/openlayers/pull/14444
See https://github.com/openlayers/openlayers/issues/14436

This optimizes canvas usage for performance with many Wms image layers.

wms-performance-pr14444.patch is the raw code change of PR#14444

However, the code received from NPM has differences, and the patch will not apply

wms-performance-pr14444.npm.patch is a manual conversion of the patch so that it applies to the npm package contents.

To apply this patch:
```sh
# Ensure original package contents are installed
npm install
# Use git apply to conveniently apply single patch file to node_modules/ol tree
cat wms-performance-pr14444.npm.patch | git -C node_modules/ol apply --no-index -v -p2
```

Git apply output should look like this:
```
Checking patch node_modules/ol/Image.js...
Checking patch node_modules/ol/renderer/canvas/ImageLayer.js...
Checking patch node_modules/ol/source/ImageArcGISRest.js...
Checking patch node_modules/ol/source/ImageMapGuide.js...
Checking patch node_modules/ol/source/ImageStatic.js...
Checking patch node_modules/ol/source/ImageWMS.js...
Applied patch node_modules/ol/Image.js cleanly.
Applied patch node_modules/ol/renderer/canvas/ImageLayer.js cleanly.
Applied patch node_modules/ol/source/ImageArcGISRest.js cleanly.
Applied patch node_modules/ol/source/ImageMapGuide.js cleanly.
Applied patch node_modules/ol/source/ImageStatic.js cleanly.
Applied patch node_modules/ol/source/ImageWMS.js cleanly.
```

Rebuild
```sh
npm run build
```

For Mapbender, rerun asset relocation
```sh
mapbender-project/application$ bin/composer run post-install-cmd
```




