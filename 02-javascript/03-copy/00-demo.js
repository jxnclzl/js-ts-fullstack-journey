// ============================================================
// 00-demo.js —— 浅拷贝 vs 深拷贝（示范，先跑再读）
//
// 运行：
//     node 02-javascript/03-copy/00-demo.js
// ============================================================


// ── 1. 回顾：直接赋值 = 共享同一个对象 ───────────────────────
const original = { name: 'Joel', nested: { age: 30 } };
const same = original;      // 不是拷贝，只是多了一个名字指向它
same.name = 'Tom';
console.log('1. 直接赋值 → original.name =', original.name);   // Tom（被改了）


// ════════════════════════════════════════════════════════════
// 2. 浅拷贝的三种写法（效果完全一样）
// ════════════════════════════════════════════════════════════
const src = { name: 'Joel', nested: { age: 30 } };

const s1 = { ...src };                      // 展开语法（现代，推荐）
const s2 = Object.assign({}, src);          // 老写法
const s3 = { name: src.name, nested: src.nested };  // 手工展开

// 三种都是【浅】的：
s1.name = 'AAAA';
console.log('2a. 改第一层 → src.name =', src.name);            // Joel  ✅ 没受影响
s2.nested.age = 999;
console.log('2b. 改嵌套层 → src.nested.age =', src.nested.age); // 999  ❌ 被改了

// 为什么？
//   src 这一层： { name: 'Joel', nested: <地址> }
//   浅拷贝复制了 name 的【值】和 nested 的【地址】
//   所以两个对象的 nested 指向堆上【同一个】内层对象
//
//           src ──┐
//                 ├──→ { name, nested: ──┐ }
//           s1  ──┘                      │
//                                        ↓
//                              { age: 30 }  ← 共享


// ════════════════════════════════════════════════════════════
// 3. 数组的浅拷贝
// ════════════════════════════════════════════════════════════
const arr1 = [1, 2];
const arr2 = [...arr1];           // 拷贝一份新数组
arr2.push(3);
console.log('3a. arr1 =', arr1);  // [1, 2]      ✅ 没受影响（元素是 primitive）

const arrObj1 = [{ v: 1 }];
const arrObj2 = [...arrObj1];
arrObj2[0].v = 99;
console.log('3b. arrObj1[0].v =', arrObj1[0].v);  // 99  ❌ 被改了（元素是 object）


// ════════════════════════════════════════════════════════════
// 4. 深拷贝：structuredClone（现代标准解法）
// ════════════════════════════════════════════════════════════
const deepSrc = { name: 'Joel', nested: { age: 30 } };
const deep = structuredClone(deepSrc);

deep.nested.age = 7;
console.log('4. structuredClone → deepSrc.nested.age =', deepSrc.nested.age);  // 30 ✅ 完全独立

// ⚠️ structuredClone 也不是万能的：它【不能克隆函数】
//    如果对象里有函数，会抛 DOMException: DataCloneError
//    （这个特性有时候正好有用：它能帮你发现对象里混进了不该有的东西）


// ════════════════════════════════════════════════════════════
// 5. 老办法 JSON.parse(JSON.stringify(x)) —— 知道它的缺陷就够
// ════════════════════════════════════════════════════════════
const tricky = {
  und: undefined,
  date: new Date('2026-01-01'),
  nan: NaN,
  inf: Infinity,
  map: new Map([['k', 1]]),
};

console.log('');
console.log('5a. 原对象：');
console.log('    ', tricky);
console.log('     date 是 Date 实例吗:', tricky.date instanceof Date);

const viaJson = JSON.parse(JSON.stringify(tricky));
console.log('5b. JSON 大法之后：');
console.log('    ', viaJson);
console.log('     und 还在吗:', 'und' in viaJson);                  // false  ← 丢了
console.log('     date 是 Date 实例吗:', viaJson.date instanceof Date); // false ← 变字符串
console.log('     map 变成了:', viaJson.map);                       // {}     ← 丢了

// 一行总结：JSON 只懂「字符串 / 数字 / 布尔 / null / 数组 / 普通对象」，
//           其它类型全部走形。


// ════════════════════════════════════════════════════════════
// 6. 决策规则
// ════════════════════════════════════════════════════════════
// ① 大多数时候你不需要拷贝 —— 你只是在【读】数据
// ② 需要「改副本不影响原对象」时，先问：嵌套有多深？
//        只有一层  →  {...obj} / [...arr]  就够了
//        有嵌套    →  structuredClone(obj)
// ③ 老代码里的 JSON.parse(JSON.stringify(x)) → 知道缺陷，别在新代码里用
