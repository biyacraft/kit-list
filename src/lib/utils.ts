import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isImageUrl(url?: string): boolean {
  if (!url || typeof url !== 'string') {
    return false; // or throw an error as needed
  }

  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'];

  const isDataUri = url.startsWith('data:image/');
  
  const isImageExtension = imageExtensions.includes(url.substring(url.lastIndexOf('.')).toLowerCase()) || url.endsWith('.svg');

  return isDataUri || isImageExtension;
}

export function generateNameAbbr(name: string): string {
  const firstCharRegex = /[\p{L}]/u;

  const match = name.match(firstCharRegex);

  return match ? match[0].toUpperCase() : '';
}
