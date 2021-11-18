const {Client, CommandInteraction} = require("discord.js");
/**
 * Listens for the interactionCreate event and tries to respond to the interaction.
 * @type {{once: boolean, name: string, execute(*, *)}}
 */
module.exports = {
    name: 'interactionCreate',
    once: false,
    /**
     * Executes the interactionCreate event.
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */
    execute(client, interaction) {

    }
}