const { Client } = require('discord.js');

module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`Logged in as ${client.user.tag}!`);
        client.user.setPresence({
            activities: [
                {
                    name: 'https://github.com/JakyeRU/package-skeleton-discordjs',
                    type: 'PLAYING'
                }
            ],
            status: 'online'
        });
    }
}