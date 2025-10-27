// src/lib/utils.js
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple Tailwind class names into one string.
 * Handles conditional classes and merges duplicates intelligently.
 */
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}
