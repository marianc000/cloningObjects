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
function time(func, title) {
    const start = Date.now();
    const r = func();
    const time = Date.now() - start;
   // console.log(title, time, JSON.stringify(r).length, r);
    console.log(title, r);
    results.push({ time, title });
}


for (let i = 8; i < 13; i++) {
    time(() => JSON.parse(JSON.stringify(nestedObject(i))), 'JSON ' + i);
    time(() => structuredClone(nestedObject(i)), 'sC ' + i);
}

plot(results);



