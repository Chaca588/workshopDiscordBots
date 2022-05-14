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

client.on('messageCreate', async msg => {
    if(msg.content=="ping"){
        msg.channel.send("Pong!");
        msg.reply("Pong replay!")


        msg.react(client.emojis.cache.find(emoji => emoji.name === "smile"))

      }
});

client.login(token);