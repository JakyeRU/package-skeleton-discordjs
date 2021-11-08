require('dotenv').config();
const { ShardingManager } = require('discord.js');

if (!process.env.DISCORD_AUTH_TOKEN) {
    console.error('[ERROR] Please provide a Discord authentication token!');
    process.exit(1);
}

const manager = new ShardingManager('./bot.js', {
    token: process.env.DISCORD_AUTH_TOKEN
});

manager.on('shardCreate', shard => {
    console.log(`[INFO] Launched Shard ${shard.id + 1}.`);

    shard.on('ready', () => {
        shard.send({
            type: 'shardId',
            data: {shardId: shard.id + 1}
        }).catch(console.error);
    })
});

manager.spawn().catch(console.error);