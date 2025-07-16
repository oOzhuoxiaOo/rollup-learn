// src/main.js
import foo from './foo.js';
import packageJson from '../package.json';
export default function () {
    console.log(foo);
    console.log(packageJson.name);
}