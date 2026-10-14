# Asta's Preparation Dashboard --- Product Requirements Document

## 1. Overview

**Product name:** Asta's Preparation Dashboard\
**Document:** `docs/PRD.md`\
**Status:** Initial draft\
**Technology stack:** Next.js, TypeScript, Tailwind CSS

Asta's Preparation Dashboard is a single-page dashboard for tracking
progress toward a personal training goal. It presents three predefined
preparation tasks, lets the user mark each task complete or incomplete,
and updates the completed-task count and overall progress.

The visual direction is a clean, minimal productivity dashboard with
subtle details inspired by _Black Clover_. The dashboard is a
lightweight tracking tool, not a combat simulator or a full
training-management platform.

## 2. User

### Primary user

Any user managing a personal training plan. The example scenario
features Asta preparing to face Lucifero.

### User needs

The user needs to: - See the preparation tasks in one place. - Quickly
identify which tasks are complete and which remain. - Mark a task
complete when finished. - Undo a completion when necessary. - Understand
overall progress at a glance.

These needs are product assumptions for the initial scope, not findings
from user research.

## 3. Problem Statement

Training notes can be scattered across different places, making it
harder to see what remains to be done and how much preparation is
complete. The user needs one clear view of the three preparation tasks
and their current completion status.

## 4. Goal

Provide a simple, readable dashboard where a user can track three
predefined preparation tasks and immediately see progress calculated
from their completion status.

### Success criteria

The dashboard meets its initial goal when: - All three required tasks
are visible. - Each task can be marked complete and incomplete. - The
completed-task count updates correctly. - The progress percentage
updates correctly. - The interface communicates the current state
clearly.

These are implementation acceptance criteria, not claims of product
validation.

## 5. Core Features

### Feature 1: Predefined preparation tasks

Display exactly these three tasks: 1. Sword control 2. Physical
endurance 3. Team coordination

All tasks start as incomplete when the dashboard initializes. Each task
should have a clear name and an obvious completion state.

### Feature 2: Reversible task completion

Provide a simple control for each task that lets the user toggle its
state between incomplete and complete. The user must be able to undo a
completion by toggling the task back to incomplete.

Changing one task must not change the completion state of another task.

### Feature 3: Completion summary and preparation progress

Display both: - A completed-task count in the form **completed /
total**, such as `2 / 3`. - An overall progress percentage, such as
`67%`.

Calculate the summary from the current task states: - **Completed
count:** number of tasks marked complete. - **Total count:** 3. -
**Progress percentage:** `(completed count / total count) × 100`.

Round the displayed percentage to the nearest whole number. With three
tasks, the expected values are: - `0 / 3` → `0%` - `1 / 3` → `33%` -
`2 / 3` → `67%` - `3 / 3` → `100%`

The count and percentage must update immediately whenever a task is
toggled.

## 6. User Stories

1.  As a user, I want to see all three preparation tasks together so
    that I know what I need to work on.
2.  As a user, I want all tasks to start incomplete so that the
    dashboard begins with a clear, consistent state.
3.  As a user, I want to mark a task complete so that I can record
    finishing it.
4.  As a user, I want to mark a completed task incomplete again so that
    I can correct its state.
5.  As a user, I want to see the number of completed tasks out of three
    so that I can quickly understand how many remain.
6.  As a user, I want to see a progress percentage that changes with
    task completion so that I can understand overall preparation
    progress.

## 7. Acceptance Criteria

### Task list

- [ ] The dashboard displays `Sword control`, `Physical endurance`,
      and `Team coordination`.
- [ ] Exactly three tasks are displayed.
- [ ] All three tasks are incomplete on initial load.
- [ ] Each task has a visible and understandable completion control.
- [ ] Each task's completion state is visually distinguishable.

### Task interaction

- [ ] Activating a task's completion control marks that task complete.
- [ ] Activating it again returns that task to incomplete.
- [ ] Toggling one task does not alter the other tasks.
- [ ] The interface reflects each state change without requiring a
      page reload.

### Summary and progress

- [ ] The dashboard displays a completed/total count.
- [ ] The total is always three.
- [ ] The dashboard displays a progress percentage.
- [ ] The completed count and percentage are calculated from the
      current task states rather than maintained as unrelated values.
- [ ] The count and percentage update immediately after each toggle.
- [ ] The displayed progress is `0%` when no tasks are complete and
      `100%` when all tasks are complete.
- [ ] One completed task displays `1 / 3` and `33%`.
- [ ] Two completed tasks display `2 / 3` and `67%`.

### Scope and reliability

- [ ] The dashboard is a single page.
- [ ] No login or account is required.
- [ ] The interface remains usable on common desktop and mobile
      viewport sizes.
- [ ] Task state is allowed to reset after a refresh; persistent
      storage is not required.

## 8. Design Requirements

### Visual direction

- Use a minimal, modern dashboard layout with clear visual hierarchy.
- Use subtle _Black Clover_-inspired details, such as restrained dark
  tones, a small accent color, or understated fantasy-inspired
  decoration.
- Avoid clutter, excessive animation, or visual effects that compete
  with the task list.
- Do not require official anime artwork or complex illustrations for
  the interface to work.

### Layout and content

- Show the dashboard title and a brief explanation of its purpose.
- Keep the three task items together in a clearly identifiable
  section.
- Place the completed-task count and progress percentage where they
  are easy to scan.
- Use a progress bar or similarly clear visual indicator alongside the
  percentage.
- Make each task's completion control easy to identify and operate.

### Accessibility and responsiveness

- Use readable text sizes and sufficient contrast.
- Ensure completion controls can be operated with a keyboard and have
  clear accessible names.
- Do not communicate task state through color alone; pair color with a
  checkmark, label, or other visual cue.
- Adapt the layout for smaller screens without hiding task names,
  controls, or progress information.
- Respect reduced-motion preferences if motion is used.

## 9. Assumptions

- The dashboard is intended for one user at a time in the current
  browser session.
- The task names and task count are fixed for this version.
- All tasks are equally weighted when calculating progress.
- A task is either complete or incomplete; partial completion is not
  supported.
- The progress percentage is rounded to the nearest whole number.
- State may be held in client-side application state and may reset
  after a refresh.
- The _Black Clover_ inspiration is visual and contextual; no official
  artwork, branding assets, or licensing assumptions are required.
- No user research or product validation has been conducted or is
  claimed by this PRD.

## 10. Limitations

- Task completion may be lost when the page is refreshed or the
  application is restarted.
- Users cannot create, rename, reorder, or delete tasks.
- The dashboard does not store training notes, dates, deadlines,
  history, or streaks.
- The dashboard does not verify whether a training task was actually
  completed.
- Progress reflects only the three task toggles and does not measure
  fitness, combat ability, or readiness to fight.
- No backend or cross-device synchronization is included.

## 11. Out of Scope

The following are explicitly excluded from this version: - Login,
registration, user profiles, or authentication. - Database integration
or persistent storage. - Payments, subscriptions, or purchases. -
Chatbot or AI assistant features. - Combat simulation, battle mechanics,
or readiness predictions. - Additional routes or pages beyond the single
dashboard. - Custom task creation, editing, deletion, or reordering. -
Training schedules, calendars, reminders, notifications, or timers. -
Notes, analytics history, achievements, leaderboards, or social
features. - Backend APIs or cross-device synchronization.

## 12. Technical Constraints

- **Next.js:** implement the product as a single dashboard page.
- **TypeScript:** use typed task data and completion state.
- **Tailwind CSS:** implement responsive layout and visual styling.
- **Client-side interaction:** task toggles and derived progress must
  update in the browser.
- **No persistence requirement:** do not add a database or
  browser-storage persistence as part of this scope.

This document defines product requirements only. It does not include
application code or prescribe detailed implementation architecture.
