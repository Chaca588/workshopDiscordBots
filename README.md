
## Workshop Discord Bots

NPM - Node Package Manager

```python
#Criar um projeto
npm init

#Instalar Discord.js no projeto
npm install discord.js
```

Autenticação do Bot

https://discord.com/developers

Application -> New Application -> Bot

Para convidar o bot é preciso definir as premissões que ele vai precisar em todos os servidors.

Application -> New Application -> OAuth2 -> URL Generator

## Environment Variables

```bash
touch .env
```

Ficheiro `.env`
```py
TOKEN=*token*

DEBUG=TRUE
```

## Bot

index.js
```js
// configuração do ficheiro .env
require('dotenv').config();
const debug = process.env.DEBUG == "TRUE" ? true : false;

const token = process.env.TOKEN;

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login(token);
```

