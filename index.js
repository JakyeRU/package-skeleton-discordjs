require('dotenv').config();
const { ShardingManager } = require('discord.js');

const manager = new ShardingManager('./bot.js', {
    token: process.env.DISCORD_AUTH_TOKEN
});

manager.on('shardCreate', shard => {
    console.log(`Launched shard ${shard.id + 1}.`);
});

manager.spawn().catch(console.error);