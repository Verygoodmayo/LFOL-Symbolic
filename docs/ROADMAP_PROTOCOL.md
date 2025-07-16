# The "Javier's Compass" Roadmap & State Management Protocol

This document outlines the protocol for managing project roadmaps, tracking progress, and ensuring that the AI agent (Javier) can efficiently resume work with minimal context.

---

## 1. Core Principles

- **Clarity:** The current state of any workstream should be immediately obvious.
- **Persistence:** Project state should be version-controlled alongside the code.
- **Single Source of Truth:** High-level planning lives in Notion; granular, in-progress state lives in the repository.
- **Efficiency:** The agent should be able to get up to speed without requiring a lengthy prompt from the user.

---

## 2. The Components

### 2.1. The High-Level Roadmap (Notion)

- **Purpose:** To maintain the long-term vision, project phases, and major milestones.
- **Location:** The relevant Notion pages (e.g., "Roadmap," "Backend Roadmap").
- **Updates:** Updated only upon the completion of a major milestone.

### 2.2. The `STATE.md` File

- **Purpose:** To act as the "You Are Here" marker for the agent. It provides the immediate context for the current workstream.
- **Location:** At the root of the relevant workstream's directory (e.g., `/backend/STATE.md`).
- **Structure:**
    ```markdown
    # LFOL Backend State

    - **Current Phase:** Phase 1: Foundation & Proof of Concept
    - **Current Milestone:** 1.1: Backend Service Setup
    - **Status:** In Progress

    ---

    ### Current Objective
    > Initialize a new Rust project for the backend service, set up a basic web framework, and create the initial Git repository.

    ### Scope & Artifacts
    - **Notion Roadmap:** [Backend Roadmap](https://www.notion.so/23195c49-c712-80fc-a5d9-dcbee5f341eb)
    - **Git Repository:** https://github.com/Verygoodmayo/LFOL-Real (To be created)

    ### Open Issues / Notes
    - No open issues. Ready to proceed.
    ```

### 2.3. The `todo` List (Agent's Internal Tool)

- **Purpose:** To manage the detailed, actionable checklist of tasks for the current milestone.
- **Management:** The agent will create, update, and complete tasks using its internal `todo_write` tool as work progresses.

---

## 3. The Workflow

1.  **Initiation:** The user signals the start of a new milestone (e.g., "Javier, let's start Milestone 1.1").
2.  **Briefing:** The agent reads the high-level Notion roadmap.
3.  **State Setting:** The agent updates the relevant `STATE.md` file with the current phase, milestone, objective, and artifacts.
4.  **Tasking:** The agent generates a detailed `todo` list for all tasks within that milestone.
5.  **Execution:** The agent works through the `todo` list, updating it in real-time.
6.  **Completion:** Upon completing the final task of a milestone, the agent updates the `STATE.md` to `Completed`, archives the `todo` list, and updates the high-level Notion roadmap to reflect the progress. 