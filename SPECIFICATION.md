# Project Specification: DevFlow

## Project Title & Description
**DevFlow** is a lightweight, full-stack sprint and task management application designed specifically for software engineering student teams and small developer squads. It provides real-time task board tracking, automated sprint velocity metrics, and peer review status updates.

## Purpose & Target Audience
- **Audience:** Computer science/software engineering students collaborating on group deliverables.
- **Purpose:** Simplify sprint tracking, task distribution, and code review status without the bloat of enterprise tools.

## User Stories
1. As a student developer, I want to create and assign task cards on a Kanban board so that our team can track sprint progress.
2. As a team leader, I want to view sprint velocity and completed story points so that I can report accurate team metrics.
3. As a reviewer, I want to update task states to "Under Review" or "Done" so that my team knows when code passes quality checks.

## Acceptance Criteria
### Story 1: Kanban Board Tasks
- Given a signed-in user, when they create a task, then it is saved with a title, description, and status (`To Do`, `In Progress`, `Under Review`, `Done`).
- Given missing required title text, when the form is submitted, then the system blocks submission and displays a validation alert.

## Technical Requirements
- **Framework:** Next.js (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS
- **Data/Backend:** REST API Route Handlers

## Core API Endpoints
- `GET /api/tasks`
- `POST /api/tasks`
- `GET /api/tasks/[id]`
- `PUT /api/tasks/[id]`

## Implementation Priority
- **P0:** Task creation, Kanban board display, status updates.
- **P1:** Sprint velocity chart, team member assignment.
- **P2:** Live GitHub pull request notifications.
