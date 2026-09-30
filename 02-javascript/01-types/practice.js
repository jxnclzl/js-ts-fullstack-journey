// ============================================================
// practice.js —— 类型预测练习
//
// 做法（顺序很重要，不要偷看运行结果）：
//   1. 每一行 console.log 下面都有一个 `// 预测:` 的空位
//   2. 先在每个空位里写下你的预测（还没运行，纯靠推理）
//   3. 全部写完后，在终端运行：
//          node 02-javascript/01-types/practice.js
//   4. 对照实际输出。答错的，在原空位后面补上 ` // ❌ 实际: xxx`
// ============================================================

// ── 第一组：typeof 会返回什么 ────────────────────────────────

console.log(typeof '42');
// 预测: string

console.log(typeof 42);
// 预测: 

console.log(typeof 42.5);
// 预测:

console.log(typeof undefined);
// 预测:

console.log(typeof null);
// 预测:

console.log(typeof []);
// 预测:

console.log(typeof {});
// 预测:


// ── 第二组：不同类型相遇，会变成什么 ─────────────────────────

console.log('5' + 5);
// 预测:

console.log('5' * '2');
// 预测:

console.log(null + 1);
// 预测:

console.log(undefined + 1);
// 预测:

console.log(JSON.stringify([] + []));
// 预测: （别被 JSON.stringify 干扰，它只是让「空字符串」这类看不见的东西显形）

console.log([] + {});
// 预测:

console.log(true + true);
// 预测:


// ── 第三组（加分）：你答完上面再看 ───────────────────────────
// 把下面两行的注释去掉，观察结果，然后回答检验第 2 题：
//
// console.log(1 / 0);
// console.log('abc' / 2);
