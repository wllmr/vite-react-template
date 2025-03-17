import "dotenv/config";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

if (process.env.SKIP_POSTINSTALL === "true") {
  process.exit(0);
}

const projectDir = process.cwd();
const projectName = path.basename(projectDir);

function toTitleCase(str) {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Remove folders
const foldersToDelete = [".git"];

const deleteFolder = (folderPath) => {
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
  }
};

foldersToDelete.forEach((file) => {
  deleteFolder(path.join(process.cwd(), file));
});

// Replace texts in files
const filesToModify = [
  "package.json",
  "index.html",
  "src/App.tsx",
  "src/App.test.tsx",
  "README.md",
];

const textsToReplace = [
  ["vite-react-template", projectName],
  ["Vite React Template", toTitleCase(projectName)],
];

const replaceInFile = (filePath, placeholder, replacement) => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, "utf8");
    content = content.split(placeholder).join(replacement);
    fs.writeFileSync(filePath, content, "utf8");
  }
};

filesToModify.forEach((file) => {
  textsToReplace.forEach(([oldText, newText]) =>
    replaceInFile(path.join(projectDir, file), oldText, newText),
  );
});

// Clean up README.md
const readmePath = path.join(projectDir, "README.md");

if (fs.existsSync(readmePath)) {
  let content = fs.readFileSync(readmePath, "utf8");

  const index = content.indexOf("## **How to Use This Template**");

  if (index !== -1) {
    content = content.substring(0, index).trim() + "\n";
    fs.writeFileSync(readmePath, content, "utf8");
  }
}

// Remove postinstall script from package.json
const packageJsonPath = path.join(projectDir, "package.json");

if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

  if (packageJson.scripts && packageJson.scripts.postinstall) {
    delete packageJson.scripts.postinstall;
    fs.writeFileSync(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2) + "\n",
      "utf8",
    );
  }
}

// Delete setup.mjs itself
const setupPath = fileURLToPath(import.meta.url);
fs.unlink(setupPath, (err) => {
  if (err) {
    console.error("Failed to delete setup.mjs:", err);
  }
});
