const TeleBot = require('telebot');
const bot = new TeleBot('6178164329:AAEUH0EE167BC-bSzKWV6pigeTZ78J4KleY');

// On every text message
bot.on('text', msg => {
    let id = msg.from.id;
    let text = msg.text;
    return bot.sendMessage(id, `You saiddddd: ${text}`);
});

bot.connect();
