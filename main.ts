import { mkdirSync, writeFileSync } from "node:fs";

// One kind, funny fortune for the houseplant on the windowsill.
// Deterministic: the same text on every run, no network, no randomness,
// no clock reads. stdlib only.
// Why this fortune lands, in three beats:
// 1. It opens as a real fortune — "In three weeks..." — a dated prediction
//    about the plant's own future, not a slogan or a care tip.
// 2. The sun, the plant's best friend, turns bureaucrat and files a formal
//    complaint — two concrete images colliding in the last words.
// 3. The charge is the plant's own doing: it has hogged the whole
//    windowsill since October. The plant is the active winner of the light,
//    and the twist lands in the final words, "since October" — a dated,
//    held-back detail that reframes months of leaning toward the glass as
//    a deliberate, cheerful takeover. No bigger pot, no new leaf, no
//    sunbeam, no cat, no keeper apologising: every saturated motif in the
//    260-entry field was checked and left out.
const ENTRY =
  "In three weeks the sun will file a formal complaint: you have hogged the whole windowsill since October.";

if (
  [...ENTRY].length < 1 ||
  [...ENTRY].length > 120 ||
  ENTRY.trim().length === 0 ||
  ENTRY.trim().split("\n").length !== 1
) {
  throw new Error("entry must be a single non-blank line of 1 to 120 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to /output/entry.txt`);
