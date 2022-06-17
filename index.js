require('dotenv').config();
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log("Discord bot online")

    const Channel = client.channels.cache.get(process.env.ID_CHANNEL);
    if (!Channel) return console.error("Couldn't find the channel.");
    Channel.send("Hi, Emile!").catch(e => console.log(e));

    setInterval((function () {
        return process.exit(0);
      }), 120)
});

process.on('exit', function (code) {
    return console.log(`${new Date()} [INFO] About to exit with code ${code}`);
  });

client.login(process.env.TOKEN);