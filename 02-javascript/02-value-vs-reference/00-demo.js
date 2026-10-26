// ============================================================
// 00-demo.js —— 值语义 vs 引用语义（示范，先跑再读）
//
// 运行：
//     node 02-javascript/02-value-vs-reference/00-demo.js
// ============================================================


// ── 1. primitive：赋值时【复制值本身】────────────────────────
let a = 1;
let b = a;      // 把 a 的【值】复制一份给 b
b = 2;          // 改 b，和 a 没关系
console.log('a =', a, ' b =', b);          // a = 1  b = 2

let s1 = 'hello';
let s2 = s1;
s2 = 'world';
console.log('s1 =', s1, ' s2 =', s2);      // s1 = hello  s2 = world

// 类比 Go：int / string / bool / [3]int（数组）都是值语义


// ── 2. object：赋值时【复制引用（地址）】─────────────────────
let x = { n: 1 };
let y = x;      // 只复制了"这个对象在内存里的地址"
y.n = 2;        // 通过 y 修改 → 改的是同一个对象
console.log('x.n =', x.n, ' y.n =', y.n);  // x.n = 2  y.n = 2

let arr1 = [1, 2];
let arr2 = arr1;
arr2.push(3);
console.log('arr1 =', arr1);               // [ 1, 2, 3 ]  ← arr1 也变了
console.log('arr1 === arr2 ?', arr1 === arr2);  // true  ← 同一个对象

// 类比 Go：slice / map / chan / *T 都是引用语义
//
// ⚠️ 但注意这个差异：
//     Go 有【两种】数组： [3]int 是值语义， []int(slice) 是引用语义
//     JS 只有【一种】数组： [] 永远是引用语义（因为它本质是对象）


// ── 3. === 对对象比的是【是不是同一个】，不是【内容相同】──────
console.log('1 === 1        ->', 1 === 1);        // true  比【值】
console.log('{} === {}      ->', {} === {});      // false 两个不同的对象！
console.log('[] === []      ->', [] === []);      // false 同上

let p = {};
let q = p;
console.log('p === q        ->', p === q);        // true  同一个对象（同一地址）

// 结论：要比较两个对象【内容是否相同】，=== 做不到。
//       必须自己写比较逻辑（后面讲浅拷贝/深拷贝时会展开）


// ── 4. const 锁的是【绑定】，不是【对象的内容】──────────────
const c = { v: 1 };
c.v = 2;                       // ✅ 允许：改对象内部的属性
console.log('c.v 改后 =', c.v); // 2

const d = [1];
d.push(2);                     // ✅ 允许：改数组内容
console.log('d push 后 =', d);  // [ 1, 2 ]

// 但【重新赋值】const 绑定的名字，会报错：
//     c = { v: 99 };
//     → TypeError: Assignment to constant variable.

// 一句话：const 让这个名字【不能再指向别的对象】，但不管那个对象内部怎么变。
// 对照 Go：Go 的 const 只能修饰编译期常量，这里更接近"final 引用"的概念。
