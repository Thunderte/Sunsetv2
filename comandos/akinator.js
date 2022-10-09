const akinator = require("discord.js-akinator");

module.exports.run = async(client, message, args)=> {

    akinator(message, {
        language: 'pt', // Defaults to "en"
        childMode: false, // Defaults to "false"
        gameType: "character", // Defaults to "character"
        useButtons: true, // Defaults to "false"
        embedColor: "#1F1E33" // Defaults to "Random"
    });
}