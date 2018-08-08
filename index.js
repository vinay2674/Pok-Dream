const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
console.log(`${bot.user.username} is online!`);
bot.user.setActivity("With Your Heart");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}ping`){
 message.channel.send(":regional_indicator_p: :regional_indicator_o: :regional_indicator_n: :regional_indicator_g::exclamation: ");
 
});

bot.login(process.env.BOT_TOKEN);
