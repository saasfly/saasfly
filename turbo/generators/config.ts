import { execSync } from "node:child_process";
import type { PlopTypes } from "@turbo/gen";
const rootPath = process.cwd();
export default function generator(plop: PlopTypes.NodePlopAPI): void {
    plop.setGenerator("init", {
        description: "Generate a new package for the  Monorepo",
        prompts: [
            {
                type: "input",
                name: "name",
                message:
                    "What is the name of the package? ",
            }
        ],
        actions: [
            (answers) => {
                if ("name" in answers && typeof answers.name === "string") {
                    if (answers.name.startsWith("@saasfly/")) {
                        answers.name = answers.name.replace("@saasfly/", "");
                    }
                }
                return "Config sanitized";
            },
            {
                type: "add",
                path: rootPath+"/packages/{{ name }}/package.json",
                templateFile: "templates/package.json.hbs",
            },
            {
                type: "add",
                path: rootPath+"/packages/{{ name }}/tsconfig.json",
                templateFile: "templates/tsconfig.json.hbs",
            },
            {
                type: "add",
                path: rootPath+"/packages/{{ name }}/index.ts",
                template: "export * from './src';",
            },
            {
                type: "add",
                path: rootPath+"/packages/{{ name }}/src/index.ts",
                template: "export const name = '{{ name }}';",
            }
        ],
    });
}
