require("dotenv").config();
const ftp = require("basic-ftp");
const fs = require("fs");
const path = require("path");

async function deploy() {
  const client = new ftp.Client();
  client.ftp.verbose = true;

  try {
    await client.access({
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
      secure: false,
    });

    console.log("Connected to FTP");

    await client.cd("public_html");

    console.log("Removing old files...");
    await client.clearWorkingDir();

    console.log("Uploading new site...");
    await uploadDir(client, path.join(__dirname, "out"));

    console.log("✅ Deployment complete!");
  } catch (err) {
    console.error("❌ FTP error:", err);
  }

  client.close();
}

async function uploadDir(client, localDir) {
  const items = fs.readdirSync(localDir);
  for (const item of items) {
    const fullPath = path.join(localDir, item);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      await client.ensureDir(item);
      await client.cd(item);
      await uploadDir(client, fullPath);
      await client.cdup();
    } else {
      await client.uploadFrom(fullPath, item);
    }
  }
}

deploy();
