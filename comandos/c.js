const {MessageActionRow, MessageEmbed, MessageButton} = require('discord.js')
module.exports = {
    name: "say", // Coloque o nome do comando do arquivo
    aliases: ["s"], // Coloque sinônimos aqui

    run: async (client, message, args) => {

        if (!message.member.permissions.has("MANAGE_MESSAGES")) {
            message.reply(`Você não possui permissão para utilizar este comando.`)
        } else {
            let fala = args.slice(0).join(" ");
            if (!fala) {
                let embed = new MessageEmbed()
                    .setDescription(`\`!say [frase]\``)
                    .setColor("RANDOM");

                message.reply({embeds: [embed]})
            } else {
                let embed2 = new MessageEmbed()
                    .setColor("RANDOM")
                    .setDescription(`Olá ${message.author}, você deseja enviar sua mensagem em qual formato?`);

                let botoes = new MessageActionRow()
                    .addComponents(
                        new MessageButton()
                            .setStyle("SECONDARY")
                            .setLabel("Embed")
                            .setCustomId("embed"),
                        new MessageButton()
                            .setStyle("SECONDARY")
                            .setLabel("Chat")
                            .setCustomId("hh")
                    );

                message.channel.send({
                    content: `${message.author}`,
                    embeds: [embed2],
                    components: [botoes]
                }).then(m_4 => {

                    const iFilter = i => i.user.id === message.author.id;

                    const collector = m_4.createMessageComponentCollector({
                        filter: iFilter,
                        time: 10 * 60000
                    });
                    collector.on('collect', async (i) => {

                        i.deferUpdate()
                        switch (i.customId) {

                            case `hh`:
                                message.delete();
                                m_4.delete();
                                message.channel.send(fala);
                                break;
                            case `embed`:
                                message.delete();
                                m_4.delete();
                                const embedfala = new MessageEmbed()
                                    .setDescription(fala)
                                    .setColor('RANDOM')
                                message.channel.send({embeds: [embedfala]})
                        }
                    })
                })
            }
        }
    }
}

