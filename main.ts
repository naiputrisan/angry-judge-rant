import { mkdirSync, writeFileSync } from "node:fs";

const rant =
  "I scanned my milk once. The self-checkout charged me twice, then announced to the whole store: 'UNEXPECTED ITEM IN THE BAGGING AREA.' I am holding one bag of groceries and this machine has already reported me for smuggling a cow. I paid. I bagged. I left. It still looked at me like a criminal with a loyalty card.";

if (rant.length < 1 || rant.length > 400) {
  throw new Error(`rant must be 1-400 characters, got ${rant.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", rant, "utf8");
