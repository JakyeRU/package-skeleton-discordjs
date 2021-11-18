const { Client, CommandInteraction } = require("discord.js");
const Embed = require('../helpers/embed');
const embed = new Embed();
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
    execute(interaction, client) {
        // Making sure the interaction is a command interaction.
        if (!interaction.isCommand()) return false;

        // Making sure the command is bound to a file.
        if (!client.commands.has(interaction.commandName)) {
            interaction.reply({
                embeds: [embed.error('NOT_BOUND')],
                ephemeral: true
            }).catch(console.error);
            return false;
        }

        // Getting the command file.
        const command = client.commands.get(interaction.commandName);

        // Executing the command.
        command.execute(interaction).catch(console.error);
    }
}