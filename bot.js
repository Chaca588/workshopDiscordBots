console.log('Loading...')

// configuração do ficheiro .env
require('dotenv').config();
const debug = process.env.DEBUG == "TRUE" ? true : false;
const token = process.env.TOKEN;

const { Client, Intents } = require('discord.js');

const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILDS);
myIntents.add(Intents.FLAGS.GUILD_MESSAGES);
myIntents.add(Intents.FLAGS.GUILD_MESSAGE_REACTIONS);

const client = new Client({ intents: myIntents });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.channels.cache.get("865386786414264355").send("Estou aqui!");
});

// Quando alguma mensagem for criada em qualquer 
// canal a que o bot tenha acesso
client.on('messageCreate', async msg => {
  if (msg.channelId == "865386786414264355" && !msg.author.bot)
    msg.channel.send("Está no canal certo");

  if (msg.content == "ping") {
    msg.channel.send("Pong!");
    msg.reply("Pong reply!")

    msg.react('🙂')
  }
});

// "Ligar" o Bot!
client.login(token);