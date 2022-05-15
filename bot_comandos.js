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
});

const gestor_comandos = require("./comandos/gestor_comandos");
client.on('messageCreate', async msg => {
    if (msg.channelId == "865386786414264355" && !msg.author.bot)
        gestor_comandos(msg);
});

client.login(token);