# PROGRESS.md — 学习状态（唯一真相源）

> AI 每次会话**开始必须读、结束必须写**本文件。见 `AGENTS.md` 第 6 节。
> 规则：**没有证据不得升级**（`AGENTS.md` 5.2）。超 14 天未复习自动 -1。

---

## 0. 元信息

| 项 | 值 |
|---|---|
| 最后更新 | 2026-09-18（初始化） |
| 当前 Phase | **Phase 0 — 工具链（进行中：环境✅ / Git⬜ / DevTools⬜）** |
| 上次停在哪 | 环境体检完成；Node 24.19.0 + npm 11.17.0 + pnpm 12.4.2 已装并实测通过 |
| 当前唯一目标 | **git init + .gitignore + 首次提交 + 建 GitHub 仓库并推送** |
| 累计有效学习时长 | 1h |
| 距求职期 | ~83 天 |

### 0.1 关键决策记录（Decision Log）

> AI 不得静默推翻已定决策。要改必须在这里新增一行并说明理由。

| 日期 | 决策 | 理由 | 可否推翻 |
|---|---|---|---|
| 2026-09-18 | **前端主栈 = Vue 3**（原 React 方案作废） | 目标岗位为小厂；小厂 JD 关键词高度集中在 Vue3 + Element Plus + Pinia + Vite + TS | 可推翻，但会重排 Phase 4/6 |
| 2026-09-18 | 前后端分离，**不用 Nuxt 起步** | 必须亲手走通 HTTP / REST / 鉴权 / CORS | 否 |
| 2026-09-18 | 数据库：**PostgreSQL 主线 + MySQL 对照 1 天** | 小厂 JD 多写 MySQL；但 Phase 6 的 RAG 必须 `pgvector` | 否 |
| 2026-09-18 | 前端 UI 库锁定 **Element Plus** | 小厂后台管理类 JD 出现率最高 | 可换 Naive UI |
| 2026-09-18 | 网络直连，**不配镜像/代理** | 学习者确认直连速度快 | 出现卡顿即改 |
| 2026-09-18 | 本机 16G，Docker / WSL2 可用 | Phase 5 用 Docker 起 PG + MySQL | — |
| 2026-09-18 | GitHub 账号已有，仓库愿意公开 | 求职作品集需要 | — |
| 2026-09-18 | **目标岗位 = 全栈**（前端 Vue 重、后端 NestJS） | 学习者确认 | 可改，影响简历与项目重心 |
| 2026-09-18 | **LLM = DeepSeek**（OpenAI 兼容接口） | 学习者确认；便宜 + 支持 tool calling | 可换（接口兼容，改动小） |
| 2026-09-18 | **部署先用免费 PaaS**，Phase 7 再评估 VPS | 控制前期成本 | 可改 |
| 2026-09-18 | **阶段考 < 70% 硬拦截**下一阶段 | 学习者确认；防假性学会 | 否 |
| 2026-09-18 | 作息默认 **09:00–22:00（含 3 次长休）**，无外部冲突 | 学习者未特别说明 | 可改 |
| 2026-09-18 | 环境基线：Node **24.19.0**（`C:\Program Files\nodejs`）+ npm 11.17.0 + pnpm **12.4.2** | Phase 0 第 1 步实测通过 | 否 |
| 2026-09-18 | **不用 fnm/nvm 管版本**，先用单一 Node | 「先痛再上库」；遇到真版本冲突再上 | 可改 |
| 2026-09-18 | 数据库：**PostgreSQL 主线 + MySQL 对照 1 天** | 小厂 JD 多写 MySQL；但 Phase 6 的 RAG 必须 `pgvector` | 否 |

---

## 1. Unlocked — 已解锁语法/API 白名单 ★

> **AI 硬约束**：示范与练习中**禁止**使用清单外的语法（`AGENTS.md` 3.4）。
> 解锁条件：该技能在 `PROGRESS.md` 中等级 ≥ 2，且通过「闭卷重写」检验。

### 已解锁

- 〔空〕仅限：`console.log`、`let`/`const`、基础算术与字符串拼接

### 未解锁（AI 不得使用）

`function` 完整语法 · 箭头函数 · 闭包 · 数组方法（`map/filter/reduce`）· 解构 · 展开运算符 ·
模板字符串 · 可选链 `?.` · `Promise` · `async/await` · `class` · 模块 `import/export` ·
TypeScript 全部语法 · JSX · 所有框架 API

> 需要用到未解锁语法时：换实现方式，或**明确声明**「这里用到你还没学的 X，先当黑盒」并登记到第 6 节。

---

## 2. 技能矩阵

等级：0 未接触 / 1 听过 / 2 照着能做 / 3 独立能做（求职门槛）/ 4 能教·能权衡

### Phase 0 — 工具链

| 技能 | 目标 | 当前 | 证据 |
|---|---|---|---|
| 终端基本操作（导航/管道/环境变量） | 3 | 0 | — |
| Node 版本管理与运行脚本 | 3 | 0 | — |
| pnpm / npm 命令 | 3 | 0 | — |
| **Git**（add/commit/branch/merge/冲突/PR） | 3 | 0 | — |
| VS Code 调试（断点 / launch.json） | 3 | 0 | — |
| **DevTools**（Elements/Console/Sources/Network/Application） | 3 | 0 | — |
| 读报错与 stack trace | 3 | 0 | — |

### Phase 1 — Web 基础

| 技能 | 目标 | 当前 | 证据 |
|---|---|---|---|
| HTML 语义化 / 表单 / 可访问性 | 3 | 0 | — |
| CSS 盒模型 / 定位 / Flexbox / Grid | 3 | 0 | — |
| 选择器与优先级 | 3 | 0 | — |
| 浏览器渲染流程（DOM/CSSOM/重排重绘） | 3 | 0 | — |
| 事件模型（捕获/冒泡/委托） | 3 | 0 | — |

### Phase 2 — JavaScript

| 技能 | 目标 | 当前 | 证据 |
|---|---|---|---|
| 类型系统与强制转换 / `==` vs `===` | 3 | 0 | — |
| 作用域 / TDZ / 提升 | 3 | 0 | — |
| 值语义 vs 引用语义 / 深浅拷贝 | 3 | 0 | — |
| **闭包** | 4 | 0 | — |
| `this` 绑定规则 / `call`/`apply`/`bind` | 3 | 0 | — |
| 数组方法（`map/filter/reduce/sort`） | 4 | 0 | — |
| 对象 / 解构 / 展开 / `?.` / `??` | 3 | 0 | — |
| 原型链 / `class` / `new` 做了什么 | 3 | 0 | — |
| 模块化（ESM / CJS） | 3 | 0 | — |
| 错误处理（`try/catch`、自定义 Error） | 3 | 0 | — |
| **事件循环**（宏/微任务、执行顺序题） | 4 | 0 | — |
| **Promise**（`all/race/allSettled/any`） | 4 | 0 | — |
| **`async/await`** 与错误处理 | 4 | 0 | — |
| `fetch` / HTTP 客户端 / `AbortController` | 3 | 0 | — |
| DOM 操作与事件委托 | 3 | 0 | — |
| 手写 `debounce` / `throttle` | 3 | 0 | — |
| 手写简版响应式渲染（mini-render） | 2 | 0 | — |
| `Map/Set/WeakMap` / 迭代器 / 生成器 | 2 | 0 | — |
| 正则表达式 | 2 | 0 | — |

### Phase 3 — TypeScript

| 技能 | 目标 | 当前 | 证据 |
|---|---|---|---|
| `tsconfig` 与 `strict` | 3 | 0 | — |
| `type` vs `interface` / 联合交叉 / 字面量类型 | 3 | 0 | — |
| 泛型函数与约束 | 3 | 0 | — |
| 类型收窄 / 判别联合 / 类型守卫 | 4 | 0 | — |
| `keyof` / 映射类型 / 条件类型 / `infer` | 3 | 0 | — |
| **手写工具类型**（`Pick/Omit/Partial/ReturnType`） | 3 | 0 | — |
| `unknown` vs `any` / `never` / `satisfies` | 3 | 0 | — |
| Zod：运行时校验 + 类型推导 | 3 | 0 | — |

### Phase 4 — Vue 3 + 前端工程化

| 技能 | 目标 | 当前 | 证据 |
|---|---|---|---|
| 响应式：`ref`/`reactive`/`.value`/解构丢响应式 | 4 | 0 | — |
| `computed` / `watch` / `watchEffect` 的取舍与时机 | 4 | 0 | — |
| **手写 mini 响应式**（`Proxy` + `effect` + 依赖收集） | 3 | 0 | — |
| `<script setup>` / props / emit / slots / 透传属性 | 3 | 0 | — |
| `v-model` 的原理（`modelValue` + `update:`） | 3 | 0 | — |
| 生命周期 / 异步组件 / Suspense | 3 | 0 | — |
| 组件通信取舍（props/emit → provide/inject → Pinia） | 3 | 0 | — |
| **手写 composable**（`useDebounce`/`useFetch`） | 3 | 0 | — |
| `v-for` 与 `:key` / `v-if` vs `v-show` / `v-html` 风险 | 3 | 0 | — |
| **Vue Router 5**（嵌套/动态路由/**导航守卫鉴权**） | 4 | 0 | — |
| **Pinia** 4（store / 模块拆分 / 持久化） | 3 | 0 | — |
| **Element Plus**（表单校验 / 表格分页 / 弹窗） | 3 | 0 | — |
| **Axios 封装**（拦截器 / 错误码 / token / 取消） | 4 | 0 | — |
| 组件测试（Vitest + `@vue/test-utils`） | 2 | 0 | — |
| 后台管理雏形（登录 + 权限菜单 + 三态，mock 数据） | 3 | 0 | — |

### Phase 5 — 后端 / 数据库

| 技能 | 目标 | 当前 | 证据 |
|---|---|---|---|
| HTTP 语义 / REST 设计 / 状态码 | 4 | 0 | — |
| Node 原生 `http` 起服务 | 2 | 0 | — |
| NestJS 分层 / DI / 模块 | 4 | 0 | — |
| DTO 校验 / 统一错误处理 | 3 | 0 | — |
| **SQL 与表设计**（索引、范式、事务、N+1） | 4 | 0 | — |
| **MySQL 差异对照**（小厂 JD 高频） | 3 | 0 | — |
| Prisma（schema / migration / 性能） | 3 | 0 | — |
| **JWT 鉴权**（access/refresh、Cookie vs Header） | 4 | 0 | — |
| 安全（CORS/CSRF/XSS/注入/限流/密钥） | 3 | 0 | — |
| 后端测试（单测 + e2e） | 3 | 0 | — |
| Docker / docker-compose | 3 | 0 | — |
| CI（GitHub Actions） | 2 | 0 | — |
| 部署上线（Linux / 反向代理 / 日志） | 3 | 0 | — |

### Phase 6 — AI Agent

| 技能 | 目标 | 当前 | 证据 |
|---|---|---|---|
| LLM API / 消息结构 / token 与成本 | 3 | 0 | — |
| **Streaming（SSE）** 前后端打通 | 3 | 0 | — |
| **Tool calling** 与手写 agent loop | 4 | 0 | — |
| RAG（chunking / embedding / pgvector / 引用） | 4 | 0 | — |
| 上下文管理与提示词设计 / 注入防护 | 3 | 0 | — |
| 可观测性 / eval / 限流与配额 | 3 | 0 | — |
| monorepo（pnpm workspace + 共享类型） | 3 | 0 | — |

### 求职线程

| 技能 | 目标 | 当前 | 证据 |
|---|---|---|---|
| Git 协作流程（分支/PR/Code Review 语言） | 3 | 0 | — |
| 简历撰写（量化） | 3 | 0 | — |
| 项目讲解（3 分钟 / 10 分钟） | 4 | 0 | — |
| JS 手写题（`deepClone`/`Promise.all`/`curry`…） | 3 | 0 | — |
| 算法（LeetCode 热题，JS/TS 实现） | 3 | 0 | — |
| 模拟面试表现 | 4 | 0 | — |

---

## 3. 当前卡点（Blockers）

| 日期 | 卡在什么上 | 尝试过什么 | 状态 |
|---|---|---|---|
| — | — | — | — |

> 卡住 > 30 分钟的事项必须登记，并在此技能行标记「需重点复检」。

---

## 4. 待复习队列（SRS-lite）

规则：首次学习 → D+1 → D+3 → D+7 → D+21。每次会话开头抽 2~3 题。

| 技能 | 上次复习 | 下次复习 | 次数 |
|---|---|---|---|
| — | — | — | — |

---

## 5. 阶段考试记录

| Phase | 日期 | 笔试 | 机试 | 结论 | 补考 |
|---|---|---|---|---|---|
| 0 | — | — | — | — | — |

---

## 6. 待补黑盒（Deferred Blackboxes）

> AI 为了推进而暂时跳过的知识点，Phase 合适时**必须回来讲**。

| 日期 | 知识点 | 出现在 | 计划补讲 |
|---|---|---|---|
| — | — | — | — |

---

## 7. 会话日志（最新在上）

格式：`日期 | 时长 | Phase | 产出 | 通过检验 | 遗留`

| 日期 | 时长 | Phase | 产出 | 通过检验 | 遗留 |
|---|---|---|---|---|---|
| 2026-09-18 | 0.5h | — | 建立 `AGENTS.md` / `ROADMAP.md` / `PROGRESS.md` | — | — |
| 2026-09-18 | 0.5h | — | 决策改为 **Vue 主线 + 小厂目标**；同步更新三份文档 | — | — |
| 2026-09-18 | 1h | Phase 0 | **环境体检 + 装 Node 24.19.0 + pnpm 12.4.2 + 冒烟测试**（真实装 typescript 7.0.2 并跑 `tsc`） | ✅ `where node` 指向 Program Files；`node/npm/pnpm/tsc` 版本全部正确 | **下一步：git init + 首次提交 + GitHub** |

---

## 8. 每周复盘记录

| 周次 | 日期 | 有效时长 | 完成 | 未完成 | 调整 |
|---|---|---|---|---|---|
| W1 | 09-18~09-24 | — | — | — | — |
