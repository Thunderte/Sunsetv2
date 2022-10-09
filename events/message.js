module.exports = (client, message) => {

    if (message.author.bot) return;

    if (message.content.indexOf(client.config.prefix) !== 0) return;

    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commandss.get(command);
if(!cmd){
    message.reply(`Esse comando não existe, execute o comando help para saber todos!`)
}
else if(cmd) {
    cmd.run(client, message, args);
}
};