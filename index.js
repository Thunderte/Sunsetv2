const fs = require('fs');
const { Client, Message, MessageEmbed, Collection} = require('discord.js');
const client = new Client({ intents: 32767 });
const SimplDB = require('simpl.db');
const db = new SimplDB();
const { REST } = require('@discordjs/rest');
const { Routes } = require("discord-api-types/v10");
const config = require("./config.json")
client.config = config;
global.client = client;


client.commands = (global.commands = []);

fs.readdir("./SlashCommands/", (err, files) => {
    if (err) throw err;

    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./SlashCommands/${file}`);

        client.commands.push({
            name: props.name.toLowerCase(),
            description: props.description,
            options: props.options,
            type: props.type,
        })
        console.log(`[SLASH COMMAND] - ${props.name} iniciado`);
    });
});

client.commandss = new Collection();
fs.readdir("./comandos/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./comandos/${file}`);
        let commandName = file.split(".")[0];
        console.log(`[COMMAND] - ${commandName} iniciado`);
        client.commandss.set(commandName, props);
    });
});

fs.readdir("./events/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];

        console.log(`Evento Iniciado: ${eventName}`);
        client.on(eventName, (...args) => {
            event(client, ...args);
        });
    });
});

client.on("ready", async () => {

    console.log("[STATUS] - Online");
    client.user.setActivity("Sunset BOT", { type: "PLAYING" });
    const rest = new REST({ version: "10" }).setToken(config.token);
    try {
        await rest.put(Routes.applicationCommands(client.user.id), {
            body: commands,
        });

    } catch (error) {
        console.error(error);
    }
});

client.login(config.token);