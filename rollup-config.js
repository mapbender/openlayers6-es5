import cjs from '@rollup/plugin-commonjs';
import node from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';

export default {
  input: 'src/entry.js',
  plugins: [
    node({browser: true}),
    cjs()
  ],
  output: [
    {
      format: 'iife',
      file: 'dist/ol-debug.js',
      name: 'ol',
      inlineDynamicImports: true,
      freeze: false
    },
    {
      format: 'iife',
      file: 'dist/ol.js',
      name: 'ol',
      plugins: [terser()],
      sourcemap: true,
      sourcemapExcludeSources: true,
      inlineDynamicImports: true,
      freeze: false
    }
  ]
};

