import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: true,
        },
        {
            file: pkg.module,
            format: 'es',
            exports: 'named',
            sourcemap: true,
        },
    ],
    plugins: [
        external(),
        postcss({
            modules: true,
        }),
        url(),
        svgr(),
        resolve(),
        typescript({
            rollupCommonJSResolveHack: true,
            clean: true,
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            babelrc: false,
            presets: [['env', { modules: false }]],
        }),
    ],
    external: ['styled-components'],
    globals: { 'styled-components': 'styled' },
};
