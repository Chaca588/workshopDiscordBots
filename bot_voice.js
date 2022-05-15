console.log('Loading...')

// configuração do ficheiro .env
require('dotenv').config();
const debug = process.env.DEBUG == "TRUE" ? true : false;
const token = process.env.TOKEN;

const { Client, Intents } = require('discord.js');

const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILDS);
myIntents.add(Intents.FLAGS.GUILD_VOICE_STATES);
myIntents.add(Intents.FLAGS.GUILD_MESSAGES);
myIntents.add(Intents.FLAGS.GUILD_MESSAGE_REACTIONS);

const client = new Client({ intents: myIntents });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const joinVoice = require("./voice/conector").join;
const leaveVoice = require("./voice/conector").disconnect;

const ytPlayer = require("./voice/youtube_resource");

var connection;
client.on('messageCreate', async msg => {
    if (!msg.author.bot) {
        switch (msg.content) {
            case "!join":
                connection = await joinVoice(msg, msg.member.voice.channel);
                break;
            case "!leave":
                leaveVoice();
                break;
            case "!tocar":
                if (!connection) {
                    console.log("There is no connection: " + connection)
                    break;
                }
                ytPlayer.play(connection)
                break;
            case "!pause":
                ytPlayer.pause();
                break;
            case "!resume":
                ytPlayer.resume();
                break;
            case "!stop":
                ytPlayer.stop(connection);
                break;
            default:
                break;
        }
    }

    //console.log(msg.member.voice.channel)
});

client.login(token);