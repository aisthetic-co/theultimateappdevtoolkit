# Next.js + Sanity CMS Starter

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app) and integrated with [Sanity V3](https://www.sanity.io/docs). It provides a robust foundation for building modern, scalable, and content-driven web applications.

## Tech Stack

- **Next.js 15**: A React framework for building server-rendered and statically generated web applications.
- **Sanity V3**: A headless CMS for managing structured content.
- **TypeScript**: For type-safe development.
- **Tailwind CSS**: For utility-first styling.
- **Vercel**: For deployment and hosting.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or later)
- npm, yarn, pnpm, or bun (choose one package manager)
- A Sanity.io account

### Setup Guide

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/next-sanity-starter.git
   cd next-sanity-starter
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up Sanity CMS:

   - Navigate to the `sanity` directory:
     ```bash
     cd sanity
     ```
   - Install Sanity CLI:
     ```bash
     npm install -g @sanity/cli
     ```
   - Initialize Sanity:
     ```bash
     sanity init
     ```
   - Follow the prompts to configure your Sanity project.

4. Add environment variables:

   - Create a `.env.local` file in the root directory:
     ```bash
     touch .env.local
     ```
   - Add the following variables:
     ```
     NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
     NEXT_PUBLIC_SANITY_DATASET=your_dataset
     ```

5. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Folder Structure

```
.
├── sanity/               # Sanity CMS configuration and schemas
├── pages/                # Next.js pages
│   ├── api/              # API routes
│   └── index.tsx         # Home page
├── components/           # Reusable React components
├── styles/               # Global and component-specific styles
├── utils/                # Utility functions
├── public/               # Static assets
├── .env.local            # Environment variables
└── README.md             # Project documentation
```

## Features Included

- **Sanity CMS Integration**: Manage content dynamically using Sanity.
- **Dynamic Routing**: Build pages dynamically based on CMS data.
- **TypeScript Support**: Ensure type safety across the project.
- **Tailwind CSS**: Style components with ease.
- **API Routes**: Extend functionality with serverless functions.
- **SEO Optimization**: Pre-configured for better search engine visibility.

## Development Guidelines

### Sanity CMS

- Define schemas in the `sanity/schemas` directory.
- Use GROQ queries to fetch data from Sanity.
- Update environment variables if the project ID or dataset changes.

### Components

- Place reusable components in the `components/` directory.
- Follow the atomic design principle for better scalability.

### Pages

- Use the `pages/` directory for routing.
- Dynamic routes should be defined using the `[param].tsx` convention.

### Styling

- Use Tailwind CSS for styling.
- Add global styles in `styles/globals.css`.

### API Routes

- Define serverless functions in the `pages/api/` directory.
- Use these routes for backend logic, such as form submissions or data processing.

### Deployment

- Deploy the app on [Vercel](https://vercel.com).
- Ensure the `.env.local` file is updated with production credentials.

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
