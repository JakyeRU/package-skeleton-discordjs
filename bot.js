require('dotenv').config();

const { Client, Collection, Intents } = require('discord.js');
const fs = require('fs');
const client = new Client({
    intents: [Intents.FLAGS.GUILDS]
});

// Sets an empty collection to the client that will be later used to store the commands.
client.commands = new Collection();

// Event Manager - Reads all events from the events folder and listens for them. \\
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
eventFiles.forEach(file => {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
    } else {
        client.on(event.name, (...args) => event.execute(...args, client));
    }
});

// Command Manager - Reads all commands from the commands folder and loads them. \\
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
commandFiles.forEach(file => {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
});

// Shard Manager - Listens for the shardId from the parent process and adds it to the client. \\
process.on('message', message => {
    if (!message.type) return false;

    switch (message.type) {
        case 'shardId': client.shardId = message.data.shardId; process.emit('updateClientActivity');
    }
});

client.login(process.env.DISCORD_AUTH_TOKEN).catch(console.error);
