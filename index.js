require('dotenv').config();
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log("Discord bot online")

    const Channel = client.channels.cache.get(process.env.ID_CHANNEL);
    if (!Channel) return console.error("Couldn't find the channel.");
    Channel.send("Hi, it works!").catch(e => console.log(e));
});

client.login(process.env.TOKEN);