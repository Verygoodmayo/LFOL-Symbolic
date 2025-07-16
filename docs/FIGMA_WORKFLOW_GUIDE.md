# Figma to Code Workflow Guide

This document outlines the process for translating Figma designs into functional frontend code for the LFOL project. Following this guide will ensure consistency, efficiency, and high-quality results.

## Guiding Principles

-   **Structure First, Style Last:** We build the skeleton (HTML/JSX) before we paint the walls (CSS/SCSS).
-   **Component-Driven:** We break down complex designs into small, reusable components.
-   **Single Source of Truth:** The `DESIGN_LOG.md` is the definitive reference for all Figma assets.

## Our Workflow

1.  **Task Definition:** The user provides a Figma link and a clear description of the component or view to be built.

2.  **Figma Analysis (Agent):**
    *   **Verify Connection:** The agent first ensures it can connect to the Figma MCP server. If not, the task is blocked.
    *   **Component Breakdown:** The agent analyzes the design and proposes a breakdown into smaller, logical components.
    *   **Design Token Extraction:** The agent identifies all design tokens (colors, fonts, spacing, etc.) from the design.

3.  **Agreement (User & Agent):**
    *   The user reviews and approves the component breakdown and the list of design tokens.
    *   The agent updates the `DESIGN_LOG.md` with the new components and their statuses.

4.  **Implementation (Agent):**
    *   **Style Integration:** The agent adds or updates a central `_variables.scss` file with the extracted design tokens.
    *   **Component Scaffolding:** The agent creates the necessary files (`.tsx`, `.scss`) for each component.
    *   **HTML/JSX Structure:** The agent writes the semantic HTML structure for each component.
    *   **Styling (BEM/SCSS):** The agent applies styles using our agreed-upon BEM methodology and the variables from the central SCSS file.
    *   **Integration:** The agent assembles the new components into the main application layout.

5.  **Review (User):** The user reviews the implemented components and provides feedback for any necessary revisions.

## Image Handling

When a design contains images, the agent will retrieve them directly from Figma via the MCP tool. The tool provides a localhost URL for each image asset.

-   **Process:** Ensure all images are part of the Figma component. The agent will then automatically get the image URLs and integrate them into the code.
-   **No Manual Attachments:** There is no need to manually attach or upload images in the chat. The most reliable method is to have the images be part of the Figma design itself. 