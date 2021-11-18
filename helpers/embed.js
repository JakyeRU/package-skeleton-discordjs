const { MessageEmbed } = require('discord.js');

module.exports = class Embed {
    constructor() {
        this.embed = new MessageEmbed();

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
        this.embed.setColor(0xff8080);
        this.embed.setDescription(message ? message : 'Something went wrong.');

        if (this.messages[message]) {
            this.embed.setDescription(this.messages[message]);
        }

        return this.embed;
    }

    /**
     * @param { String= } message
     * @constructor
     */
    success(message) {
        this.embed.setColor(0x80ff80);
        this.embed.setDescription(message ? message : 'Task completed successfully.');

        return this.embed;
    }

    /**
     * @param { String= } message
     * @constructor
     */
    loading(message) {
        this.embed.setColor("#FFFF65");
        this.embed.setDescription(message ? message : 'Loading... Please wait.');

        return this.embed;
    }
};