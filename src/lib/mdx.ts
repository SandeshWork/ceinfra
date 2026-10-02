import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

export async function renderMdx(source: string) {
  const code = await compile(source, { outputFormat: "function-body" });
  const { default: Content } = await run(code, runtime as Parameters<typeof run>[1]);
  return Content;
}
