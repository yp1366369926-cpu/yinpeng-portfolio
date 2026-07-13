import { readdir, rm, stat } from "node:fs/promises";
import { join } from "node:path";

const rootAssets = "dist/client/assets";
const legacyAssets = "dist/client/legacy/assets";

async function removeDuplicates(directory, relative = "") {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const nextRelative = join(relative, entry.name);
    const rootPath = join(rootAssets, nextRelative);
    const legacyPath = join(legacyAssets, nextRelative);
    if (entry.isDirectory()) {
      await removeDuplicates(rootPath, nextRelative);
      continue;
    }
    try {
      const legacyStat = await stat(legacyPath);
      const rootStat = await stat(rootPath);
      if (rootStat.size === legacyStat.size) await rm(rootPath);
    } catch {
      // Keep assets that are unique to the Vinext shell.
    }
  }
}

await removeDuplicates(rootAssets);
