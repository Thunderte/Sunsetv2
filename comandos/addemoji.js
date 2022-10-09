const Discord = require("discord.js");
const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");
const Color = `#FFD6FD`;

module.exports = {
  name: "addemoji",
  category: "Administrators",
  run: async (client, message, args) => {
    
    if (!message.member.permission.has(`MANAGE_EMOJIS`)) {
      return message.channel.send(`Você não pode utilizar este comando!`)
    }
    
    const emoji = args[0];
    if (!emoji) return message.channel.send(`Por favor, me envie o emoji.`);

    let customemoji = Discord.Util.parseEmoji(emoji);

    if (customemoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
        customemoji.animated ? "gif" : "png"
      }`;
      const name = args.slice(1).join(" ");
      message.guild.emojis.create(
        `${Link}`,
        `${name || `${customemoji.name}`}`
      );
      const adicionado = new MessageEmbed()
        .setTitle(`Emoji adicionado com sucesso.`)
        .setColor(`#FFD6FD`)
        .setFooter(`• Comando requisitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
        .setDescription(
          `**Dados do emoji adicionado:**\n
          Nome: ${name || `${customemoji.name}`} \nVisualização: [Clique Aqui](${Link})`
        );

      return message.channel.send({embeds: [adicionado]});
    } else {
      let CheckEmoji = parse(emoji, { assetType: "png" });
      if (!CheckEmoji[0])
        return message.channel.send(`Por favor, envie um emoji válido.`);
      message.channel.send(
        `Você pode usar o emoji normal sem adicionar no servidor!`
      );
    }
  }
};