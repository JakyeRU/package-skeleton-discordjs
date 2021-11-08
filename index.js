require('dotenv').config();
const fs = require('fs');
const { ShardingManager } = require('discord.js');

if (!fs.existsSync('./.env')) {
    fs.copyFileSync('./.env.example', './.env');
    console.error('Please add your Discord bot\'s authentication token to .env.');
    process.exit(1);
}

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