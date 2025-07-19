import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete'



/**
 * @type {import('rollup').RollupOptions}
 */
export default {
    input: 'main.ts',
    plugins: [
        typescript({
            tsconfig: 'tsconfig.json'
        }),
        del({ targets: 'dist/*' })
    ],
    output: [
        {
            file: 'dist/index.js',
            format: 'esm'
        },
        {
            file: 'dist/index.cjs',
            format: 'cjs'
        }
    ]
}