const { Telegraf, Context } = require('telegraf');

const bot = new Telegraf(`8466487482:AAGPPTSAecG7WP6SC99RTiJOPft5awij02g`);

bot.start((ctx) => ctx.reply('Welcome to the new coding bot from Gaurav'));
