function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
let token = "YOUR_TOKEN";
let prefix = ">";
let BotVersion = "Test Bot";


client.on('ready', () => {
    //client.channels.cache.get(`630995793670701065`).send(`Ready...`)
    console.log(`Logged in as ${client.user.tag}!`);
    //	client.channels.cache.get(`630995793670701065`).send(`Logged in as ${client.user.tag}!`)
    client.user.setActivity("Los Santos");
});

client.login(token);
