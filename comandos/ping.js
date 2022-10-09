const { MessageEmbed, Client, CommandInteraction, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    run: async (client, message, async) => {
        const embed = new MessageEmbed()
            .setTitle(":ping_pong: Latências")
            .setDescription(`Ping do Bot: ${client.ws.ping}ms!`)

        if (client.ws.ping < 60) embed.setColor("GREEN")
        else if (client.ws.ping > 60 && client.ws.ping < 120) embed.setColor("YELLOW")
        else if (client.ws.ping > 120) embed.setColor("RED")


        message.channel.send({ embeds: [embed] });

    }
}