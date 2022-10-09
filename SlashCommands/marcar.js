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
    name: "marcar",
    description: 'Marcar experiência em alguma praça',
    options: [
        {
            name: "tickets",
            description: "Defina o quanto de tickets você vai usar",
            type: 4,
            required: true,
        },
        {
            name: "posição",
            description: "Degite a posição que você está!",
            type: 3,
            required: true
        }
    ],
    run: async (client, interaction) => {
        const interactionUser = await interaction.guild.members.fetch(interaction.user.id)
        console.log(interactionUser.id)
        const option = interaction.options.get("tickets")
        const option2 = interaction.options.get("posição")
        var str_hora = hora + ':' + min + ':' + seg;
        var str_data = dia + '/' + (mes + 1) + '/' + ano4;
        db.delete(`piso5_praça1_${String(option2.value)}`)
        const puxar_ticket = db.fetch(`${str_data}_${interaction.user}`)
        const puxar_disp = db.fetch(`piso5_praça1_${String(option2.value)}`)
        if (interaction.channel.id = '887509876010537021') {
            if (!puxar_ticket) {
                db.set(`${str_data}_${interaction.user}`, 5);

            }
            if(puxar_ticket <= 0){
                interaction.reply(`Seus tickets de hoje acabaram`)
            }
            if (String(option.value) > puxar_ticket) {
                interaction.reply(`Você tem ${puxar_ticket} tickets e tentou usar ${String(option.value)} tickets!`)

            }
            console.log(`${interaction.user}`, puxar_ticket - String(option.value))
            //confirma embed
            const row2 = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('aceito')
                        .setLabel('')
                        .setEmoji('✅')
                        .setStyle('SUCCESS'),
                    new MessageButton()
                        .setCustomId('recuso')
                        .setLabel('')
                        .setEmoji('❌')
                        .setStyle('SECONDARY'),
                );
                if (!puxar_disp) {
                            db.set(`${str_data}_${interaction.user}`, puxar_ticket - String(option.value));
                            db.set(`piso5_praça1_direito`, interactionUser.user.username)

                            const puxar_dnv = db.fetch(`piso5_praça1_direito`)


                            let lado = db.fetch(`piso5_praça1_${String(option2)}`)
                            console.log(lado)
                            const embed = new MessageEmbed()
                                .setTitle('Confirmar marcação')
                                .setDescription(`${puxar_ticket} Você realmente quer marcar ${String(option.value)} tickets na posicão ${puxar_dnv}`)
                                .setColor('RANDOM')
                            interaction.reply({embeds: [embed], components: [row2]})
                        }
                else if(puxar_disp) {
                    interaction.reply(`Já existe um usuário no lado ${String(option.value)} ${puxar_disp}`)
                }

            }
        }
    }
