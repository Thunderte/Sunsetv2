const Discord = require("discord.js");
const { MessageEmbed ,MessageButton, MessageActionRow, Message} = require('discord.js');

module.exports = {
    name: "punch",
    aliases: ["socar, punch"],
    author: "Patin",

    run: async (client, message, args) => {



        var list = [
            'https://i.imgur.com/SgucUz4.gif',
            'https://i.imgur.com/1Y3Brk6.gif',
            'https://i.imgur.com/X7a3P7S.gif',
            'https://i.imgur.com/GtCrj49.gif',
            'https://i.imgur.com/Dv6e8IO.gif',
            'https://i.imgur.com/UqEE27d.gif',
            'https://i.imgur.com/fPelxaI.gif',
            'https://i.imgur.com/SuWOmed.gif',
            'https://i.imgur.com/itKkIhd.gif'
        ];

        var list1 = [
            'https://i.imgur.com/SgucUz4.gif',
            'https://i.imgur.com/1Y3Brk6.gif',
            'https://i.imgur.com/X7a3P7S.gif',
            'https://i.imgur.com/GtCrj49.gif',
            'https://i.imgur.com/Dv6e8IO.gif',
            'https://i.imgur.com/UqEE27d.gif',
            'https://i.imgur.com/fPelxaI.gif',
            'https://i.imgur.com/SuWOmed.gif',
            'https://i.imgur.com/itKkIhd.gif'
        ];

        var rand = list[Math.floor(Math.random() * list.length)];
        var rand1 = list1[Math.floor(Math.random() *
            list.length)];
        let pessoa = message.mentions.users.first() || client.users.cache.get(args[0]);

        if (!pessoa) return message.channel.send(`🤜 | ${message.author} Mencione alguém para dar um soco!`);

        if (pessoa.id == message.author.id) return message.channel.send(`😑🤛 | ${message.author} você não pode se socar!`);

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId("666")
                    .setStyle("DANGER")
                    .setLabel("Super Soco")
                    .setEmoji(`🤜`)
                    .setDisabled(true)
            )

        let embed = new MessageEmbed()
            .setTitle(`🥊 soco 🥊`)
            .setDescription(`🤜 ${message.author} deu um mega soco em ${pessoa}!`)
            .setImage(rand)
            .setTimestamp()
            .setColor("RANDOM")
            .setThumbnail(message.author.displayAvatarURL({ format: "png" }))

        const me = await message.channel.send({ embeds: [embed], components: [row], fetchReply: true })

        const filter1 = (message) => {
            if (message.user.id == pessoa) return true;
            else {
                message.channel.send({ content: `🥊 apenas o ${pessoa}  tem permissao de reagir no botão`, ephemeral: true })
            }
        }
    }
}