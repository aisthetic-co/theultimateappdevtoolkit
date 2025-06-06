# Next.js + Strapi CMS Starter

[![My Skills](https://skillicons.dev/icons?i=nextjs)](https://skillicons.dev)
<img src="public/strapi.png" width="45" height="45">
[![My Skills](https://skillicons.dev/icons?i=typescript,tailwind)](https://skillicons.dev)

This starter uses Next.js 15 + Tailwind CSS for the frontend and [Strapi V5](https://strapi.io/) to handle its content.

## Features

- **Next.js Frontend:** Fully integrated frontend built with Next.js, featuring a collection of reusable components such as Media, CTA, etc.

- **TypeScript Support with Sanity TypeGen:** Automatically generate TypeScript types from your schema using Sanity TypeGen, ensuring type safety and improved DX.

## Setup Guide

1. Clone the repository:

```bash
git clone <repository-url>
cd project-folder
```

2. Install Required Node Version:

```bash
nvm install
nvm use
```

3. Install dependencies:

```bash
npm install
```

4. Add environment variables:

- Create a `.env.local` file in the root directory:

```bash
touch .env.local
```

- Add the following variables:

```bash
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337 # Strapi URL
NEXT_PUBLIC_STRAPI_API_TOKEN=<token-from-strapi-dashboard> # Strapi token
```

5. Run the development server:

```bash
npm run dev
```

- Next App can be accessed here [http://localhost:3000](http://localhost:3000)

6. Build the project:

```bash
npm run build
```

3. Start the production server:

```bash
npm start
```

## Folder Structure

```bash
. # root of the application
├── eslint.config.mjs             # ESLint configuration
├── next.config.ts                # Next.js configuration
├── package-lock.json             # Locked versions of installed dependencies
├── package.json                  # Project metadata, dependencies, scripts
├── postcss.config.mjs            # PostCSS configuration
├── public                        # Publicly accessible static assets
│   ├── ...
├── README.md                     # Project documentation and setup instructions
├── src
│   ├── app.types.ts              # Shared types for the app
│   ├── components                # Reusable UI components
│   │   ├── CustomRichText.tsx    # Renders rich text from Strapi
│   │   ├── PageContent.tsx       # Renders Page Content
│   │   ├── PageMetaData.tsx      # Renders Page Metadata
│   │   ├── DisableDraftMode.tsx  # Banner for disabling preview mode
│   │   ├── DynamicZoneManager.tsx # Manages Strapi dynamic zones rendering
│   │   ├── CustomCta.tsx         # Link
│   │   ├── CustomImage.tsx       # Image
│   │   ├── CustomVideo.tsx       # Video
│   │   ├── Media.tsx             # Media
│   │   ├── Footer.tsx            # Footer
│   │   ├── Layout.tsx            # Layout
│   │   ├── Navbar.tsx            # Navbar
│   │   └── ...
│   ├── fonts                     # Font loader utilities
│   │   └── loadFonts.ts          # Loads and registers web fonts
│   ├── pages                     # Pages Router
│   │   ├── api                   # API route handlers
│   │   │   ├── disable-preview.ts # Disables preview mode for content
│   │   │   └── enable-preview.ts # Enables preview mode for content
│   │   ├── _app.tsx              # Custom App (wraps all pages)
│   │   ├── _document.tsx         # Custom Document (HTML structure)
│   │   ├── [slug]
│   │   │   └── index.tsx         # Dynamic route for slug pages
│   │   └── index.tsx             # Main homepage
│   ├── strapi                    # Strapi integration utilities
│   │   ├── env.ts                # Environment variable helpers
│   │   ├── lib                   # Utility functions and API clients
│   │   │   ├── fetch.ts          # Wrapper for fetching data from Strapi
│   │   │   ├── queries.ts        # GraphQL or REST API query definitions
│   │   │   └── utils.ts          # Helper functions for Strapi responses
│   │   └── types.ts              # TypeScript types for Strapi content
│   └── styles                    # Global styles and CSS
│       └── globals.css           # Global CSS definitions
└── tsconfig.json                 # TypeScript configuration file
```

## Dev Guidelines

### 1. Add a New Component

**Step 1:** Add Strapi Query: Add the fields for the new component in `/strapi/lib/queries.ts`.

```typescript
export const titleAndMediaFields = {
  fields: ["title", "description"],
};

export const dynamicZoneComponents = {
  // other components query...
  "dynamic-zone.title-and-description": {
    ...titleAndMediaFields,
  },
};
```

**Step 2:** Define Component UI: Create a new React component in the `src/components` directory.

```tsx
// NewComponent.tsx
import CustomRichText from "./CustomRichText";
import { CustomCtaProps } from "@/app.types";
import CustomCta from "./CustomCta";
import { BlocksContent } from "@strapi/blocks-react-renderer";

type Props = {
  title: BlocksContent; // Use BlocksContent type for rich text field
  description: BlocksContent;
};

const NewComponent = (props: Props) => {
  return (
    <section className="py-10 space-y-8">
      {props.title && (
        <div className="font-montserrat text-center text-4xl">
          <CustomRichText content={props.title} />
        </div>
      )}
      {props.description && (
        <div className="font-montserrat text-center text-lg">
          <CustomRichText content={props.description} />
        </div>
      )}
    </section>
  );
};

export default NewComponent;
```

**Step 4:** Register Component to `components/DynamicZoneManager`:

```tsx
import NewComponent from "./NewComponent";

const componentMapping = {
  // other dynamic zone components,
  "dynamic-zone.new-component": NewComponent,
};
```

### 2. Add a New Font

**Step 1.** Export Font from `fonts/loadFonts.ts`

Import the desired font from a package like `@next/font/google` or any other source then export the font configuration from `src/fonts/loadFonts.ts`.

```typescript
import { Montserrat, Roboto } from "@next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});
```

**Step 2.** Add Font in `Layout.tsx`

Import the font configuration into the `components/Layout.tsx` component. Add the font's CSS variable to the `className` of the root `<div>`.

```tsx
import { montserrat, roboto } from "@/fonts/loadFonts";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${montserrat.variable} ${roboto.variable}`}>
      {children}
    </div>
  );
};

export default Layout;
```

---

### 3. Tailwind CSS Guidelines

You can add tailwind utilities and theme variables in `styles/global.css`

```css
/* Customize your tailwind theme variables  */
@theme inline {
  /* colors */
  --color-background: var(--background);
  --color-foreground: var(--foreground);

  /* fonts */
  --font-montserrat: var(--font-montserrat);

  /* breakpoints */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-tab: 967px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}

/* Add tailwind utilities */
@utility scrollbar-hidden {
  &::-webkit-scrollbar {
    display: none;
  }
}
```

Read the Docs here - https://tailwindcss.com/docs/theme

---

### 4. Namming Convention Guidelines

#### File and Folder Naming

- **Folders**: Use `kebab-case` for folder names (e.g., `custom-components`, `sanity-schemas`).
- **Files**:
  - Use `PascalCase` for React components (e.g., `CustomButton.tsx`, `PageHeader.tsx`).
  - Use `camelCase` for utility files (e.g., `fetchData.ts`, `formatDate.ts`).

#### Strapi Schema Naming

- Use **camelCase** for component schema names (e.g., `blogPost`, `siteSettings`).
- Use **normalCase** for component display name (e.g., `Blog Post`, `Site Settings`).

#### TypeScript Naming

- Use **PascalCase** for type and interface names (e.g., `UserProfile`, `PageProps`).
- Use `I` as a prefix for interfaces only if it improves clarity (e.g., `IUser`).

#### Variables and Functions

- Use **camelCase** for variables and functions (e.g., `fetchData`, `userProfile`).
- Use **UPPER_SNAKE_CASE** for constants (e.g., `API_BASE_URL`, `MAX_RETRIES`).

---

### 5. Typescript

Define custom app types in `src/app.types.ts`.

Read the Docs here - https://www.typescriptlang.org/
