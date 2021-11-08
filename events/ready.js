module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        // Listens for the updateClientActivity event and updates the client presence.
        process.once('updateClientActivity', () => {
            console.log(`[INFO] Connected to Discord as ${client.user.tag} on Shard ${client.shardId}.`);

            client.user.setPresence({
                activities: [
                    {
                        name: `on Shard ${client.shardId} - https://github.com/JakyeRU/package-skeleton-discordjs`,
                        type: 'PLAYING'
                    }
                ],
                status: 'online'
            });
        });
    }
}