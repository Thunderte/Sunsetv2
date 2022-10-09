const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
module.exports = {
    name: 'tapa',
    description: 'Dê um tapa em uma pessoa.',
    options: [
        {
            name: 'usuário',
            description: 'Digite o usuário que você quer bater!',
            type: 6,
            required: true,
        }
    ],
    run: async (client, interaction, args) => {

        let user = interaction.options.getUser('membro')

        const gifs_primeiro = [
            'https://imgur.com/HYJHoG7.gif',
            'https://imgur.com/9GxTsgl.gif',
            'https://imgur.com/mT4VjD6.gif',
            'https://imgur.com/mT4VjD6.gif',
            'https://imgur.com/w66ZqGR.gif'
        ];

        const gifs_segundo = [
            'https://imgur.com/oSoudVd.gif',
            'https://imgur.com/T9w8eFV.gif',
            'https://imgur.com/nuDmQu5.gif',
            'https://imgur.com/wlLCjRo.gif',
            'https://imgur.com/sVeYncu.gif'
        ];

        const random1 = gifs_primeiro[Math.floor(Math.random() * gifs_primeiro.length)];
        const random2 = gifs_segundo[Math.floor(Math.random() * gifs_segundo.length)];

        const embed = new MessageEmbed()
            .setDescription(`**${interaction.user} Deu um tapa em ${user}.**`)
            .setImage(`${random1}`)
            .setColor('RANDOM')

        const button = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('1')
                    .setLabel('Retribuir')
                    .setStyle('PRIMARY')
                    .setDisabled(false)

            )

        const embed1 = new MessageEmbed()
            .setDescription(`**${user} Retribuiu o tapa de ${interaction.user}.**`)
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
