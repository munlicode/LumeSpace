# Monorepo Orchestration 📦

Standards for managing the pnpm + Turborepo workspace.

## 🏗 Structure

- **apps/**: Standalone applications and prototypes.
- **packages/**: Shared utilities, types, and UI components.

## 🔗 Dependency Management

- **Single Source of Truth**: Use workspace protocols (`workspace:*`) for internal dependencies.
- **Clean Installs**: Always use `pnpm` to ensure deterministic node_modules.
- **No Ghost Dependencies**: Ensure all used packages are explicitly declared in the local `package.json`.

## ⚡ Task Commands

- `pnpm dev`: Start all relevant development servers.
- `pnpm build`: Run optimized builds with Turbo caching.
- `pnpm lint`: Ensure code quality across all packages.
