const Discord = require("discord.js")

exports.run = (bot, message, args) => {
  let user = message.mentions.users.first() || bot.users.cache.get(args[0])
  var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if (!membro) return message.reply('🚨 | O Comando  nao é assim digite .help para saber mais.``')
  if (membro === message.member) return message.reply(`🚨 | Desculpe, mas você não tem permissão para isso.`)

  var motivo = args.slice(1).join(" ");
  if (!motivo) return message.channel.send(`🚨 | Motivo inválido.`)
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`🚨 | Desculpe, mas você não tem permissão para isso.`)
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('🚨 | Desculpe, mas você não tem permissão para isso.')
  if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('🚨 | Desculpe, mas você não tem permissão para isso.')

  message.channel.send(`Para banir o ${user} clique no emoji`).then(msg => {
    msg.react("👍")

    let filtro = (reaction, usuario) => reaction.emoji.name === "👍" && usuario.id === message.author.id;
    let coletor = msg.createReactionCollector(filtro, {max: 1})

    coletor.on("collect", cp => {
      cp.remove(message.author.id); {
        let embed = new Discord.MessageEmbed()
            .setTitle('Usuário Banido')
            .setColor('#FFD6FD')
            .setTimestamp()
            .setImage('https://media.discordapp.net/attachments/929125716094746624/1008910760837128212/ffNIOXi.png')
            .addFields(
                {
                  name: "``Informações do Banimento:``",
                  value: `**Usuário banido**: ${membro} \n **Motivo**: ${motivo} \n **Banido por**: ${message.author.username}`
                }
            )
        message.channel.send(embed);
      }
      membro.ban();
    })
  })
}