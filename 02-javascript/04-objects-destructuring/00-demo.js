// ============================================================
// 00-demo.js —— 对象与解构（以及 Vue「解构丢响应式」的根源）
//
// 运行：
//     node 02-javascript/04-objects-destructuring/00-demo.js
// ============================================================


// ── 1. 对象是键值对，两种取值方式 ────────────────────────────
const user = { name: 'Joel', age: 30 };

console.log('1a.', user.name);      // Joel   ← 点号（最常用）
console.log('1b.', user['name']);   // Joel   ← 方括号

// 区别：点号后面的名字是【写死的】；方括号里可以放【变量】
//     const key = 'name';
//     user[key]        // 等价于 user.name
//
// 注意：user['name'] 里的 name 是【字符串】，user.name 里的 name 是【标识符】


// ── 2. 解构：从对象里「取出」值 ──────────────────────────────
const { name, age } = user;
console.log('2.', name, age);       // Joel 30

// 上面这行完全等价于：
//     const name = user.name;
//     const age  = user.age;
//
// 只是写法更短 —— 行为【完全一样】，包括下面这个关键点 ↓


// ── 3. ★ 解构 primitive 属性 = 复制【值】────────────────────
let state = { count: 0 };
let { count } = state;       // count 是 state.count 的一份【独立副本】

count = 99;
console.log('3a. count =', count);             // 99
console.log('3b. state.count =', state.count); // 0    ← 原对象没变！

// 因为 number 是 primitive → 赋值复制【值本身】→ 两边从此无关


// ── 4. 解构 object 属性 = 复制【地址】──────────────────────
const user2 = { name: 'Joel', address: { city: 'Beijing' } };
const { address } = user2;

console.log('4a. address === user2.address ->', address === user2.address);  // true

address.city = 'Shanghai';
console.log('4b. user2.address.city =', user2.address.city);  // Shanghai ← 被改了

// 因为 object 是引用语义 → 复制的是地址 → 两边指向堆上同一个对象
//
// 判断"是不是同一个对象"，永远用 === 直接问，不要用"改一下看会不会互相影响"去猜。
//   （行为测试容易测错对象；=== 是直接答案，没有解释空间）


// ════════════════════════════════════════════════════════════
// 5. ★★ 这就是 Vue「解构丢响应式」的根源 ★★
// ════════════════════════════════════════════════════════════
// Vue 的响应式靠【拦截「读取 state.count 这个动作」】来登记依赖：
//     你读了它  → Vue 记下"这个界面依赖这个数据"
//     数据变了  → Vue 通知界面重新渲染
//
// 但你写  let { count } = state  时：
//     只发生了【一次读取】→ 然后 count 就是一份脱离原对象的副本
//     之后你改 count → state.count 根本没被碰过 → Vue 观测不到 → 界面不更新

let vueState = { count: 0 };
let { count: vueCount } = vueState;   // 重命名成 vueCount，避免和上面的 count 冲突
vueCount = 99;
console.log('5. vueState.count =', vueState.count);   // 0   ← 界面不会更新


// ════════════════════════════════════════════════════════════
// 6. Vue 的解法为什么有效（预告，Phase 4 展开）
// ════════════════════════════════════════════════════════════
// toRefs / storeToRefs 会把每个属性包成一个 ref —— 而 ref 是【对象】！
//
//     primitive 属性  →  解构复制【值】    → 断了联系
//     ref 对象        →  解构复制【地址】  → 仍指向同一个 ref → 响应式不丢
//
// 解决方案的本质：把「值」换成「装着值的对象」，让解构复制地址而不是复制值。
// 你上一课学的那个区别，就是这一条的答案。


// ── 7. 解构的两个实用特性 ───────────────────────────────────
// ① 重命名：  { 原名: 新名 }
const { name: userName } = user;
console.log('7a. 重命名 name -> userName:', userName);   // Joel

// ② 默认值：属性不存在（undefined）时才生效
const { nick = '未设置' } = user;
console.log('7b. 默认值:', nick);                        // 未设置

const { name: n2 = 'x' } = user;
console.log('7c. 有值就不生效:', n2);                    // Joel

// ③ 数组解构：按【位置】取，不是按名字
const [first, second, third = 'default'] = [10, 20];
console.log('7d. 数组解构:', first, second, third);      // 10 20 default
