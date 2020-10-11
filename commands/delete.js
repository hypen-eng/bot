const botconfig = require("../botconfig.json");

module.exports.run = async (_bot, message) => {
    const channel = message.guild.channels.cache.find(ch => ch.name === `${botconfig["channel-name"]}`)
        if(!channel) return message.channel.send(`❌ **| There is no channel named \`${botconfig["channel-name"]}\`**`);
        channel.delete();
      message.channel.send(`✅ **| Successfully deleted chat bot channel!**`)
}

module.exports.help = {
    name: "delete",
    aliases: []
}