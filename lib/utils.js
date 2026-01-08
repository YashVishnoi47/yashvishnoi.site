import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const handleMouseMove = (e) => {
  setPos({
    x: e.clientX,
    y: e.clientY,
  });
};
