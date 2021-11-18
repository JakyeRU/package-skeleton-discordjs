// deploy-commands.js is used to deploy the commands in the commands folder to Discord.

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');
const configuration = require('./configuration.json');
const prompt = require('prompt-sync')();
require('dotenv').config();

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

let globalDeploy = false;

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

// --------------------------------------------------------------------------------------------------------------------- \\
if (!configuration.DISCORD_CLIENT_ID) {
    console.error(`[ERROR] The DISCORD_CLIENT_ID variable is not set in configuration.json.`)
    process.exit(1);
}

if (prompt('Do you want to deploy the commands globally? If yes, type "YES", otherwise don\'t type anything: ').toLowerCase() === 'yes') globalDeploy = true;

if (!globalDeploy) {
    if (!configuration.DISCORD_TESTING_GUILD_ID) {
        console.error(`[ERROR] Cannot deploy the commands to a server because the DISCORD_TESTING_GUILD_ID variable is not set in configuration.json.`)
        process.exit(1);
    }
}

const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_AUTH_TOKEN);
(async () => {
    try {
        console.log('[INFO] Started deploying application (/) commands.');

        if (globalDeploy) {
            await rest.put(Routes.applicationCommands(configuration.DISCORD_CLIENT_ID),{ body: commands });
            console.log('[INFO] Successfully deployed application (/) commands globally.');
        } else {
            await rest.put(Routes.applicationGuildCommands(configuration.DISCORD_CLIENT_ID, configuration.DISCORD_TESTING_GUILD_ID),{ body: commands });
            console.log(`[INFO] Successfully deployed application (/) commands to guild ${configuration.DISCORD_TESTING_GUILD_ID}.`);
        }

    } catch (error) {
        console.error(`[ERROR] ${error.message}`);
    }
})();