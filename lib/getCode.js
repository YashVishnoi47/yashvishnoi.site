"use server";
import fs from "fs";
import path from "path";

export const getComponentCode = async (filePath) => {
  const fullPath = path.join(process.cwd(), filePath);

  return fs.readFileSync(fullPath, "utf8");
};
