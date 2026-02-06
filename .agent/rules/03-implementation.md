# Implementation Workflow 🛠️

How we transition from ideas to functional prototypes.

## 1. Plan & Verify

- Always create or update an `implementation_plan.md` before significant changes.
- Document technical trade-offs, especially regarding simulation logic (e.g., how we calculate orbital latency).

## 2. Proactive Development

- As an AI agent, be proactive. If a new component requires a shared utility, create it in `packages/` immediately.
- Verify work through local dev servers or unit tests before declaring a task "done".

## 3. Atomic Changes

- Commits and pull requests should be focused. Don't mix unrelated feature implementations.
- Follow [Conventional Commits](https://www.conventionalcommits.org/).

## 4. Documentation

- If it isn't documented, it doesn't exist. Update READMEs and source-code comments alongside implementation.
