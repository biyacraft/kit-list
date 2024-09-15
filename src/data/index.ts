import { toolsKit } from "./kits/tools";
import { frontendKit } from "./kits/frontend";
import { backendKit } from "./kits/backend";
import { databaseKit } from "./kits/database";

export const kits = [
  ...toolsKit,
  ...frontendKit,
  ...backendKit,
  ...databaseKit,
];

export function getSections() {
  const categories = Array.from(new Set(kits.flatMap((kit) => kit.tags)));

  
  return categories
    .map((tag) => ({
      tag,
      kits: kits.filter((kit) => kit?.tags?.includes(tag)),
    }))
    .sort((a, b) => b.kits.length - a.kits.length);
}
