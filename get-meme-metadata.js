import fs from "fs";
import sizeOf from "image-size";
import fetch from "node-fetch";

const memes = JSON.parse(fs.readFileSync("memes.json"));

async function getSize(url) {
  const arrayBuffer = await fetch(url).then(r => r.arrayBuffer());
  const buffer = Buffer.from(arrayBuffer);
  const { width, height } = sizeOf(buffer);
  return { width, height };
}

async function main() {
  const out = {};

  for (let url of memes) {
    try {
      out[url] = await getSize(url);
    } catch (e) {
      out[url] = { error: true };
    }
  }

  fs.writeFileSync("memes-metadata.json", JSON.stringify(out, null, 2));
}

main();
