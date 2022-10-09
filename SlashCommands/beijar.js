const Discord = require('discord.js')
module.exports = {
    name: 'beijar',
    description: 'Beije uma pessoa.',
    options: [
        {
            name: 'usuário',
            description: 'Digite o usuário que você quer beijar!!',
            type: 6,
            required: true,
        }
    ],
    run: async (client, interaction, args) => {

        let user = interaction.options.getUser('membro')

        var lista1 = [
            'https://imgur.com/II1bakc.gif',
            'https://imgur.com/MzAjNdv.gif',
            'https://imgur.com/eKcWCgS.gif',
            'https://imgur.com/3aX4Qq2.gif',
            'https://imgur.com/uobBW9K.gif'
        ];

        var lista2 = [
            'https://imgur.com/3jzT5g6.gif',
            'https://imgur.com/VrETTlv.gif',
            'https://imgur.com/FozOXkB.gif',
            'https://imgur.com/7GhTplD.gif',
            'https://imgur.com/B6UKulT.gif'
        ];

        var random1 = lista1[Math.floor(Math.random() * lista1.length)];
        var random2 = lista2[Math.floor(Math.random() * lista2.length)];

        const embed = new Discord.MessageEmbed()
            .setDescription(`**${interaction.user} Deu um beijo em ${user}.**`)
            .setImage(`${random1}`)
            .setColor('RANDOM')

        const button = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageButton()
                    .setCustomId('1')
                    .setLabel('Retribuir')
                    .setStyle('PRIMARY')
                    .setDisabled(false)

            )

        const embed1 = new Discord.MessageEmbed()
            .setDescription(`**${user} Retribuiu o beijo de ${interaction.user}.**`)
            .setColor('RANDOM')
            .setImage(`${random2}`)

        interaction.reply({ embeds: [embed], components: [button] }).then(() => {
            const filter = i => i.customId === '1' && i.user.id === user.id;
            const collector = interaction.channel.createMessageComponentCollector({ filter, max: 1 });

            collector.on('collect', async i => {
                if (i.customId === '1') {
                    i.reply({ embeds: [embed1] })
                }
            });
        })
    }
}
