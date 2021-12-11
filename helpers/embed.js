const { MessageEmbed } = require('discord.js');

module.exports = class Embed {
    constructor() {
        this.messages = {
            'NOT_ENOUGH_PERMISSIONS': 'You do not have enough permissions to run this command.',
            'NOT_BOUND': 'This command is not bound to a JavaScript file yet.'
        };
    }

    /**
     * @param { String= } message
     * @constructor
     */
    error(message) {
        const embed = new MessageEmbed();
        embed.setColor(0xff8080);
        embed.setDescription(message ? message : 'Something went wrong.');

        if (this.messages[message]) {
            embed.setDescription(this.messages[message]);
        }

        return embed;
    }

    /**
     * @param { String= } message
     * @constructor
     */
    success(message) {
        const embed = new MessageEmbed();
        embed.setColor(0x80ff80);
        embed.setDescription(message ? message : 'Task completed successfully.');

        return embed;
    }

    /**
     * @param { String= } message
     * @constructor
     */
    loading(message) {
        const embed = new MessageEmbed();
        embed.setColor("#FFFF65");
        embed.setDescription(message ? message : 'Loading... Please wait.');

        return embed;
    }
};
