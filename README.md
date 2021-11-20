[comment]: <> (# package-skeleton-discordjs)

[comment]: <> (A skeleton repository for Discord.js projects.)

<p align="center">
    <a href="https://github.com/JakyeRU/package-skeleton-discordjs" target="_blank">
        <img src="https://raw.githubusercontent.com/JakyeRU/package-skeleton-discordjs/main/logo/package-skeleton-discordjs-logos_white.png" height=400>
    </a>
</p>

<p align="center">
    <img src="https://img.shields.io/github/v/release/jakyeru/package-skeleton-discordjs?color=red&style=for-the-badge" alt="release">
    <img src="https://img.shields.io/npm/v/discord.js?color=5865f2&label=discord.js&style=for-the-badge" alt="discord.js">
</p>

# About package-skeleton-discordjs
package-skeleton-discordjs is a template that uses the latest [discord.js](https://github.com/discordjs/discord.js) version to create a discord.js project in minutes without the hassle of creating each file individually.

# Features
- slash commands support;
- sharding support;
- uses the latest discord.js version;
- deploy slash commands easy using `npm run deploy`
- deploying in minutes;
- ready for production;

# Installation
### Step 1: Create a new repository using this template.
Press the green button "Use this template" or [click here](https://github.com/JakyeRU/package-skeleton-discordjs/generate).

### Step 2: Download your newly created repository and install the dependencies.
After downloading your repository, you need to install the dependencies. At the root directory of your project, run the following command:
```bash
npm install
```

### Step 3: Copy .env.example to .env and update the values.
> DISCORD_AUTH_TOKEN= <> (Your Discord bot token)

### Step 4: Run the bot.
At the root directory of your project, run the following command:
```bash
npm start
```

Your bot is now running and ready to use.

# About configuration.json
`DISCORD_CLIENT_ID` - This is the client id of your Discord bot. _You shouldn't worry about setting it manually as we will automatically set it for you._
`DISCORD_TESTING_GUILD_ID` - This is the id of the guild where [guild slash commands](https://discordjs.guide/interactions/registering-slash-commands.html#guild-commands) will be registered.

### Why do I need a testing guild?
> Global commands are cached for one hour. New global commands will fan out slowly across all guilds and will only be guaranteed to be updated after an hour. Guild commands update instantly. As such, we recommend you use guild-based commands during development and publish them to global commands when they're ready for public use. ~ https://discordjs.guide