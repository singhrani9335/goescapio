const fs = require("fs");
const path = require("path");

const dataDir = path.join(__dirname, "../data");

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  const updated = content.replace(
    /price:\s*"₹?([\d,]+)"/g,
    (_, price) => `price: ${price.replace(/,/g, "")}`
  );

  if (updated !== content) {
    fs.writeFileSync(filePath, updated, "utf8");
    console.log("✔ Updated:", filePath);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith(".ts")) {
      updateFile(fullPath);
    }
  }
}

walk(dataDir);

console.log("\n🎉 All price fields converted successfully.");