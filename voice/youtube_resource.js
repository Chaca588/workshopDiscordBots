const connector = require("./conector").join

const {
    getVoiceConnection, createAudioPlayer, AudioPlayerStatus, createAudioResource,
} = require('@discordjs/voice');
const ytdl = require('ytdl-core');
const YTDL_PRESET = { filter: 'audioonly', quality: 'highestaudio' };

const link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"

var player;
module.exports.play = async (connection) => {
    //connection = getVoiceConnection(msg.guildId);

    player = createAudioPlayer({});
    const resource = createAudioResource(ytdl(link, YTDL_PRESET));
    player.play(resource);

    player.on('error', (err) => {
        log.error('PLAYER_ERROR', err);
    });

    const subscription = connection.subscribe(player);
}

module.exports.pause = async () => {
    player.pause();
}

module.exports.resume = async () => {
    player.unpause();
}


const disconnect = require("./conector").disconnect;
module.exports.stop = async () => {
    try {
        player.stop();
    }
    catch {
        console.log("No player found!")
    }
    finally{
        disconnect();
    }
}

