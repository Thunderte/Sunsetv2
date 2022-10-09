const { MessageEmbed, Client, CommandInteraction, MessageActionRow, MessageButton } = require("discord.js");
const axios = require("axios");
const SimplDB = require('simpl.db');
const db = new SimplDB({});
// Obtém a data/hora atual
var data = new Date();

// Guarda cada pedaço em uma variável
var dia     = data.getDate();
var mes     = data.getMonth();
var ano4    = data.getFullYear();       // 4 dígitos
var hora    = data.getHours();          // 0-23
var min     = data.getMinutes();        // 0-59
var seg     = data.getSeconds();        // 0-59
module.exports = {
    name: "tickets",
    description: 'pegar tickets',
    options: [
        {
            name: "tickets",
            description: "pegar",
            type: 4,
            required: false,
        }
        ],
    run: async (client, interaction) => {

            var str_data = dia + '/' + (mes + 1) + '/' + ano4;

            db.set(`${str_data}_${interaction.user}`, 10000);

        }

}
