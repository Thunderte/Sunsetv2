var Discord = require('discord.js');
 
exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('⚔ | Você não pode utilizar esse comando!');
 
    var user = msg.mentions.users.first() || msg.guild.members.cache.get(args[0]);
    if(!user) return msg.reply('⚠ | Você precisa mencionar alguém');
 
    var member;
 
    try {
        member = await msg.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }
 
    if(!member) return msg.reply('⚠ | O usuário não está no server!');
 
    var reason = args.splice(1).join(' ');
    if(!reason) return msg.reply('⚠ | Você precisa dar um motivo!');
 
    var channel = msg.guild.channels.cache.find(c => c.id === '1008866596422434906');
 
    var log = new Discord.MessageEmbed()
    .setColor('#FFD6FD')
    .setTitle('✅ | Usuário notificado!')
    .addField('Usuario:', user, true)
    .addField('Por:', msg.author, true)
    .addField('Motivo:', reason)
    channel.send(log);
 
    var embed = new Discord.MessageEmbed()
    .setTitle('🔴 | Você levou um aviso!')
    .setDescription(reason);
 
    try {
        user.send(embed);
    } catch(err) {
        console.warn(err);
    }
 
    msg.channel.send(`**${user}** foi avisado(a) por **${msg.author}**!`);
}