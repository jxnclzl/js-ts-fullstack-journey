// ============================================================
// practice.js —— 对象与解构 · 预测练习
//
// 做法：
//   1. 先在每个 `// 预测:` 后面写答案（不运行）
//   2. 全部写完后运行：
//          node 02-javascript/04-objects-destructuring/practice.js
//   3. 答错的补上 ` // ❌ 实际: xxx`
// ============================================================


// ── 第 1 题：解构 primitive 之后改副本 ───────────────────────
const u1 = { score: 10 };
let { score } = u1;
score = 999;
console.log(u1.score);
// 预测: 10


// ── 第 2 题：解构 object 属性，验证身份 ──────────────────────
const u2 = { info: { city: 'Beijing' } };
const { info } = u2;
console.log(info === u2.info);
// 预测: true


// ── 第 3 题：改解构出来的对象属性 ────────────────────────────
info.city = 'Shanghai';
console.log(u2.info.city);
// 预测: Shanghai


// ── 第 4 题：重命名 + 默认值 ─────────────────────────────────
const u4 = { name: 'Joel' };
const { name: userName, age = 18 } = u4;
console.log(userName, age);
// 预测: Joel 18


// ── 第 5 题：默认值什么时候不生效 ────────────────────────────
const u5 = { level: null };
const { level = 99 } = u5;
console.log(level);
// 预测: null（仔细想：null 会不会触发默认值？undefined 才会）


// ── 第 6 题：数组解构 ────────────────────────────────────────
const [a, b, c = 'C'] = [1, 2];
console.log(a, b, c);
// 预测: 1 2 C


// ── 第 7 题（加分）：变量交换 ────────────────────────────────
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x, y);
// 预测: 2 1
 

// ── 第 8 题（加分 · Vue 场景）：这段代码界面为什么不更新？───
//    （不用写输出，用一句话解释原因）
//
//    const state = { count: 0 };
//    let { count } = state;
//    count = 1;               // ← 界面会不会变成 1？
// 不会，复制的是值，不是值的引用，所以不会改变