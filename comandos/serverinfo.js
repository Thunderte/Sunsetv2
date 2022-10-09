const Discord = require("discord.js"); 
 
exports.run = async (client, message, args) => {
 
    let serverembed = new Discord.MessageEmbed() 
    .setColor("#FFD6FD")
    .setTitle(message.guild.name)
    .addField(":gift: Nome do Servidor", message.guild.name, )
    .addField(":id:  ID do Servidor", message.guild.id, )
    .addField(`:crown:  Dono(a) do Servidor`, `<@${message.guild.ownerID}>`, true)
    .addField(`:pencil:  ID do Autor(a) do Servidor`, message.guild.ownerID, true)
    .addField(':date: Server Criado em', message.guild.createdAt, true)
    .addField(`:closed_lock_with_key: Server Verification Level`, message.guild.verificationLevel, true)
    .addField(':man: Membros', `${message.guild.members.cache.filter(member => member.user.bot).size} BOTS | ${(message.guild.memberCount) - (message.guild.members.cache.filter(member => member.user.bot).size)} Humanos | ${message.guild.memberCount} Total de Membros | ${Math.round((message.guild.members.cache.filter(member => member.user.bot).size / message.guild.memberCount) * 100)}% BOTS | ${Math.round((((message.guild.memberCount) - (message.guild.members.cache.filter(member => member.user.bot).size)) / message.guild.memberCount) * 100)}% Humanos`, true)
    .addField(':wrench:  Canais', `${message.guild.channels.cache.filter(chan => chan.type === 'voice').size} Chats de Voz | ${message.guild.channels.cache.filter(chan => chan.type === 'text').size} Canais de Texto | ${message.guild.channels.cache.filter(chan => chan.type === 'category').size} Categorias | ${Math.round((message.guild.channels.cache.filter(chan => chan.type === 'voice').size / message.guild.channels.cache.size) * 100)}% Chats de Voz | ${Math.round((message.guild.channels.cache.filter(chan => chan.type === 'text').size / message.guild.channels.cache.size) * 100)}% Canais de Texto | ${Math.round((message.guild.channels.cache.filter(chan => chan.type === 'category').size / message.guild.channels.cache.size) * 100)}% Categorias`, true)
    .addField(":inbox_tray:  Você entrou em", message.member.joinedAt)
    .setFooter(`• Autor(a) ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
 
    message.channel.send(serverembed);
 
   message.delete();
 }
