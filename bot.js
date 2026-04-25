// Waguri Kaoruko Telegram Bot
const TelegramBot = require('node-telegram-bot-api');
const fetch = require('node-fetch');
const fs = require('fs').promises;

// Environment variables (Pterodactyl-friendly)
const TOKEN = process.env.BOT_TOKEN || 'YOUR_BOT_TOKEN_HERE';
const OWNER_ID = process.env.OWNER_ID ? parseInt(process.env.OWNER_ID) : 8058995701;

// ---- rest of the bot code stays the same ----
// (Copy the full bot.js from the previous message, but replace
//  the TOKEN and OWNER_ID lines with the ones above.)
