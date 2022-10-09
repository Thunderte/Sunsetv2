const {MessageEmbed, Modal, TextInputComponent, Message, Client, MessageActionRow, ActionRowBuilder, TextInputBuilder, ModalBuilder, MessageButton} = require('discord.js');
const Discord = require('discord.js');
module.exports = {
    name: "teste",
    description: 'teste',
    options: [],  run: async (client, interaction) => {
        const modal = new Modal()
            .setTitle('teste')
            .setCustomId('rer')

        const nome = new TextInputComponent()
            .setCustomId('teste')
            .setLabel('gfgdfgdg')
            .setPlaceholder('Discord')
            .setStyle("SHORT")
            .setRequired(true)
            .setValue('hgfhjfh')

        const nome2 = new TextInputComponent()
            .setCustomId('teste324')
            .setLabel('gfgdfgdg')
            .setPlaceholder('Discord')
            .setStyle("PARAGRAPH")
            .setRequired(true)

        const row = new MessageActionRow()
            .addComponents(nome);


        const row2 = new MessageActionRow()
            .addComponents(nome2);

        modal.addComponents(row, row2)

        await interaction.showModal(modal)


    }
}