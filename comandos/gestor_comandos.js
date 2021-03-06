const embed = require("./embed")
module.exports = async function (msg) {
    // Separa todos os argumentos da mensagem recebida
    // com o delimitador " " (espaço)
    let argumentos = msg.content.split(" ");

    let comando = argumentos.shift();
    if (comando.charAt(0) == "!") {
        // É um comando válido
        comando = comando.substring(1);
        console.log("Comando recebido: " + comando);

        if (comando == "ping")
            msg.reply("Pong!");
        if (comando == "ola")
            msg.reply("Olá " + msg.author.username + "!");
        if (comando == "embed")
            msg.channel.send({ embeds: [embed] });

        // Como usamos o shift, não vamos ter o primeiro argumento
        // console.log(argumentos);

        /*
        switch (comando) {
            case "ping": 
                msg.reply("Pong!");
                break;
            case "ola":
                msg.channel.send("Olá " + msg.author.username + "!");
                break;
            case "embed":
                msg.channel.send({ embeds: [embed] });
                break;
            default: break;
        }
        */
    }
}