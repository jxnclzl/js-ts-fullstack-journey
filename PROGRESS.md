# PROGRESS.md — 学习状态（唯一真相源）

> AI 每次会话**开始必须读、结束必须写**本文件。见 `AGENTS.md` 第 6 节。
> 规则：**没有证据不得升级**（`AGENTS.md` 5.2）。超 14 天未复习自动 -1。

---

## 0. 元信息

| 项 | 值 |
|---|---|
| 最后更新 | 2026-09-20 |
| 当前 Phase | **Phase 0 — 工具链（环境✅ / Git 基础✅ / 分支与冲突⬜ / DevTools⬜ / 终端⬜）** |
| 上次停在哪 | 首次推送成功：3 条提交已上 GitHub（`jxnclzl/js-ts-fullstack-journey`）；修好 git 的 github.com 代理 |
| 当前唯一目标 | **Phase 0 验收**：先全量自测（`REVIEW.md` 35 题）→ 补漏 → 机试（空白目录走完 GitHub PR 全流程） |
| 累计有效学习时长 | 3h |
| 距求职期 | ~81 天 |

### 0.1 关键决策记录（Decision Log）

> AI 不得静默推翻已定决策。要改必须在这里新增一行并说明理由。

| 日期 | 决策 | 理由 | 可否推翻 |
|---|---|---|---|
| 2026-09-18 | **前端主栈 = Vue 3**（原 React 方案作废） | 目标岗位为小厂；小厂 JD 关键词高度集中在 Vue3 + Element Plus + Pinia + Vite + TS | 可推翻，但会重排 Phase 4/6 |
| 2026-09-18 | 前后端分离，**不用 Nuxt 起步** | 必须亲手走通 HTTP / REST / 鉴权 / CORS | 否 |
| 2026-09-18 | 数据库：**PostgreSQL 主线 + MySQL 对照 1 天** | 小厂 JD 多写 MySQL；但 Phase 6 的 RAG 必须 `pgvector` | 否 |
| 2026-09-18 | 前端 UI 库锁定 **Element Plus** | 小厂后台管理类 JD 出现率最高 | 可换 Naive UI |
| 2026-09-18 | 网络直连，**不配镜像/代理** | 学习者确认直连速度快 | 出现卡顿即改 → **已于 09-20 触发，见下行** |
| 2026-09-20 | **推翻「网络直连」**：`github.com` 直连被 TLS reset，git 改为走本地代理 `127.0.0.1:7890`（Clash Verge） | 实测：直连无响应 / 走代理 `HTTP/1.1 200 Connection established` | 若 Clash 端口变化需同步修改 |
| 2026-09-18 | 本机 16G，Docker / WSL2 可用 | Phase 5 用 Docker 起 PG + MySQL | — |
| 2026-09-18 | GitHub 账号已有，仓库愿意公开 | 求职作品集需要 | — |
| 2026-09-18 | **目标岗位 = 全栈**（前端 Vue 重、后端 NestJS） | 学习者确认 | 可改，影响简历与项目重心 |
| 2026-09-18 | **LLM = DeepSeek**（OpenAI 兼容接口） | 学习者确认；便宜 + 支持 tool calling | 可换（接口兼容，改动小） |
| 2026-09-18 | **部署先用免费 PaaS**，Phase 7 再评估 VPS | 控制前期成本 | 可改 |
| 2026-09-18 | **阶段考 < 70% 硬拦截**下一阶段 | 学习者确认；防假性学会 | 否 |
| 2026-09-18 | 作息默认 **09:00–22:00（含 3 次长休）**，无外部冲突 | 学习者未特别说明 | 可改 |
| 2026-09-18 | 环境基线：Node **24.19.0**（`C:\Program Files\nodejs`）+ npm 11.17.0 + pnpm **12.4.2** | Phase 0 第 1 步实测通过 | 否 |
| 2026-09-18 | **不用 fnm/nvm 管版本**，先用单一 Node | 「先痛再上库」；遇到真版本冲突再上 | 可改 |
| 2026-09-22 | **阶段时长弹性化**：`ROADMAP` 的时间标注降为估算，不作为 deadline | 学习者明确要求（「不必把每一阶段时间卡死」）；以能力验收为准，不以日历为准 | 否 |
| 2026-09-22 | **SRS 触发时机从 1 个扩到 3 个**，并新建 `REVIEW.md` 题库 | **学习者发现**：`AGENTS.md` §5.4 只写了「会话开头复习」，而连续多轮构成**一个长会话**时该触发点永不出现 → Phase 0 五天里几乎没有系统复习。新增：每个深度 block 结束抽旧题 + 每个 Phase 结束全量自测 | 否 |
| 2026-09-22 | **取消 Phase 1 独立阶段**：HTML/事件/渲染 → Phase 2；CSS → Phase 4（1 天） | 学习者提出：① 脱离场景学吸收率低 ② AI+组件库已压低视觉设计性价比 ③ 目标偏后端。AI 追加约束：**四条不可砍**（HTML 语义化/表单、事件模型、渲染链路、CSS 布局） | 可改，但四条不可砍 |
| 2026-09-22 | **后端权重提高**：Phase 5 从 2 周 → **3.5 周**，Phase 4 UI 深度降低 | 学习者明确「主要还是想学后端」 | 否 |
| 2026-09-22 | 求职期从「12 中旬」顺延到「**12 月下旬**」 | 上述扩容的必然代价。📌 12 月是招聘淡季，旺季是年后 3–4 月，损失不大 | 可改 |
| 2026-09-22 | `REVIEW.md` 35 题不强制一次性做完，改为**穿插抽问** | 学习者反馈「测试太多」；AI 同意：穿插抽问正是 §5.4 新增第 2 条的意图 | 否 |

---

## 1. Unlocked — 已解锁语法/API 白名单 ★

> **AI 硬约束**：示范与练习中**禁止**使用清单外的语法（`AGENTS.md` 3.4）。
> 解锁条件：该技能在 `PROGRESS.md` 中等级 ≥ 2，且通过「闭卷重写」检验。

### 已解锁

- 〔空〕仅限：`console.log`、`let`/`const`、赋值 `=`、基础算术与字符串拼接

### 黑盒（已声明，可用但要标注）

按 §3.4 选项 (b)：以下东西在 Phase 0 的实验里**可以使用**，但 AI 必须当场声明，且已登记到第 6 节：

- `document.*`、`$0`、元素属性读写（`textContent` / `title`）→ Phase 1 正式讲

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
| 环境自检（`where node` / 版本核对） | 3 | 1 | 09-20 自己跑出 `where.exe node` / `node -v` / `pnpm -v`，能辨认 pi 运行时与真实 Node |
| Node 版本管理与运行脚本 | 3 | 0 | — |
| pnpm / npm 命令 | 3 | 0 | — |
| Git 基础流程（init / status / add / commit / log） | 3 | 2 | 09-20 仅给「意图+文件」，自己拼出 commit 2/3 的命令 |
| **Git 提交粒度与 message 规范** | 3 | 2 | 09-20 自动拆出 3 条提交且文件分组全对；type 选错（feat→docs）后被纠正 |
| Git 远程（remote / push / 上游追踪） | 3 | 2 | 09-20 自己完成第二次 push（不写 `-u`），能解释上游是什么 |
| Git 改写历史（rebase -i / reword） | 3 | 1 | 09-20 完成一次 `rebase -i HEAD~2` 改两条 message |
| Git 分支与合并 / 冲突解决 | 3 | 2 | 09-22 独立完成一次真实合并冲突：两边独有信息全部保留，标记行清理干净 |
| Pull Request 流程 | 3 | 2 | 09-22 PR #1/#2 全部走通（开 PR → squash 合并 → 删分支）；PR #2 的标题与描述自己写的 |
| 文档写作（README / PR 描述） | 2 | 2 | 09-20 README 由 AI 代笔（§10 例外）；09-22 PR #2 标题+描述自己写，4 段结构完整 |
| VS Code 调试（断点 / launch.json） | 3 | 0 | — |
| **DevTools**（Elements/Console/Sources/Network/Application） | 3 | 0 | — |
| 读报错与 stack trace | 3 | 2 | 09-22 ✅ 机械规则 5/5 独立命中（讲法③ 生效）；✅ 补考2 满分（5xx 归服务端）；⚠️ 真实场景的「往外追一层 + 去 Network 看真实响应」仍需复检 |

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
| 2026-09-22 | **读 V8 的 `Cannot read properties of X (reading 'Y')` 时把元凶读反**（以为 Y 是 undefined，实际是 Y 前那一整段） | 讲法①因果链（loadConfig/readTimeout 示范）→ 失败；讲法②A 题追问调用方 → 失败；**讲法③纯机械替换规则（不要求理解）** | ✅ **已解决**：讲法③ 5/5 独立命中 |

> 卡住 > 30 分钟的事项必须登记，并在此技能行标记「需重点复检」。

---

## 4. 待复习队列（SRS-lite）

规则：首次学习 → D+1 → D+3 → D+7 → D+21。每次会话开头抽 2~3 题。

| 技能 | 上次复习 | 下次复习 | 次数 |
|---|---|---|---|
| Git：`origin/main` 只是快照，不 `fetch` 就不更新（而 `git status` 不会警告） | 2026-09-20 | 2026-09-21 | 1 |
| Git：commit 的哈希 = hash(tree + parent + author + committer + message) | 2026-09-20 | 2026-09-21 | 1 |
| Git：`git branch -vv` 里 `[origin/main]` 是**配置**，不是指针 | 2026-09-20 | 2026-09-22 | 1 |
| 文档：为什么 `How I Work` 必须写成「限制 AI」而不是「AI 代写」？（面试会问） | 2026-09-20 | 2026-09-21 | 1 |
| 文档：README 的 7 个 section 分别写给谁看 | 2026-09-20 | 2026-09-23 | 1 |
| Git：合并冲突的 5 步法（特别是第 4 步 `git add` 的含义） | 2026-09-22 | 2026-09-23 | 1 |
| **V8 报错机械规则**：元凶 = `.Y` 前那一整段（Y 是 `(reading 'Y')` 里的名字） | 2026-09-22 | 2026-09-23 | 1 |
| Git：`HEAD` 在 merge 时代表「我当前的分支」而非「最新版」 | 2026-09-22 | 2026-09-24 | 1 |

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
| 2026-09-22 | `document` 对象（DOM 的入口）、`document.title`、元素属性读写（`textContent`）、`$0`（DevTools 内置） | DevTools Day 1 实验 | Phase 1（DOM 基础）正式讲；在 Phase 0 里**一律当黑盒**，只需要“照敲 + 看结果” |
| 2026-09-22 | Console 里的赋值语句（`document.title = 'x'`） | DevTools Day 1 实验 | 已包含在 `let`/`const` 里，但“属性赋值”语法未正式讲 → Phase 1 |
| 2026-09-22 | **`fetch()` / `.then()` / 箭头函数 `r => r.json()`** | DevTools Day 2 Network 实验 | **Phase 2 异步部分**（整整一周的内容）；现在当黑盒照敲，注意力放在 Network 面板 |
| 2026-09-22 | **HTTP 状态码 ≠ 业务状态码**（HTTP 200 但 body 里 `code: 5001`） | DevTools Day 2 检验 | Phase 5（NestJS 统一错误码） |

---

## 7. 会话日志（按时间正序，末尾是最新）

格式：`日期 | 时长 | Phase | 产出 | 通过检验 | 遗留`

| 日期 | 时长 | Phase | 产出 | 通过检验 | 遗留 |
|---|---|---|---|---|---|
| 2026-09-18 | 0.5h | — | 建立 `AGENTS.md` / `ROADMAP.md` / `PROGRESS.md` | — | — |
| 2026-09-18 | 0.5h | — | 决策改为 **Vue 主线 + 小厂目标**；同步更新三份文档 | — | — |
| 2026-09-18 | 1h | Phase 0 | **环境体检 + 装 Node 24.19.0 + pnpm 12.4.2 + 冒烟测试** | ✅ `where node` 指向 Program Files；`node/npm/pnpm/tsc` 版本全对 | — |
| 2026-09-20 | 1.5h | Phase 0 | **Git 从零**：全局配置 / `init -b main` / `.gitignore`+`.gitattributes` / 3 条提交 / `rebase -i` 改 message / 建远程仓 / 首次 push | ✅ 3 条提交粒度全对；自己能拼 commit 命令；独立完成 rebase reword | — |
| 2026-09-20 | 2h | Phase 0 | 分支 → README.md（AI 代笔）→ 2 条提交 → push；`Git.md` 学习笔记（319 行）；开 PR #1 | ✅ 分支/HEAD/refs/config 概念已澄清；README 已重写 | **待做**：合并 PR → 在 main 上补交 AGENTS/PROGRESS → 制造并解决一次合并冲突 |
| 2026-09-20 | — | — | 欠 2 道费曼题：① `How I Work` 为何是「限制 AI」 ② `Git.md` 只留 3 节该留哪 3 节 | ✅ 09-22 已答：①方向对（AI 是辅助）已补锋利化为「我能管住 AI 的输出质量」；②答错论证方式（选概念节）→ 已纠正为「留你三个月后还会回来查的节」 | 已结清 |
| 2026-09-22 | 2h | Phase 0 | **PR #1 合并**（squash）+ 本地收尾；**合并冲突实战**：建分支 → AI 扮演同事在 main 上改同一行 → push 分支 → PR 报冲突 → `git merge origin/main` → 解决 → 合并 PR #2 | ✅ 冲突标记无残留；两边独有信息全部保留（日期 + `Git(branch, PR)`）；Squash 合并与 `-D` 删除分支的因果关系已验证 | **远程分支 `docs/phase0-complete` 未删，待清理** |
| 2026-09-22 | 2h | Phase 0 | **DevTools Day 1**：View Source vs Elements / 改 DOM / Console ↔ Elements 联动 / **读报错与 stack trace**（用 Node 跑真实 5 类错误） | ✅ 阶段一（树≠文件）三题全对；✅ 补考2 满分；❌ 链式取值元凶判定连错两次 → 已换讲法 | **远程分支待删**；5 题机械规则练习待答；Day 2（Network）未开 |

---

## 8. 每周复盘记录

| 周次 | 日期 | 有效时长 | 完成 | 未完成 | 调整 |
|---|---|---|---|---|---|
| W1 | 09-18~09-24 | — | — | — | — |
