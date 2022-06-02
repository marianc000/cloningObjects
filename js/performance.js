import { plot } from './plot.js';

function simpleObject() {
    return {
        a: [1, 2, 3, 4, 5],
        b: 'abcde',
        c: true
    };
}

function nestedObject(depth) {
    const root = simpleObject();
    addChildren(depth, root);
    return root;
}

function addChildren(depth, o, level = 1) {
    if (level == depth) return;
    o.children = Array.from({ length: 3 }, simpleObject);
    o.children.forEach(c => addChildren(depth, c, level + 1));
}
 
const results = [];
let previousObjAsJSON;

function time(func, title) {
    const start = Date.now();
    const r = func();
    const time = Date.now() - start;
    const objAsJSON=JSON.stringify(r);
    console.log(title, time, objAsJSON.length, previousObjAsJSON===objAsJSON,r);
    previousObjAsJSON=objAsJSON;
    results.push({ time, title });
}


for (let i = 8; i < 13; i++) {
    time(() => JSON.parse(JSON.stringify(nestedObject(i))), 'JSON ' + i);
    time(() => structuredClone(nestedObject(i)), 'sC ' + i);
}

plot(results);



