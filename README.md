# 🤖 Waguri Kaoruko – Telegram Bot

A feature‑packed, aesthetic Telegram bot with **20 interactive features**, an animated inline menu, and a powerful owner‑configuration system.

---

## ✨ Features (20)

### Inline menu
| # | Feature          | Description                                   |
|---|------------------|-----------------------------------------------|
| 1 | 🏓 Ping          | Quick latency check                           |
| 2 | 🕒 Time          | Current server date & time                    |
| 3 | 😂 Joke          | Random programming/general joke               |
| 4 | 💬 Quote         | Random inspirational quote                    |
| 5 | 🐱 Cat           | Random cat picture                            |
| 6 | 🐶 Dog           | Random dog photo                              |
| 7 | 🤔 Fact          | Random useless fact                           |
| 8 | 🔢 Number Fact   | Random number fact                            |
| 9 | 💡 Advice        | Piece of random advice                        |
|10 | 🥋 Chuck Norris   | Chuck Norris joke                             |
|11 | 🖼 Meme           | Random meme from Reddit                       |
|12 | 📖 Dictionary     | Define a word (`/dict <word>`)                |
|13 | 🧮 Calculator     | Evaluate math (`/calc 2+3*4`)                 |
|14 | 🌐 Translate      | Translate text (`/translate es Hello`)        |
|15 | 🆔 ID Info        | Show your Telegram ID details                |
|16 | 🏷 Sticker ID     | Get file ID of any sticker                   |
|17 | 🎨 Random Color   | Generate random hex color                     |
|18 | 🪙 Coin Flip      | Heads or tails                                |
|19 | 🎲 Dice Roll      | Roll a 6‑sided die                            |
|20 | 🗣 Echo           | Repeat any message you send                   |

---

## 👑 Owner Commands (prefix configurable)

| Command                    | Description                                      |
|----------------------------|--------------------------------------------------|
| `/menu`                    | Open the interactive feature menu                |
| `/start`                   | Welcome message with a quick menu button         |
| `/settings`                | View current bot configuration                   |
| `/setmenuimage <url>`      | Set an image for the menu header                 |
| `/setbotname <name>`       | Change the bot’s display name                    |
| `/setownername <name>`     | Set the owner’s name                             |
| `/setownernumber <number>` | Set the owner’s contact number                   |
| `/setprefix <symbol>`      | Change the command prefix (default `/`)          |
| `/weather <city>`          | Quick weather check (via wttr.in)                |

---

## 🚀 Installation

### 🔸 Prerequisites
- [Node.js](https://nodejs.org) v16 or higher
- A Telegram bot token from [@BotFather](https://t.me/botfather)
- (For hosting) A [Pterodactyl panel](https://pterodactyl.io/) or any Node.js host

---

### 💻 Run locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/waguri-kaoruko-bot.git
   cd waguri-kaoruko-bot
