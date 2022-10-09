const {MessageEmbed, Message, Client, MessageActionRow, MessageButton} = require('discord.js');

module.exports = {
  run: async (client, message, args) => {
      let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
      const row = new MessageActionRow()
          .addComponents(
              new MessageButton()
                  .setLabel('Avatar')
                  .setURL(`${user.user.avatarURL()}`)
                  .setStyle('LINK')
          )
        let avatar = new MessageEmbed()
        .setColor("#FFD6FD")
        .setTitle(`Foto de perfil do(a) ${user.user.username}`)
        .setImage(user.user.avatarURL({ dynamic: true, size: 2048 }))
        message.channel.send({embeds: [avatar], components: [row]})

      
  } 
} 