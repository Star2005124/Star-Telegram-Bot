const CONFIG_PATH = './config.json';
const defaultConfig = require('./config.js');  // ← new

let config = { ...defaultConfig };  // start with defaults

async function loadConfig() {
  try {
    const data = await fs.readFile(CONFIG_PATH, 'utf8');
    // Merge stored values with defaults (in case new fields are added in future)
    config = { ...defaultConfig, ...JSON.parse(data) };
  } catch {
    // file doesn't exist, create it using defaults from config.js
    await saveConfig();
  }
}

async function saveConfig() {
  await fs.writeFile(CONFIG_PATH, JSON.stringify(config, null, 2));
}