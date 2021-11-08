require('dotenv').config();
const fs = require('fs');
const { ShardingManager } = require('discord.js');

// Copying .env.example to .env if it doesn't exist.
if (!fs.existsSync('./.env')) {
    fs.copyFileSync('./.env.example', './.env');
    console.error('[ERROR] Please add your Discord bot\'s authentication token to .env.');
    process.exit(1);
}

// Making sure there is a token in .env.
if (!process.env.DISCORD_AUTH_TOKEN) {
    console.error('[ERROR] Please provide a Discord authentication token!');
    process.exit(1);
}

// Creating the sharding manager.
const manager = new ShardingManager('./bot.js', {
    token: process.env.DISCORD_AUTH_TOKEN
});

// Starting the sharding manager.
manager.on('shardCreate', shard => {
    console.log(`[INFO] Launched Shard ${shard.id + 1}.`);

    shard.on('ready', () => {
        shard.send({
            type: 'shardId',
            data: {shardId: shard.id + 1}
        }).catch(console.error);
    })
});

// Attempting to spawn the shards.
manager.spawn().catch(console.error);