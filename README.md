# **Vite React Template 🚀**

This is a **Vite + React + TypeScript** template with best practices for **development, linting, formatting, testing, and automation**.

---

## **Available Scripts**

| Command         | Description                                                    |
| --------------- | -------------------------------------------------------------- |
| `dev`           | Starts the Vite development server.                            |
| `preview`       | Serves the production build locally using Vite's preview mode. |
| `build`         | Builds the project with Vite.                                  |
| `lint`          | Runs ESLint to check for code quality issues.                  |
| `format`        | Formats the codebase using Prettier.                           |
| `test`          | Runs all tests using Vitest.                                   |
| `test:node`     | Runs and listens to node tests using Vitest.                   |
| `test:dom`      | Runs and listens to jsdom tests using Vitest.                  |
| `test:cov`      | Runs tests with coverage reporting.                            |
| `test:cov:view` | Open coverage reports.                                         |
| `prepare`       | Initializes Husky for Git hooks.                               |

---

## **How to Use This Template**

You can use this template in **three different ways**. Pick your poison.

---

### **1. Using Bun**

If you have **Bun installed**, you can create a new project using:

```sh
bun create wllmr/vite-react-template my-app
```

---

### **2. Using Vite CLI**

You can use **Vite's built-in create command** to set up the project:

```sh
npm create vite@latest my-app --template wllmr/vite-react-template \
&& cd my-app \
&& npm install
```

---

### **3. Using Git Commands (Manual Setup)**

If you don't want to use **Bun** or **Vite CLI**, you can manually clone the template using **Git**:

```sh
git clone https://github.com/wllmr/vite-react-template my-app \
&& cd my-app \
&& npm install
```
