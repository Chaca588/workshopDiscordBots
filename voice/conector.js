var connection = null;

const {
    entersState,
    VoiceConnectionStatus,
    joinVoiceChannel,
} = require('@discordjs/voice');

module.exports.join = async function join(msg, channel) {
    if (channel != null) {
        connection = joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        });
        try {
            await entersState(connection, VoiceConnectionStatus.Ready, 10e3);
            console.log("Connected!")
            return connection;
        } catch (error) {
            connection.destroy();
            console.log("Connection died.");
        }
    } else {
        if (msg != null)
            msg.reply('You need to join a voice channel first!');
        connection = null;
    }
    return connection;
};

module.exports.disconnect = disconnect;
function disconnect() {
    if (connection != null)
        connection.destroy();
};