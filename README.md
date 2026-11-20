# Unnamed Language Learning Platform

*A whimsical library where stories become a way to learn languages.*

## About the Project

LanguageFiction is a multilingual fiction-reading and language-learning platform designed to help people develop their language skills through reading.

The platform allows users to discover, read and publish both fanfiction and original fiction in different languages. Readers can interact with unfamiliar words, phrases and passages to access contextual translations without interrupting their reading experience.

Rather than separating language learning from entertainment, LanguageFiction brings the two together — allowing readers to learn naturally through stories they enjoy.

**The story comes first. Learning happens naturally through reading.**

## Planned Features

### Reading Experience
- Discover and read fanfiction and original fiction.
- Browse stories by language, genre, fandom and completion status.
- Choose between three reading modes:
  - **Immersion Mode:** Read the original text without translations.
  - **Assisted Mode:** Select unfamiliar words or passages to reveal translations.
  - **Parallel Mode:** Read the original and translated text alongside each other.
- Save reading progress and bookmarks.
- Customise reading preferences.

### Translation & Language Learning
- On-demand translations of selected words, phrases and sentences.
- Context-aware translations that consider the surrounding passage.
- Full parallel translations of chapters.
- Support for multiple learning languages.
- Save unfamiliar vocabulary for later review.
- Build personal vocabulary collections.
- Review saved words through simple flashcards and examples.

### Publishing & Community
- Create and publish original fiction and fanfiction.
- Write, edit and organise chapters.
- Manage story descriptions, covers, genres and content warnings.
- Discover authors and their published works.
- Interact through ratings and comments.

### Personal Library
- Bookmark stories and chapters.
- Maintain reading lists.
- Track reading history and progress.
- Continue reading from where you left off.
- Organise saved vocabulary.

## Technology Stack

| Area | Technology |
|---|---|
| Frontend | React, TypeScript, Vite |
| Styling | SCSS / Sass |
| Routing | React Router |
| HTTP Requests | Axios |
| Validation | Zod |
| Icons | Lucide React |
| Backend | C#, ASP.NET Core Web API |
| Database | PostgreSQL |
| ORM | Entity Framework Core |
| Authentication | ASP.NET Core Identity |
| API | REST / HTTP |
| Testing | xUnit, Vitest |
| Version Control | Git & GitHub |

## Project Architecture

The project is planned as a modular monolith, separating responsibilities while keeping the initial application manageable.

```text
LanguageFiction/
├── backend/
│   ├── LanguagePlatform.API/
│   ├── LanguagePlatform.Application/
│   ├── LanguagePlatform.Domain/
│   ├── LanguagePlatform.Infrastructure/
│   └── LanguagePlatform.Tests/
│
├── frontend/
│   └── language-platform-client/
│
├── docs/
├── infrastructure/
└── tests/
```

### Backend
The backend will be organised into separate layers:

- **API:** HTTP endpoints, controllers and middleware.
- **Application:** Application logic and use cases.
- **Domain:** Core entities, business rules and interfaces.
- **Infrastructure:** Database access, authentication, storage and translation integrations.
- **Tests:** Automated unit and integration tests.

### Frontend
The React application will be organised around individual features, with reusable components, services, hooks, types and shared styling.

## Development Roadmap

The project will be developed incrementally, with a focus on maintainability, accessibility and a reliable reading experience.

- [ ] **Phase 1 — Project Foundation:** Repository setup, frontend and backend initialisation, dependencies and development environment.
- [ ] **Phase 2 — Authentication:** Registration, login, user profiles and language preferences.
- [ ] **Phase 3 — Stories & Publishing:** Story management, chapters, drafts and discovery.
- [ ] **Phase 4 — Reading Experience:** Reader interface, reading modes, bookmarks and progress tracking.
- [ ] **Phase 5 — Translation Engine:** Context-aware translations, selected-text translation and parallel reading.
- [ ] **Phase 6 — Learning Tools:** Vocabulary collections, saved translations and flashcards.
- [ ] **Phase 7 — Library & Community:** Reading lists, ratings, comments and moderation.
- [ ] **Phase 8 — Testing & Deployment:** Automated testing, security, optimisation and production deployment.

## Design Direction

The visual identity will take inspiration from a whimsical library: warm, inviting and bookish, while remaining clean and comfortable for extended reading sessions.

The interface will feature:
- A soft, muted colour palette.
- Elegant serif headings paired with readable sans-serif typography.
- Subtle animations and transitions.
- Light and dark themes.
- Responsive layouts for desktop, tablet and mobile.

## Getting Started

> **Development status:** Initial project setup is in progress. Installation and configuration instructions will be added as the application develops.

## Project Status

<em>Currently in development — project foundation stage.</em>

This project is being built from the ground up, with an emphasis on full-stack development, database design, API architecture, translation integration and user-focused design.

---

*LanguageFiction — discover stories, explore languages, and learn one page at a time.*
