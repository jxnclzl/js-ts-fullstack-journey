# From Zero to Full-Stack in 12 Weeks

My working log of learning web development from scratch — documented step by step.

Not a tutorial collection: every file here is something I built, broke, and fixed myself.

**Status:** Phase 0 — Tooling · **Started:** 2026-09-18 · **Target:** job-ready by December 2026

---

## Goal

I'm a developer with a background in Go and C++, moving into full-stack JavaScript / TypeScript
development. Over 12 weeks I'm building the skills, the main project, and the working habits
needed for a real job.

This repository records the process as it actually happens — including the parts that went wrong.

## Progress

- [x] **Phase 0 — Tooling** · ✅ 2026-09-22 · terminal, Git, browser DevTools, Node 24 + pnpm
- [ ] **Phase 1 — Web fundamentals** · semantic HTML, CSS layout, browser rendering, events
- [ ] **Phase 2 — JavaScript deep dive** · scope, closures, `this`, prototype, event loop, async
- [ ] **Phase 3 — TypeScript** · generics, type narrowing, utility types
- [ ] **Phase 4 — Vue 3** · Composition API, Vue Router, Pinia, Element Plus, Axios
- [ ] **Phase 5 — Backend** · NestJS, PostgreSQL, Prisma, JWT auth, testing, Docker
- [ ] **Phase 6 — AI Agent** · main project: tool calling, streaming, RAG with pgvector
- [ ] **Phase 7 — Job-hunting sprint** · portfolio polish, mock interviews, algorithms

## Tech Stack

| Layer      | Technology                                                  |
| ---------- | ----------------------------------------------------------- |
| Language   | TypeScript 7                                                |
| Frontend   | Vue 3.5, Vite, Vue Router 5, Pinia 4, Element Plus          |
| Backend    | NestJS 12, Prisma 7                                         |
| Database   | PostgreSQL (with `pgvector`), MySQL                          |
| Testing    | Vitest, Vue Test Utils                                      |
| Tooling    | pnpm, ESLint (flat config), Prettier, Docker                |
| Runtime    | Node.js 24 LTS                                              |

## Getting Started

Requirements: **Node.js ≥ 24** and **pnpm ≥ 12**.

```bash
node -v   # v24.x
pnpm -v   # 12.x
```

```bash
git clone https://github.com/jxnclzl/js-ts-fullstack-journey.git
cd js-ts-fullstack-journey
```

There is no application code yet. This repository currently holds the learning plan and the
progress record; setup instructions will be added as each phase produces runnable code.

## Project Structure

```
.
├── AGENTS.md      Rules for the AI pair-programmer I work with
├── ROADMAP.md     The 12-week plan, phase by phase, with pass/fail criteria
├── PROGRESS.md    Live skill matrix, current blockers, and session log
└── README.md      This file
```

| File          | What it is for                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------- |
| `ROADMAP.md`  | What I intend to learn each week, and the concrete gate I must pass before moving to the next phase |
| `PROGRESS.md` | The current state: per-skill mastery level with evidence, what I'm stuck on, what's due for review |
| `AGENTS.md`   | The rules I set for my AI pair-programmer — see below                                              |

## How I Work

I study with an AI pair-programmer, and I wrote its rulebook (`AGENTS.md`) to keep myself honest.
The core rules are:

- **No code I can't explain.** If it isn't in my unlocked-syntax list, the AI may not use it.
- **Errors are not fixed for me.** Every failure gets diagnosed: which line, which category, why it
  happened, and how I could have found it myself.
- **Every concept goes through the same loop:** minimal working example → I rewrite it from scratch
  → I explain it back in plain words → I fix a deliberately broken version.
- **No level is earned without evidence.** Each skill is rated 0–4, and ratings are backed by a
  dated reference to a file or a test I passed.

I keep the rules, the plan, and my progress in the repository on purpose: it makes the process
auditable, including the phases that slipped.

## Contact

- GitHub: [@jxnclzl](https://github.com/jxnclzl)
- Email: liuzhaoli1997@gmail.com
