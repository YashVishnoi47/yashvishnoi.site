import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// import fs from "fs";
// import path from "path";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getTimeAgo = (date) => {
  const diff = Date.now() - new Date(date).getTime();

  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (minutes < 1) return "just now";

  if (minutes < 60) {
    return `${minutes} min ago`;
  }

  if (hours < 24) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  }

  return `${days} ${days === 1 ? "day" : "days"} ago`;
};

export const easing = [0.19, 1, 0.22, 1];

// export const GetCode = () => {
//   const filePath = path.join(process.cwd(), "components", "MyComponent.jsx");

//   const code = fs.readFileSync(filePath, "utf-8");

//   return code;
// };
