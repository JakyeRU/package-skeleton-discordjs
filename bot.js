require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client({
    intents: ['GUILDS']
});

client.login(process.env.DISCORD_AUTH_TOKEN);