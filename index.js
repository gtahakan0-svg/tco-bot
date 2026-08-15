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

client.login('MTUzODAxNTgyNDYyMTYwNDkyNA.G2QTyr.wOm6o7sM2sNMkdc6Axg1CbEKoFeBMP83PXlDD8');
