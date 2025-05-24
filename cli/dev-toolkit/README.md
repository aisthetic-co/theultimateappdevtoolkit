# Dev Toolkit CLI

The **Dev Toolkit CLI** is a command-line tool designed to scaffold starter templates for backend and frontend projects. It simplifies the process of setting up new projects by cloning predefined templates from a repository.

## Usage

Run the CLI tool:

```bash
npx aidevtoolkit
```

Follow the prompts to:

1. Choose Template

```bash
? Which template do you want to use? (Use arrow keys)
❯ Backend (Nodejs)
  Frontend (Nextjs)
```

2. Provide a name for your project.

```bash
✔ What is the name of your project? test
```

3. The tool will clone the selected template and set up your project.

```bash
[INFO] Cloning Frontend (Nextjs)...

[INFO] Project cloned successfully!

[INFO] Please go through readme file for further instructions. https://github.com/aisthetic-co/theultimateappdevtoolkit/blob/main/frontend/nextjs/README.md
```

## Add new Template

### Update the CLI config

To add more templates, update the `templateConfig` array in `index.js`:

```javascript
const templateConfig = [
  {
    name: "Backend (Nodejs)",
    key: "nodejs",
    subDir: "backend/node",
    readmeFile:
      "https://github.com/aisthetic-co/theultimateappdevtoolkit/blob/main/backend/node/README.md",
  },
  {
    name: "Frontend (Nextjs)",
    key: "nextjs",
    subDir: "frontend/nextjs",
    readmeFile:
      "https://github.com/aisthetic-co/theultimateappdevtoolkit/blob/main/frontend/nextjs/README.md",
  },
  // Add more templates here...
];
```

## Publishing to npm

To publish the **Dev Toolkit CLI** to npm, follow these steps:

1. **Update the version number** in `package.json`.

2. **Login to npm** (if not already logged in):

   ```bash
   npm login
   ```

3. **Publish the package**:

   ```bash
   npm publish
   ```

4. **Test the package**:

   ```bash
   npx aidevtoolkit
   ```
