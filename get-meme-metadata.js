import fs from "fs";
import sizeOf from "image-size";
import fetch from "node-fetch";

let memes = JSON.parse(fs.readFileSync("memes.json"));
memes = memes.map(memeUrl => {

  // Reddit media link handling
  if (memeUrl.startsWith("https://www.reddit.com/media?url=")) {
    const queryString = memeUrl.split("?")[1];
    const params = {};

    queryString.split("&").forEach(pair => {
      const [key, value] = pair.split("=");
      params[key] = value;
    });

    if (params.url) {
      memeUrl = decodeURIComponent(params.url);
    }
  }

  // Prepend missing protocols
  if (!memeUrl.startsWith("http://") && !memeUrl.startsWith("https://") && !memeUrl.startsWith("Count")) {
    if (memeUrl.startsWith("memes/")) {
      memeUrl = "https://raw.githubusercontent.com/Parzival1209/random-meme-api/refs/heads/main/" + memeUrl;
    } else {
      memeUrl = "https://" + memeUrl;
    }
  }

  return memeUrl;
});

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
