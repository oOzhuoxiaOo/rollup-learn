// rollup.config.mjs
// ---cut-start---
import json from '@rollup/plugin-json';
// ---cut-end---
export default {
    input: 'src/main.js',
    plugins: [
        json()
    ],
    output: {
        dir: 'dist',
        format: 'esm',
        entryFileNames: 'index.js'
    }
};
