# 🤖 Telegram Coding Bot

A simple **Telegram Bot built using Node.js and Telegraf** that sends coding examples on command.
This bot currently provides a **Binary Search algorithm example** and reacts to stickers.

---

## 🚀 Features

* `/start` command to welcome users
* `/binarysearch` command to send Binary Search code
* Responds with ❤️ when a user sends a sticker
* Built using **Node.js** and **Telegraf framework**

---

## 🛠️ Technologies Used

* Node.js
* Telegraf (Telegram Bot Framework)
* JavaScript

---

## 📂 Project Structure

```
project-folder
│
├── index.js          # Main bot file
├── package.json
└── README.md
```

---

## ⚙️ Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/telegram-coding-bot.git
```

2. Navigate to the project folder

```bash
cd telegram-coding-bot
```

3. Install dependencies

```bash
npm install telegraf
```

---

## 🔑 Setup Telegram Bot

1. Open Telegram
2. Search **@BotFather**
3. Create a new bot using:

```
/newbot
```

4. Copy the **Bot Token** provided by BotFather.

5. Replace the token in your code:

```javascript
const bot = new Telegraf("YOUR_BOT_TOKEN");
```

---

## ▶️ Run the Bot

Start the bot using:

```bash
node bot.js
```

If everything is correct, your bot will start running.

---

## 💻 Commands

| Command         | Description              |
| --------------- | ------------------------ |
| `/start`        | Welcome message          |
| `/binarysearch` | Sends Binary Search code |
| Send Sticker    | Bot replies with ❤️      |

---

## 📘 Binary Search Algorithm

The bot sends a **recursive binary search implementation** written in JavaScript.

Binary Search works by:

* Dividing the sorted array into halves
* Comparing the middle element with the target
* Searching either the left or right half

Time Complexity:

```
O(log n)
```

---

## 🎯 Future Improvements

* Add more coding algorithms
* Add `/help` command
* Format code in Telegram using Markdown
* Add multiple programming language examples

---

## 👨‍💻 Author

**Gaurav Telange**
Backend Developer Enthusiast

---

⭐ If you like this project, consider giving it a star on GitHub!
