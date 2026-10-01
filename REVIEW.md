# REVIEW.md — 分阶段复习题库

> **用法**：先自己答，**再展开答案**。答不出或不确定的标 `?` —— AI 只讲标 `?` 和答错的部分，不重讲已经会的。
> **维护规则**（`AGENTS.md` §5.4）：每个 Phase 结束时，AI 必须把该 Phase 的题目补进来，含可折叠答案。
> **复习节奏**：学完当天 → D+1 → D+3 → D+7 → D+21。

---

## Phase 0 — 工具链（2026-09-18 ~ 09-22）

### A 组 · 环境与工具链

**A1.** `where.exe node` 是干什么的？为什么它是这台机器上排障的"第一条命令"？

**A2.** 你的机器上曾经有一个"不是你装的"Node。它带来了什么**具体**风险？

**A3.** 装完 Node（或任何新工具）之后，为什么**必须重开终端**？

**A4.** `github.com` 在这台机器上直连会怎样？为什么浏览器能通、git 却不能？

**A5.** `node --check 文件.js` 和 `node 文件.js` 有什么区别？什么时候用它？

<details>
<summary>答案</summary>

- **A1** 它列出 PATH 中所有同名可执行文件的**完整路径**（按解析顺序）。用来确认"我现在敲的 `node` 到底是谁"——**版本对不上时，先确认身份，再谈其他**。
- **A2** 那是 pi（agent）自带的运行时（`C:\Users\...\pi-node\current`，v22）。风险：① 在那个环境跑 `npm i -g` 会把包装进 agent 的依赖树，**可能弄坏 pi**；② 你看到的版本是"别人的"，排障时会归因错误。
- **A3** 环境变量（PATH）**不是热更新的**。已在运行的进程（终端、VS Code）持有的是**启动那一刻**的环境副本。安装程序改的是注册表，只有新进程才读得到。
- **A4** 直连会被 TLS reset（`Recv failure: Connection was reset`）。浏览器 / winget 走 **Windows 系统代理**（Clash Verge，65532），而 **git 既不读 Windows 系统代理、也没有代理环境变量**，于是直连 → 被墙。解法：在 git 里显式配 `http.https://github.com/.proxy = http://127.0.0.1:7890`。
- **A5** `--check` **只做语法解析、不执行任何代码**（正常文件静默退出，语法错报 `SyntaxError`）。用来快速区分"是语法问题"还是"是运行时问题"。

</details>

---

### B 组 · Git 核心模型

**B1.** 说出 Git 的四个区域，以及它们之间靠哪三个命令流转。

**B2.** 为什么需要"暂存区"这个中间层？一句话说本质。

**B3.** `.gitignore` 只对什么文件生效？如果 `.env` **已经被提交过**了，怎么办？

**B4.** `core.autocrlf` + `.gitattributes` 一起解决什么问题？

**B5.** 一个 commit 对象里存了哪 **5** 样东西？**没有**存什么？

**B6.** 为什么改了 commit message 之后，**它后面的所有提交**哈希都会变？

**B7.** `author` 和 `committer` 的区别？什么操作会让两者不一致？

**B8.** 一个分支在磁盘上是什么？占多大？分支名带 `/` 会怎样？

**B9.** `.git/HEAD` 里存的是什么？（提示：**不是**哈希）

**B10.** "我跟哪个远程同步"这件事存在**哪个文件**的哪一段？

<details>
<summary>答案</summary>

- **B1** 工作区 →（`git add`）→ 暂存区 →（`git commit`）→ 本地仓库 →（`git push`）→ 远程仓库。
- **B2** 一条 commit 应该是**一个逻辑上完整的最小改动**。暂存区让你**挑选**哪些改动进入这次提交，而不是"保存时刻的全部文件状态"。这是 Git 与网盘同步的根本区别：网盘记**文件状态**，Git 记**有意图的变更**。
- **B3** 只对**尚未被跟踪**的文件生效。已提交过的要先 `git rm --cached <file>` 停止跟踪，`.gitignore` 才对它生效。**改 `.gitignore` 无法补救已经进入历史的内容**（密钥泄露就是这样发生的）。
- **B4** Windows 用 CRLF、Unix 用 LF。`autocrlf=true`（Git for Windows 默认）会**自动转换**，跨平台协作时产生"整个文件都变了"的幽灵 diff。解法：`core.autocrlf=false` 关掉自动转换，再用 `.gitattributes` **显式声明**每种文件该用哪个换行符（源码 `eol=lf`；`.bat`/`.cmd`/`.ps1` 用 `crlf`）。
- **B5** `tree`（内容快照的哈希）、`parent`（父提交哈希）、`author`、`committer`、`message`。**没有存任何文件内容**——内容在 `tree` 指向的对象里。
- **B6** 因为第 N 条提交的 `parent` 字段里写着第 N-1 条的哈希。第 N-1 条一改 → 它的哈希变 → 第 N 条的内容变 → 哈希也变……**级联**。所以"改写历史"的代价是**它之后的所有提交全部换名字**。commit 的哈希就是对整块字节算 SHA 的结果（content-addressable），**ID 和内容不分离**。
- **B7** `author` = 谁写的 / 何时写的；`committer` = 谁把它放进**当前历史** / 何时。`rebase`、`amend`、`cherry-pick` 会保留 author，但更新 committer。
- **B8** 是 `.git/refs/heads/<名字>` 下的**一个文件**，内容是 **40 字符哈希 + 换行 = 41 字节**。分支名含 `/` 会长成**嵌套目录**：`docs/readme` → `.git/refs/heads/docs/readme`。
- **B9** **不是哈希**，而是指向另一个文件的路径：`ref: refs/heads/main`。它回答"我站在哪个分支上"。
- **B10** `.git/config` 里的 `[branch "<名字>"]` 段（`remote = origin` / `merge = refs/heads/main`）。

</details>

---

### C 组 · Git 协作流程

**C1.** `origin` / `main` / `origin/main` 分别是什么？各自住在哪？

**C2.** `origin/main` 什么时候更新？为什么同事推了新代码，你的 `git status` **不会**警告你？

**C3.** 不先 `git fetch` 就直接 `git merge origin/main` 会怎样？为什么**远程 PR 却报冲突**？

**C4.** `git push -u` 的 `-u` 做了哪**两**件事？

**C5.** `git branch -vv` 输出里的 `[origin/main]` 是"指向"吗？它代表什么？

**C6.** 什么情况下可以改写**已推送**的历史？`--force` 和 `--force-with-lease` 的区别？

**C7.** 冲突标记里 `HEAD` 那一侧代表谁？解决 5 步法里 `git add` 的特殊含义是什么？

**C8.** Squash 合并之后，为什么 `git branch -d` 会失败、必须用 `-D`？

<details>
<summary>答案</summary>

- **C1** `main` = **本地**分支（住 `.git/refs/heads/main`）；`origin` = **远程仓库的别名**（住 `.git/config` 的 `[remote "origin"]`，**不是关键字，可以改名**）；`origin/main` = 远程 main 在你本地的**「上次同步快照」**（住 `.git/refs/remotes/origin/main`）。
- **C2** 只在 `fetch` / `pull` / `push` 时更新。`git status` **不会警告**——它拿的就是**自己的旧快照**来比，所以显示 `up to date`。这是最容易坑人的地方：你不会收到任何提示，直到 push 被拒。**习惯：开始干活前先 `git fetch`。**
- **C3** 会输出 **`Already up to date.`**（退出码 0）——"什么都没做"，**但看起来像成功**。因为过期的 `origin/main` 正好是你当前分支的祖先。而远程 PR 是用**真实 main** 比的 → 报冲突。**"本地看着没事、远程报冲突"的根因就是这个。**
- **C4** ① 推送本次内容；② 在 `.git/config` 写入 `branch.main.remote = origin` 与 `branch.main.merge = refs/heads/main`。之后 `git push` / `git pull` / `git status` 都不用再写参数。
- **C5** **不是**。它代表"这个本地分支的**上游**是谁"，是**配置**（住在 `.git/config`）。`main` 指向的是**提交**——第三列那个哈希才是"指向"。
- **C6** 只有"本地未推送"或"自己的、尚未合并、无人基于它工作的 feature 分支"可以。`--force` **无条件覆盖远程**（会直接抹掉同事已推的工作）；`--force-with-lease` 先检查"远程还是我上次看到的样子吗"，不是就拒绝推送。**已经进入 main 的提交只能用 `git revert` 追加反向提交。**
- **C7** `HEAD` = **你当前所在的分支**（**不是**"最新版"——搞反会删掉对方的工作）。5 步法：①读懂两边意图 ②决定最终内容 ③删掉标记行本身 ④**`git add` = 声报冲突已解决**（冲突期间短状态码是 `UU`；不 `git add` 直接 commit 会被拒绝：`error: Committing is not possible because you have unmerged files.`）⑤`git commit`（**不加 `-m`**，用预填的合并消息）。
- **C8** `-d` 的安全检查靠**哈希**判断"该分支的提交是否已进 main"。Squash 把分支提交压成**一条新哈希的提交**，所以 git 认为"没合并"。确认过 PR 已合并后，用 `-D` 强制删。

</details>

---

### D 组 · DevTools 与调错

**D1.** `Ctrl+U`（View Source）和 `Elements` 面板看到的，**本质区别**是什么？

**D2.** 在 Elements 里改了文字，刷新就没了。用 **Go/C++ 类比**解释。

**D3.** "刷新页面"本质上做了哪几件事？（这解释了 D2）

**D4.** "我明明改了代码，刷新还是旧的"，原因和解法？

**D5.** `$0` 是什么？

**D6.** 一段报错由哪**四**部分组成？

**D7.** `SyntaxError` / `ReferenceError` / `TypeError` / `RangeError` 分别在**什么时候**发生？

**D8.** ★ 代码 `res.data.list.map(fn)`，报错 `TypeError: Cannot read properties of null (reading 'map')`。元凶是**哪一段**？它的值是什么？

**D9.** ★ 代码 `report.sections.summary.title`，报错 `TypeError: Cannot read properties of undefined (reading 'summary')`。元凶是**哪一段**？

**D10.** `Unexpected end of input` 为什么**行号信息没用**？该用什么手段定位？

**D11.** `400` / `401` / `403` / `404` / `500` / `502` 分别意味着什么？哪些是**哪一侧**的问题？

**D12.** 后端返回 **HTTP 200** + `{"code":5001,"data":null}`。前端只判断 `r.status === 200` 会怎样？正确的**两层判断**是什么？

<details>
<summary>答案</summary>

- **D1** `View Source` 是**服务器发来的原始文本**（HTML 字符串，只读、永远是原样）；`Elements` 是浏览器解析后**在内存里建出的对象树（DOM）**，可编辑、会被 JS 改动。
- **D2** HTML 文本 = **源文件**（`.cpp` / `.go`）；DOM = **运行时在堆上建好的对象**；在 Elements 里改文字 = `p->title = "x"`；**刷新 = 重新编译 + 重新运行**。你不可能指望上一次运行的堆改动还在。
- **D3** ① 向服务器**请求**页面（可能命中缓存 → `304 Not Modified`）② 拿到 HTML 文本 ③ **重新解析** ④ **重建 DOM 树** ⑤ 重新渲染。→ 手改的 DOM 全部丢失。
- **D4** 浏览器缓存。解法：**`Ctrl+Shift+R`**（硬刷新，跳过缓存）。
- **D5** DevTools 的**内置变量**，指向"你在 Elements 面板里当前选中的那个元素"。用于 Console ↔ Elements 联动。
- **D6** ① 出错的文件:行号（+ 源码上下文 + `^` 列位置）② 错误类型 + 消息 ③ **调用栈**（stack trace）④ 运行时内部帧（通常忽略）。**报错位置 ≠ 根因位置。**
- **D7** `SyntaxError` = **代码还没开始跑**（解析阶段）；`ReferenceError` = 运行时，用了一个**不存在的名字**；`TypeError` = 运行时，名字对了但**对它做的事不成立**；`RangeError` = 运行时，超出边界（栈溢出 / 数字越界）。
- **D8** **机械规则**：元凶 = `(reading 'Y')` 里 `Y` **之前的那一整段** = **`res.data.list`**，值是 **`null`**。（不是 `map` 是元凶，`map` 只是"你想读的属性名"。）
- **D9** 元凶 = **`report.sections`**，值是 `undefined`。（注意：括号里的 `summary` **不是**链的最后一段 —— 所以不能靠"最后一段"猜，要套规则。）
- **D10** 因为它的含义是"**读到文件末尾发现少了闭合符号**"，解析器会指到一个没意义甚至不存在的位置。定位手段：**括号配对高亮**（VS Code 里光标放到 `{` 上）、**`node --check 文件.js`**（只查语法不执行）、**从后往前找**、检查**中文全角标点**。
- **D11** `400` 请求参数不合法 · `401` 未认证（没带或带了无效凭证）· `403` 已认证但无权限 · `404` 资源不存在 —— **全部是 4xx = 客户端（请求）的问题**，去 Network 看 **Request**。`500` 服务端异常 · `502` 网关错误 —— **5xx = 服务端的问题**，去看**服务端日志**，改客户端没用。
- **D12** 会把**业务失败当成成功**，然后直接写 `res.data.xx` → `data` 是 `null` → 抛 `Cannot read properties of null` 崩溃。正确做法是**两层判断**：① `r.status !== 200` → 传输层失败 ② `body.code !== 0` → 业务层失败。两者都过才算真成功。**这正是 Phase 4 必须自己封装 Axios 拦截器的理由。**

</details>
