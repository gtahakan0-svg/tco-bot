const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('ready', () => {
  console.log(`Botunuz aktif: ${client.user.tag}!`);
});

client.on('messageCreate', message => {
  if (message.content === '!merhaba') {
    message.reply('Aleykümselam, bot çalışıyor!');
  }
});

// Buraya kendi bot token'ınızı yazacaksınız
client.login('BURAYA_BOTUNUN_TOKENINI_YAZ');