# The 'Javier' Smart Admin Panel

## Vision

The 'Javier' Smart Admin Panel is a standalone, AI-powered backend service designed to provide intelligent administrative capabilities to any modern website. The goal is to create a reusable tool for web developers to offer their clients a powerful, intuitive way to manage their site's content using natural language.

## Core Architecture

The system is built on a robust Rust backend using the Axum framework. It leverages the power of Large Language Models (LLMs) via the OpenAI API to interpret natural language commands and translate them into specific actions. The core functionality revolves around programmatically interacting with a website's frontend Git repository.

1.  **Rust Backend:** A lightweight, high-performance service that exposes a simple API.
2.  **AI Core:** Connects to OpenAI to translate prompts into a structured JSON `AiPlan`.
3.  **Git Manipulation:** Uses the `git2` library to securely clone, modify, and push changes to a remote Git repository via SSH.

## Current Capabilities

The agent currently supports the following atomic operations on a single file:

-   **CREATE:** Create a new file.
-   **READ:** Read the contents of an existing file.
-   **UPDATE:** Overwrite an existing file with new content.
-   **DELETE:** Remove a file from the repository.

## API Endpoints

-   `GET /health`: A simple health check endpoint.
-   `POST /ai-update`: The main endpoint for sending natural language commands to the agent.

## Roadmap

-   Implement multi-file operations.
-   Enhance contextual understanding for more complex updates (e.g., "correct the spelling of 'Javier' in the about page").
-   Add more robust security and validation layers.
-   Develop a clear protocol for frontend "entry points" for a more dynamic content updates.

### User Interface & Experience

-   **Web UI:** Develop a simple, intuitive chat-based web interface for users to interact with the 'Javier' agent directly. This will be the primary control panel for managing the website.
-   **Mobile Application:** Create a companion mobile app (iOS and Android) that allows website owners to manage their site on the go. The core feature will be a chat interface to perform updates, such as adding events, publishing articles, or changing text, directly from their phone. 

### Deployment & Automation

-   **CI/CD Pipeline:** Implement a Continuous Integration/Continuous Deployment pipeline (e.g., using GitHub Actions) for the frontend repository. This pipeline will automatically trigger on any push to the `main` branch, building the site, running tests, and deploying it to the hosting environment. This ensures that changes made by the 'Javier' agent are reflected on the live website almost instantly. 

### Enhanced AI Agent Intelligence

-   **Conversational Search:** Implement a new `SEARCH` action, allowing the AI to find relevant files based on ambiguous user prompts (e.g., "remove the Zizek event"). The AI will learn to use this to locate information before acting.
-   **Multi-Step Confirmation:** Develop a conversational flow where the AI can ask clarifying questions or for confirmation before executing a potentially destructive action. This will make the agent safer and more intuitive.

### Project Decoupling & Reusability

-   **Dynamic Configuration:** Abstract all project-specific settings (target Git repository, SSH key paths, etc.) into a dedicated configuration file (`Javier.config.json` or similar). This will allow the Admin Panel to be pointed at any frontend project.
-   **Standalone Packaging:** Create clear instructions and scripts for deploying the 'Javier' Smart Admin Panel as a standalone tool, completely independent of the LFOL project. 

### Backup & Versioning Strategy
- **Automated Git Snapshots:** Before any modification, the backend will create a timestamped branch (e.g., `backup/2025-07-16-10:30:15`). This provides a complete, restorable snapshot of the repository state.
- **Pruning Protocol:** A cleanup mechanism will automatically delete backup branches older than a configurable amount of time (e.g., 30 days) to prevent repository bloat.

---
**Completed:**
- [x] Foundational CREATE, READ, UPDATE, DELETE actions.
- [x] Git integration for committing and pushing changes.
- [x] Basic UI with chat interface.
- [x] CORS handling for UI-backend communication.
- [x] Initial `SEARCH` and `CONFIRM` conversational flow.
- [x] Intelligent keyword extraction for `SEARCH`.

---
## New UX Paradigm (Next Steps)
The current implementation is a proof-of-concept. The next major iteration will focus on a more sophisticated and user-friendly conversational flow:

1.  **Proactive Suggestions:** When a user expresses an intent like "I want to remove an event," the agent should not just search based on keywords. Instead, it should:
    - Identify the relevant data source (e.g., `Sidebar.tsx`).
    - Parse the file to extract a list of existing items (e.g., all the events).
    - Present this list to the user as a set of choices. This is the foundation for the proactive deletion flow.

2.  **Detailed Confirmation:** Once the user selects an item, the agent should display a summary of that item (e.g., for a blog post, show title, description, date). This ensures the user is certain about the action.

3.  **Final Approval:** Before executing the git operation, a summary of the action is provided.

4.  **Surgical Modification (The Scalpel):** The agent will no longer replace entire files. The new `MODIFY` process will be:
    - The backend sends the file content and the user's instructions to the AI.
    - The AI is prompted to return a `diff` patch or a precise set of changes (e.g., "delete lines 10-15", "insert 'new text' after line 22").
    - The backend parses these instructions and applies them surgically to the file, minimizing risk and preserving file integrity.

5.  **Execution and Verification:** After the final "yes," the agent commits the change and reports back the success or failure. 

### The Holy Grail: Automated Onboarding
The ultimate vision is to create an onboarding process where the 'Javier' panel can be pointed at any website and automatically understand its structure.
- **Content Entry-Point Detection:** The agent will "read" a website's frontend code and identify common patterns for editable content (e.g., arrays of objects for blog posts, specific divs for page content, lists for events).
- **Suggested Actions:** Based on this analysis, the admin UI will be populated with a pre-configured set of suggested actions for the user (e.g., "Add New Event," "Edit 'About Us' Page," "Update Team Members"). This transforms the tool from a powerful command line into a truly intelligent, self-configuring control panel. 

### Advanced Conversational UX (The "Add Event" Flow)
To make the agent feel truly interactive, we will implement multi-turn conversational abilities.
1.  **Intent Recognition:** The agent will first determine the user's high-level goal (e.g., "I want to add an event").
2.  **Information Gathering:** If necessary, the agent will ask clarifying questions to gather all required information (e.g., "Great! I need a Title, Description, and Date.").
3.  **Natural Language Parsing:** The agent will be able to extract structured data (JSON) from the user's free-form, natural language responses.
4.  **Dazzling Summaries:** Before committing any action, the agent will present the user with a beautifully formatted summary of the proposed changes for final confirmation. The design of these summaries is a key task.
5.  **Stateful Confirmation:** The agent will guide the user through the confirmation, ensuring the final action is exactly what the user wants. 