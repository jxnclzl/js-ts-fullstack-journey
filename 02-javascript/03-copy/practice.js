// ============================================================
// practice.js —— 浅拷贝 vs 深拷贝 · 预测练习
//
// 做法：
//   1. 先在每个 `// 预测:` 后面写答案（不运行）
//   2. 全部写完后运行：
//          node 02-javascript/03-copy/practice.js
//   3. 答错的补上 ` // ❌ 实际: xxx`
// ============================================================


// ── 第 1 题：浅拷贝后改【第一层】────────────────────────────
const orig1 = { a: 1, nest: { b: 2 } };
const copy1 = { ...orig1 };
copy1.a = 100;
console.log(orig1.a);
// 预测: 1


// ── 第 2 题：浅拷贝后改【嵌套层】────────────────────────────
copy1.nest.b = 200;
console.log(orig1.nest.b);
// 预测: 200


// ── 第 3 题：数组浅拷贝 + push（元素是 primitive）───────────
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
arr2.push(4);
console.log(arr1.length);
// 预测: 3


// ── 第 4 题：数组浅拷贝 + 改元素内部（元素是 object）────────
const arr3 = [{ v: 1 }];
const arr4 = [...arr3];
arr4[0].v = 99;
console.log(arr3[0].v);
// 预测: 99


// ── 第 5 题：深拷贝 ──────────────────────────────────────────
const orig5 = { nest: { b: 2 } };
const deep5 = structuredClone(orig5);
deep5.nest.b = 200;
console.log(orig5.nest.b);
// 预测: 2


// ── 第 6 题：JSON 大法的两个坑 ───────────────────────────────
const orig6 = { u: undefined, n: NaN };
const json6 = JSON.parse(JSON.stringify(orig6));
console.log('u' in json6);
console.log(json6.n);
// 预测: true null


// ── 第 7 题（加分）：三层嵌套 ────────────────────────────────
const orig7 = { l1: { l2: { l3: 'deep' } } };
const copy7 = { ...orig7 };
copy7.l1.l2.l3 = 'changed';
console.log(orig7.l1.l2.l3);
// 预测: changed
