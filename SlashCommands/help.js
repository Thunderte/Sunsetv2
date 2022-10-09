const {MessageActionRow, MessageButton, MessageEmbed} = require("discord.js");
const Discord = require("discord.js");

module.exports = {
    name: "help",
    description: 'Veja meus comandos',
    options: [],
    run: async (client, interaction) => {

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId("slash")
                    .setStyle("SECONDARY")
                    .setLabel("Slash")
                    .setEmoji(`🔗`)
                    .setDisabled(false),
                new MessageButton()
                    .setCustomId("normal")
                    .setStyle("SECONDARY")
                    .setLabel("Prefixo")
                    .setEmoji(`💬`)
            )





        const embed = new MessageEmbed()//na dm bem obvio
            .setTitle(`Painel Comandos`)
            .setColor([255,182,193])
            .setDescription(`Escolha nos botões qual comando você quer ver!`)

        interaction.channel.send({embeds: [embed], components: [row], ephemeral: true}).then(escolha => {

            const iFilter = i => i.user.id === interaction.user.id;

            const coletor = escolha.createMessageComponentCollector({
                filter: iFilter,
                time: 10 * 60000
            })
            coletor.on('collect', async (i) => {
                switch(i.customId){
                    case 'slash' :
                        const embed2 = new MessageEmbed()
                            .setTitle('Comandos Slash')
                            .setDescription('Siga a lista abaixo de comandos slash!')
                            .addFields({name: 'Abraçar', value:'Dá um abraço em alguém', inline: true},
                                {name: 'Tapa', value:'Dá um tapa em alguém', inline: true},
                                {name: 'Beijar', value:'Dá um beijo em alguém', inline: true},
                                {name: 'Avatar', value:'Ver o avatar de alguém', inline: true},
                                {name: 'Banner', value:'Ver o banner de alguém', inline: true},
                                {name: 'Ping', value:'Ver a latência do BOT', inline: true})
                            .setColor('ORANGE')
                        interaction.channel.send({embeds: [embed2], components: [row]})
                        break;
                    case `normal`:
                        const embed4 = new MessageEmbed()
                            .setTitle('Comandos Prefixo')
                            .setDescription('Siga a lista abaixo de comandos prefixo!')
                            .addFields({name: 'Abraçar', value:'Dá um abraço em alguém', inline: true},
                                {name: 'Tapa', value:'Dá um tapa em alguém', inline: true},
                                {name: 'Beijar', value:'Dá um beijo em alguém', inline: true},
                                {name: 'Avatar', value:'Ver o avatar de alguém', inline: true},
                                {name: 'Banner', value:'Ver o banner de alguém', inline: true},
                                {name: 'Ping', value:'Ver a latência do BOT', inline: true},
                                {name: 'Embed', value:'Mandar uma embed a um chat específico', inline: true},
                                {name: 'Embeddm', value:"Mandar uma embed para dm's max: 10 ", inline: true},
                                {name: 'Servericon', value:"Ver o icone do servidor", inline: true},
                                {name: 'Warn', value:"Alertar um usuário", inline: true},
                                {name: 'Say', value:"Fazer o BOT falar uma frase", inline: true},
                                {name: 'Mute', value:"Mutar alguém", inline: true},
                                {name: 'Clear', value:"Limpar o chat", inline: true},
                                {name: 'Addemoji', value:"Adicionar um emoji ao servidor", inline: true},
                                {name: 'Ban', value:"Banir um usuário", inline: true},
                                {name: 'Akinator', value:"Jogar Akinator", inline: true})
                            .setColor('ORANGE')
                        interaction.channel.send({embeds: [embed4], components: [row], ephemeral: true})
                        break;
                }
            })
        })
    }}

