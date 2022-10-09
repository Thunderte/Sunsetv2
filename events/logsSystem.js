client.on("messageDelete", async (message) => {

    if (message.author.bot) return;

    let user1 = message.author;
    let channel2 = message.channel;
    let msgDelete = message.content;

    let embed = new Discord.MessageEmbed()
        .setTitle(`🗑 Mensagem excluída`)
        .setColor('#FDDD7F')
        .addFields(
            {
                name: `Autor da mensagem:`,
                value: `${user1}`,
                inline: false,
            },

        )
        .addFields(
            {
                name: `Canal:`,
                value: `${channel2}`,
                inline: false,
            },
        )
        .addFields(
            {
                name: `Mensagem:`,
                value: `\`\`\`${msgDelete}\`\`\``,
                inline: false,
            }
        )
        .setTimestamp()
        .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL({ dynamic: true })})
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }));

    try {
const channel = message.guild.channels.cache.get('1008866596422434906');
        channel.send({ embeds: [embed] })

    } catch (e) { }
});

client.on("messageUpdate", async (oldMessage, newMessage) => {

    if (newMessage.author.bot) return;

    let user1 = newMessage.author;
    let channel2 = newMessage.channel;
    let msgAntiga = oldMessage.content;
    let msgUpdate = newMessage.content;

    let embed = new Discord.MessageEmbed()
        .setTitle(`📝 Mensagem Editada`)
        .setColor('#FDDD7F')
        .addFields(
            {
                name: `Autor da mensagem:`,
                value: `${user1}`,
                inline: false,
            },

        )
        .addFields(
            {
                name: `Canal:`,
                value: `${channel2}`,
                inline: false,
            },
        )
        .addFields(
            {
                name: `Mensagem:`,
                value: `\`\`\`${msgAntiga}\`\`\``,
                inline: false,
            },
            {
                name: `Mensagem editada:`,
                value: `\`\`\`${msgUpdate}\`\`\``,
                inline: false,
            }
        )
        .setTimestamp()
        .setFooter({ text: `${newMessage.guild.name}`, iconURL: newMessage.guild.iconURL({ dynamic: true })})
        .setThumbnail(newMessage.author.displayAvatarURL({ dynamic: true }));

    try {
        const channel = newMessage.guild.channels.cache.get('1008866596422434906');
        channel.send({ embeds: [embed] })

    } catch (e) { }
});