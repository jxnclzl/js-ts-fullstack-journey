# ROADMAP.md — 3 个月路线图（v1，每周日复盘时修订）

- 起点：**2026-09-18**
- 求职期：**2026-12 中旬**
- 强度：12h/天（3 个深度 block + 低强度活动）
- 目标：能拿下 **全栈 / Node 后端 / 前端** 岗的初级-中级面试（中国内地市场）
- 规则：`ROADMAP.md` 只放**计划**；进度与掌握度以 `PROGRESS.md` 为唯一真相源。

> ⚠️ 本计划是**激进型**（零基础 → 3 个月求职）。它假设 12h/天能稳定执行。
> 若第 4 周结束时 Phase 2 未达标，**默认动作是压缩 Phase 5 深度、保住 Phase 6 主项目**，而不是跳过验收硬冲。

---

## 总览

| Phase | 时间 | 主题 | 交付物 | 关卡 |
|---|---|---|---|---|
| 0 | W1 前半（约 3 天） | 工具链 / 终端 / Git / DevTools | 能自己建仓、提交、改代码、读懂报错 | 不看教程完成一次完整 PR 流程 |
| 1 | W1 后半（约 4 天） | HTML / CSS / 浏览器渲染 | 一个静态页面（手写，无框架） | 不看参考复刻一个卡片布局 |
| 2 | W2–W4（3 周） | **JavaScript 深度** | 5~8 个小练习 + 1 个原生 DOM 项目 | 闭卷重写 + 阶段考 ≥ 70 |
| 3 | W5（1 周） | **TypeScript** | 把 Phase 2 的项目迁移成 TS | 手写泛型工具类型 + 阶段考 |
| 4 | W6–W7（2 周） | **Vue 3 + 前端工程化** | 带登录 + 权限菜单的后台管理雏形（含 API 调用、表单、三态） | 独立手写 composable + 讲清响应式原理 + 阶段考 |
| 5 | W8–W9（2 周） | **NestJS + PostgreSQL + Prisma + 鉴权** | REST API（含 JWT、校验、分层、测试） | 白板设计 + 阶段考 |
| 6 | W10–W11（2 周） | **AI Agent 主项目** | 可演示的全栈 Agent（工具调用 + RAG + 流式） | 项目答辩 + 架构讲解 |
| 7 | W12 | 收尾 + 求职冲刺 | 简历、项目讲解稿、模拟面试 ≥ 3 次 | 模拟面试通过 |
| 缓冲 | 12/11–12/31 | 补漏 / 投递 / 面试 | — | — |

---

## Phase 0 — 工具链（W1 前半）

**目标**：把「不会用工具」这条障碍彻底移除。**这是唯一允许先跳过的验收**——但跳过会导致后面全面卡顿。

- 终端：路径、`cd/ls/mkdir/rm/cat`、管道与重定向、环境变量、`which`、进程与端口
- Node：版本管理与运行脚本；`node -v` / `node file.js` / REPL / `process.argv`；
  **`where node` 自检**（本机有 pi 运行时，必须能分辨自己在用哪一个）
- 包管理：**pnpm**（Corepack 固定）+ npm 等价命令对照表
- VS Code：格式化、任务、断点调试（F5 / launch.json）、必备扩展
- **Git**（重点）：`init/clone/status/add/commit/log/diff/branch/checkout/merge/remote/push/pull`、
  `.gitignore`、Conventional Commits、**读懂 merge conflict**、GitHub 建仓与推送
- **浏览器 DevTools**（重点）：Elements / Console / Sources（断点、`debugger`）/ Network（看请求头、状态码、payload、Timing）/ Application（cookie、localStorage）
- **读懂报错**：三种错误（语法 / 类型 / 运行时）的区分；学会读 **stack trace**

**交付物**：`00-tooling/` 下若干练习 + 一个 GitHub 仓库 + 一次含冲突解决的合并记录。

**关卡**：不看任何教程，独立完成「改代码 → 建分支 → commit → 推送 → 开 PR → 合并」。

---

## Phase 1 — Web 基础（W1 后半）

**目标**：理解浏览器到底在干什么。**不要在这阶段追求页面好看。**

- HTML：语义化标签、表单、`<input>` 类型、可访问性基础（`label` / `alt` / 键盘）
- CSS：盒模型、`display`、`position`、Flexbox、基础 Grid、`rem/em/px`、选择器与优先级
- 浏览器渲染：DOM / CSSOM / 渲染树 / 重排与重绘（**面试高频，且解释 Vue/React 这类框架为什么存在**）
- 事件模型：捕获 / 冒泡 / 委托

**交付物**：`01-web-basics/` 一个手写的响应式页面（无框架、无 Tailwind）。

**关卡**：给一张图/一个网站截图，不看参考复刻出布局。

---

## Phase 2 — JavaScript 深度（W2–W4）★ 最关键

**目标**：这是 90% 候选人被淘汰的地方。宁可多花一周。

> 排期提示：W3–W4（10/01–10/15）覆盖国庆假期，是全年最好的连续深度工作窗口，建议把「原型链 + 事件循环 + 异步」这几块最硬的骨头放在这里。

- **W2 基础**：类型与 `typeof`/`instanceof`、`var/let/const`、作用域、TDZ、值 vs 引用、
  相等与强制转换（`==` vs `===`）、truthy/falsy、模板字符串、数组方法（`map/filter/reduce/find/some/every/sort`）、
  对象与解构、展开与剩余、可选链、`?.` 与 `??`、浅拷贝 vs 深拷贝
- **W2 函数与 this**：函数声明 vs 表达式 vs 箭头函数、参数默认值与 rest、
  `this` 的四种绑定、`call/apply/bind`、**闭包**（重点）、IIFE、柯里化、防抖与节流（手写）
- **W3 对象模型与异步**：原型链、`class` 与继承、`new` 发生了什么、`Object.create`、
  模块化（ESM vs CJS、`import/export`）、异常处理（`try/catch/finally`、自定义 `Error`）、
  **事件循环**（宏任务/微任务、`Promise` 的顺序题——面试必考）、
  **异步演进**：callback → Promise（`all/race/allSettled/any`）→ `async/await`、`fetch` 与错误处理
- **W3 DOM 项目**：原生 DOM 写一个真实小应用（推荐：待办 / 天气 / 分页列表），
  要求：事件委托、状态驱动渲染（**手写一个 30 行的 mini-render**，为 Vue 的响应式铺路）、LocalStorage 持久化
- **W4 综合**：`Map/Set/WeakMap`、迭代器与生成器、正则基础、JSON、日期与 `Intl`、
  `AbortController`、错误边界思维、性能基础（`requestAnimationFrame`、避免布局抖动）

**交付物**：`02-javascript/` 下按主题分目录的练习 + `02-javascript/mini-app/`。

**关卡**：阶段考（10 题笔试 + 90 分钟机试：手写 `groupBy`、`debounce`、`Promise` 顺序题预测、一个 DOM 渲染小功能）。

---

## Phase 3 — TypeScript（W5）

**目标**：从「JS 加注解」升级到「用类型系统设计 API」。

- 为什么需要类型（用 Go 的静态类型直觉切入）、`tsconfig.json` 关键项、`strict` 模式
- 基础类型、`type` vs `interface`、联合与交叉、字面量类型、`readonly`、元组、枚举（及其坑）
- 函数类型：重载、泛型函数、泛型约束（`extends`）、默认类型参数
- **类型收窄**：`typeof`/`in`/`instanceof`、判别联合（discriminated union）、类型守卫（type guard）
- 泛型进阶：`keyof`、索引访问类型、映射类型（mapped types）、条件类型、`infer`
- **工具类型**：`Partial/Pick/Omit/Record/ReturnType/Parameters/Awaited`——**要求能手写实现**
- 类型断言 vs 类型声明、`unknown` vs `any`、`never`、`satisfies`
- 声明文件（`.d.ts`）、给第三方库补类型、Zod 做**运行时**校验与类型推导的结合
- **实战**：把 Phase 2 的 mini-app 全量迁到 TS，禁止 `any`（含 ESLint 规则兜住）

**交付物**：`03-typescript/` 类型体操练习 + `02-javascript/mini-app` 的 TS 版本。

**关卡**：手写 `MyPick/MyOmit/MyPartial`；给出一个泛型 `Result<T, E>` 类型并在项目里用起来。

---

## Phase 4 — Vue 3 + 前端工程化（W6–W7）

**目标**：理解 Vue 的**响应式心智模型**与组件协作方式，而不是背 API。

- Vite 工程结构、`package.json` 脚本、环境变量、路径别名、`vite.config.ts`
- **响应式系统**（本阶段核心，必须能白板讲）：
  - `ref` vs `reactive` vs `shallowRef`；为什么 `ref` 要 `.value`；**解构为什么会丢响应式**
  - `computed` vs `watch` vs `watchEffect` 的取舍与执行时机
  - **手写 mini 响应式**（`Proxy` + `effect` + 依赖收集）——与 Phase 2 的 mini-render 合起来理解
  - 为什么 Vue 用 Proxy 而 React 用 setState（**面试高频对比题**）
- 组件：`<script setup>`、props / emit / slots / 透传属性、`v-model` 的原理（`modelValue` + `update:modelValue`）
- 生命周期与 `onMounted/onUnmounted`；异步组件与 `<Suspense>` 基础
- 组件通信：props/emit → `provide/inject` → Pinia，**按「先痛再上库」的顺序走一遍**
- **手写 composable**：`useDebounce`、`useFetch`、`usePagination`（对标 VueUse，但先自己写）
- 模板与渲染：`v-if` vs `v-show` 的代价、`v-for` 与 `:key`、`v-html` 的 XSS 风险
- 路由：Vue Router 5（嵌套路由、动态路由、**导航守卫做登录鉴权**、路由懒加载）
- 状态：**Pinia** 4（store / actions / getters、模块拆分、持久化插件）
- UI 库：**Element Plus**（表单校验、表格分页、弹窗、主题变量）——**小厂后台类岗位的核心肌肉**
- 请求层：**自己封装 Axios**（请求/响应拦截器、统一错误码、token 注入、loading 计数、取消重复请求）
- 工程化：ESLint + Prettier、Vitest + `@vue/test-utils`（组件测试）、构建产物分析、路由级懒加载
- 可访问性与性能基础：语义化、键盘导航、`v-once`/`v-memo` 的代价、大列表虚拟滚动概念

**交付物**：`04-vue/frontend/`——一个**带登录 + 权限菜单的后台管理雏形**（列表 + 详情 + 表单 + 搜索 + 分页 + 三态处理），
数据先用 mock 或公开 API。**这个骨架在 Phase 5 接上真后端，在 Phase 6 直接复用。**

**关卡**：独立写出一个 composable（如 `useDebounce`）并说明它为什么不能被 `watch` 直接替代；
白板讲清「`ref` / `reactive` / `computed` 分别在什么时候触发更新」；阶段考 + 模拟面试 1 次（从前端基础问起）。

---

## Phase 5 — 后端 / 数据库 / 鉴权（W8–W9）

**目标**：能独立设计并实现一个规范的后端服务。**顺序不能乱：先裸 HTTP，再框架；先裸 SQL，再 ORM。**

- HTTP 与 REST：方法/状态码/Header/Body、幂等、REST 资源设计、分页与过滤、版本化
- Node 原生：`http` 模块起一个 server，手写路由与 JSON 解析（**1 天，只为看懂框架在做什么**）
- Express（0.5 天，了解中间件模型）→ **NestJS**：模块、`Controller/Service/Repository` 分层、DI、管道（`ValidationPipe`）、
  守卫（Guard）、拦截器（Interceptor）、异常过滤器、配置与 `ConfigModule`、日志
- DTO 与校验：`class-validator` / Zod，统一响应格式与错误码
- **PostgreSQL**：Docker 起库、表设计、主键/外键、索引（B-tree、何时该建）、
  范式与反范式、`EXPLAIN` 读执行计划、事务与隔离级别、N+1 问题
- **MySQL 差异对照**（1 天，**小厂 JD 高频**）：`AUTO_INCREMENT` vs `SERIAL/IDENTITY`、
  `ON DUPLICATE KEY UPDATE` vs `ON CONFLICT`、大小写敏感性、`utf8mb4`、JSON 类型差异、
  默认隔离级别、`EXPLAIN` 输出差异 —— 产出**一张对照表**作为面试弹药
- **Prisma 7**：schema、migration、relation、`select/include` 性能、事务、raw query（pgvector 必备）
- 鉴权与安全：密码哈希（argon2/bcrypt）、**JWT**（access + refresh）、Cookie vs Header、
  CORS、CSRF、XSS、SQL 注入、限流、Helmet、环境变量与密钥管理
- 测试：Vitest + Supertest 写 e2e、单元测试 mock 边界、测试数据库隔离
- 部署：Docker 多阶段构建、docker-compose（app + pg）、CI（GitHub Actions：lint + test + build）、
  上线到一台便宜的 VPS 或 PaaS、日志与健康检查

**交付物**：`05-backend/`——一个带用户体系 + 至少 2 个业务实体的 REST API，有测试、有 Docker、有 CI、有公开可访问的部署。

**关卡**：白板设计（给需求 → 画表结构 + 列接口 + 说明鉴权与错误处理）；阶段考 + 模拟面试 1 次（后端深挖）。

---

## Phase 6 — AI Agent 主项目（W10–W11）★ 求职主武器

**目标**：做一个**能讲清原理**的 Agent，不是调一次 API 的 demo。

**先做产品定义（半天）**：一句话说明它替谁解决什么问题、核心交互是什么、**不做**什么。

技术要点（按顺序，每一步都要能讲清为什么）：
1. LLM API 基础：chat completions、消息角色、temperature、token 与成本、错误与重试、超时
2. **Streaming**：SSE 从后端推到前端，前端逐字渲染（含中断与断线重连）
3. **Tool calling**：定义工具 schema → 模型返回 `tool_calls` → 后端执行 → 回填 → 循环
   → **手写 agent loop**（禁止框架起步），必须处理：多轮工具调用、并行调用、参数校验失败、
   工具报错、最大步数、循环检测
4. **RAG**：文档切分（chunking 策略）→ embedding → `pgvector` 存储 → 相似度检索 → 引用来源展示
   → 讲清「为什么长上下文不能取代 RAG」
5. **上下文管理**：历史裁剪 / 摘要压缩 / 系统提示词设计 / 注入防护（prompt injection）
6. **工程化**：流式接口的鉴权、限流与配额、可观测性（记录每步 token 与耗时）、
   离线 **eval**（写 20 条测试用例自动跑分）、成本控制
7. **（对比，两轮）** ① 用 LangChain 或同类框架重写 agent 核心链路；
   ② 前端用 `ai` 7.x + `@ai-sdk/vue` 4.x 的 `useChat` 重写 SSE 消费。
   各写一份对比笔记：框架替你做了什么、代价是什么

**架构要求**：前后端分离的 monorepo（pnpm workspace：`apps/web` + `apps/api` + `packages/shared`），
`apps/web` 用 **Vue 3 + Element Plus**（直接复用 Phase 4 的后台骨架），
共用类型定义放在 `packages/shared`（这是 TS 全栈最亮的加分项）。

**交付物**：`06-ai-agent/`——公开可访问的部署 + README（含架构图、关键决策、已知限制）+ 一份 eval 报告。

**关卡**：**项目答辩**——能回答：为什么这么分层 / 最难的那个 bug 怎么定位的 / 如果重做会改什么 / 成本是多少 / 怎么评测效果。

---

## Phase 7 — 收尾与求职冲刺（W12 + 缓冲）

- 简历（`resume.md`）：量化每一项（用户数、接口数、测试覆盖、性能改进、成本下降）
- 项目讲解稿：3 分钟版 / 10 分钟版，各一份
- 八股专项：JS 手写题（`debounce`/`throttle`/`deepClone`/`Promise.all`/`curry`）、
  事件循环输出题、CSS 布局、HTTP 缓存与状态码、SQL 查询题、
  **Vue 响应式原理 / 组件通信方式 / 路由守卫 / Pinia 适用场景**、MySQL 与 PG 差异
- **模拟面试 ≥ 3 次**（前端 / 后端 / 项目深挖各一次），每次结束 AI 给评分 + 3 条改进
- 投递 + 复盘每个被拒的原因（这是最有价值的数据）
- 补漏：`PROGRESS.md` 里所有等级 < 3 的核心技能
- **可选加分补丁**（时间允许时按性价比做）：**ECharts 数据看板** → **UniApp 小程序**（把 Phase 4 的页面移植一版）→ **Nuxt 4 SSR 概念**

---

## 每周固定动作

| 频率 | 动作 | 时长 |
|---|---|---|
| 每次会话开头 | SRS 复习抽查（由 AI 驱动） | 5~10 min |
| 每天收尾 | 笔记 + 更新 `PROGRESS.md` + commit | 30 min |
| 每周 | 算法/手写题 2 次 | 2h |
| 每周（Phase 4 起） | 技术笔记 1 篇 + 简历更新 | 3h |
| 每周（Phase 5 起） | 模拟面试 1 次 | 1h |
| 每周日 | 复盘 + 修订本文件 | 3h |
| 每周 | 完全离线半天 | — |
