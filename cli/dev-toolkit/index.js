#!/usr/bin/env node

import { input, select } from "@inquirer/prompts";
import { execa } from "execa";
import fs from "fs";
import path from "path";
import chalk from 'chalk';

const log = console.log;
const repositoryURL = "https://github.com/aisthetic-co/theultimateappdevtoolkit.git"

const templateConfig = [
    {
        name: "Backend (Nodejs)",
        key: "nodejs",
        subDir: "backend/node",
        readmeFile: "https://github.com/aisthetic-co/theultimateappdevtoolkit/blob/main/backend/node/README.md"
    },
    {
        name: "Frontend (Nextjs)",
        key: "nextjs",
        subDir: "frontend/nextjs",
        readmeFile: "https://github.com/aisthetic-co/theultimateappdevtoolkit/blob/main/frontend/nextjs/README.md"
    }
    // Add more templates here...
];

const run = async () => {
    log(chalk.blue("Welcome to the Ultimate App Dev Toolkit!\n"));

    //  Get template from user
    const templateKey = await select({
        message: "Which template do you want to use?",
        choices: templateConfig.map(config => {
            return { name: config.name, value: config.key }
        })
    });

    // Get template config
    const selectedTemplate = templateConfig.find((template) => template.key === templateKey);

    // Get project name from user
    const projectName = await input({
        message: "What is the name of your project?",
        default: "my-project"
    });

    // Clone the repository
    log(chalk.blue("\n" + chalk.green("[INFO]") + " Cloning " + chalk.yellow(selectedTemplate?.name) + "..."));
    const tmpDir = `.tmp - ${Date.now()}`;
    await execa("git", ["clone", repositoryURL, tmpDir]);
    fs.cpSync(path.join(tmpDir, selectedTemplate.subDir), projectName, {
        recursive: true,
    });
    fs.rmSync(tmpDir, { recursive: true, force: true });

    log("\n" + chalk.blue(chalk.green("[INFO]") + " Project cloned successfully!"));
    log("\n" + chalk.blue(chalk.green("[INFO]") + " Please go through readme file for further instructions." + chalk.underline.yellow(` ${selectedTemplate.readmeFile}`)));
}

try {
    await run();
} catch (error) {
    log("\n" + chalk.blue(chalk.red("[ERROR]") + " An error occurred while creating the project."));
    log("\n" + chalk.blue(chalk.red("[ERROR]") + " Error: " + error));

    console.log(error)
}