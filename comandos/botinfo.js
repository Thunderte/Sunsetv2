const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#FFD6FD')
    .setTitle(`**Olá! Meu nome é Sunset, mas pode me chamar de Sun**.\nAcompanhe algumas de minhas informações abaixo:`)
    .setThumbnail('https://i.imgur.com/Hi91hT6.png')
    .setTimestamp()
    .setFooter(`Comando requisitado por: ${message.author.username}`)
    .addFields(
        {
            name: 'Nome e #',
            value: `${client.user.tag}`,
            inline: true
        },
        {
            name: 'Servidores:',
            value: `Estou em **${client.guilds.cache.size}** servidores.`,
            inline: true
        },
        {
            name: 'Canais:',
            value: `Gerencio **${client.channels.cache.size}** canais de texto.`,
            inline: true
        },
        {
            name: 'Usuários:',
            value: `Cuido de **${client.users.cache.size}** usuários.`,
            inline: true
        },
        {
            name: 'Meu ping atualmente:',
            value: `**${Math.round(client.ws.ping)}** ms`,
            inline: true
        },
        {
            name: 'Meus criadores:',
            value: 'Natália#5700',
            inline: true
        },
        {
            name: 'Meu servidor:',
            value: 'Sunset Music.',
            inline: true
        },
    )
    message.channel.send(embed);
}