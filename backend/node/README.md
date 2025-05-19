# Backend Node.js Starter Kit

This is a Node.js backend starter kit designed to streamline development with modern tools and best practices.

[![My Skills](https://skillicons.dev/icons?i=nodejs,expressjs,typescript,vitest)](https://skillicons.dev)

## Setup Guide

1. **Clone the repository**:

```bash
git clone <repository-url>
cd backend/node
```

3. **Install Required Node Version**:

```bash
nvm install
nvm use
```

2. **Install dependencies**:

```bash
npm install
```

3. **Set up environment variables**:

Copy the .env.sample file to .env and Update it with your configuration.:

```bash
cp .env.sample .env
```

3. **Run the development server:**:

```bash
npm run dev
```

3. **Build the project:**:

```bash
npm run build
```

3. **Start the production server:**:

```bash
npm start
```

## Features Included

1. **TypeScript v5:** Strongly typed JavaScript for better code quality and maintainability.
   [Learn more](https://www.typescriptlang.org/)

2. **Prettier**: Code formatter to enforce consistent style.
   [Learn more](https://prettier.io/)

3. **ESLint**: Linter to catch errors and enforce coding standards.
   [Learn more](https://eslint.org/)

4. **Pino Logger**: High-performance logging library with log rotation in production.
   [Learn more](https://getpino.io/#/)

5. **Vitest**: A blazing-fast unit testing framework.
   [Learn more](https://vitest.dev/)

6. **Zod**: Schema validation library for runtime validation.
   [Learn more](https://zod.dev/)

7. **Commitlint**: Enforces conventional commit messages.
   [Learn more](https://commitlint.js.org/)

8. **Semantic Release**: Automates versioning and changelog generation.
   [Learn more](https://semantic-release.gitbook.io/semantic-release)

## Development Guidelines

### Typescript:

- Use TypeScript for all files (.ts, .tsx).
- Leverage strong typing and interfaces for predictable code.
- Avoid `any` unless absolutely necessary.

### Prettier:

Prettier is the source of truth for code formatting.
Configured to auto-format on save via editor(`.vscode`) or pre-commit hook.

- Check code formatting:

```bash
npm run format
```

- Fix code formatting

```bash
npm run format:fix
```

### Eslint:

ESLint enforces consistent code practices. Make sure to resolve all eslint issues before commiting.
Customize rules as needed via `eslint.config.mjs`.

- Lint the code:

```bash
npm run lint
```

- Fix linting issues:

```bash
npm run lint:fix
```

### Vitest:

We use Vitest as our primary testing framework.

- Run tests

```bash
npm run test
```

- Run tests with coverage:

```bash
npm run coverage
```

- Run tests in UI mode

```bash
npm run test:ui
```

### Zod:

Validation Middleware (`common/validate.middeleware.ts`): Uses Zod schemas to validate request payloads in routes.

### Pino Logger:

Structured, consistent, and performant logging is critical for observability and debugging, especially in production environments. We use Pino as our logging solution.

- Development Logging: Logs are printed to the console with colorized output.

- Production Logging: Logs are written to a rotating file in the logs directory.

### Commitlint:

Commit messages are automatically validated during commits. Ensure your messages follow the Conventional Commits standard. - https://www.conventionalcommits.org/en/v1.0.0/

### Semantic Release:

Releases are triggered on the `main` branch using GitHub Actions. Ensure your commits follow the Conventional Commits standard. - https://www.conventionalcommits.org/en/v1.0.0/

### Folder Structure

```
src/
├── app.ts               # Main application setup
├── config/              # Configuration files
├── const/               # Constants
├── logger/              # Logging setup
├── modules/             # Feature modules (e.g., healthcheck)
├── common/              # Common middlewares and utilities
├── utils/               # Utility functions
├── types/               # Type definitions
└── index.ts             # Entry point
```

Note: `modules/` folder contains feature related files into same folder.

Suppose, we have one feature called `auth` then `modules/auth` may have files such has

- auth.middleware.ts
- auth.controller.ts
- auth.service.ts
- auth.validations.ts
- auth.test.ts
- auth.routes.ts

This makes navigation easier, if we need to find all files related to one feature.
