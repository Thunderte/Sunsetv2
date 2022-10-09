const { MessageEmbed, Client, CommandInteraction, MessageActionRow, MessageButton } = require("discord.js");
const axios = require("axios");
const SimplDB = require('simpl.db');
const db = new SimplDB({});
// Obtém a data/hora atual
var data = new Date();

// Puxando horários
var dia     = data.getDate();
var mes     = data.getMonth();
var ano4    = data.getFullYear();       // 4 dígitos
var hora    = data.getHours();          // 0-23
var min     = data.getMinutes();        // 0-59
var seg     = data.getSeconds();        // 0-59
module.exports = {
    name: "setpainel",
    description: 'Setar um canal para o painel',
    options: [
        {
            name: "canal",
            description: "Defina o canal",
            type: 7,
            required: true,
        }
    ],
    run: async (client, interaction) => {
        const option = interaction.options.get("canal")
        const channel = String(option.value)


        db.set(`id_msg_praca5`, channel)
        console.log(channel)
    }
}