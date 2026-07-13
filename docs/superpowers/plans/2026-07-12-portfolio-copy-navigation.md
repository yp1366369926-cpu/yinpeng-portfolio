# Portfolio Navigation and Copy Updates Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a working `练习 / 外包` navigation destination and update the portfolio copy to 7 years of experience and 100W team revenue.

**Architecture:** Reuse the existing single-page React structure and visual language. Add one lightweight section with an anchor target so the new navigation item is not dead, then update the existing copy at its source of truth in `src/main.jsx`.

**Tech Stack:** React 19, Vite/Vinext, CSS, pnpm.

## Global Constraints

- Preserve existing project routes and visual styling.
- Use `练习/外包` as the visible navigation label.
- Use `7年工作经验` and `100w` exactly in the affected visible copy.
- Do not alter unrelated project content or assets.

---

### Task 1: Add regression checks

**Files:**
- Create: `scripts/verify-portfolio-updates.sh`

- [ ] **Step 1: Write the failing check**

The check asserts the new nav label/anchor, the new practice section, the absence of `6年`, and the exact `100W` metric.

- [ ] **Step 2: Run it and verify it fails**

Run: `bash scripts/verify-portfolio-updates.sh`

Expected: FAIL because the current source does not yet contain the practice anchor/section, still contains `6年`, and still renders `01M`.

### Task 2: Implement navigation and copy changes

**Files:**
- Modify: `src/main.jsx`
- Modify: `src/styles.css`

- [ ] **Step 1: Add the nav destination and section**

Add `<a href="#practice">练习 / 外包</a>` to `Header`, and add a compact `Practice` section with `id="practice"` before `Contact` so the anchor resolves without affecting existing project routes.

- [ ] **Step 2: Update the requested copy**

Change the profile role from `6年工作经验` to `7年工作经验`, change the metric from `01<sup>M</sup>` to `100W`, and preserve all unrelated `01` project/section numbering.

- [ ] **Step 3: Style the new section**

Use existing section, page-shell, section-label, glow-frame, and accent tokens; add only the focused layout rules needed for the new section and its responsive stacking.

- [ ] **Step 4: Run the regression check**

Run: `bash scripts/verify-portfolio-updates.sh`

Expected: PASS with no old `6年` or `01M` copy remaining in source.

### Task 3: Build and inspect the final diff

**Files:**
- Verify: `src/main.jsx`, `src/styles.css`, `scripts/verify-portfolio-updates.sh`

- [ ] **Step 1: Build**

Run: `pnpm build`

Expected: exit code 0 and a completed Vinext production build.

- [ ] **Step 2: Inspect the diff and re-run checks**

Run: `git diff --check && bash scripts/verify-portfolio-updates.sh`

Expected: no whitespace errors and all copy/navigation checks pass.
