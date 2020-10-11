const botconfig = require("../botconfig.json");

module.exports.run = async (client, message) => {
  owners = [`${botconfig.owners}`]
  if (!owners.includes(message.author.id)) return;
  client.guilds.cache.forEach((guild) => {
    message.channel.send(
      `I am in **${guild.name}** which has a total of **${guild.memberCount}** members`
    )
  })
}

module.exports.help = {
  name: "serverlist",
  aliases: ["servers-list", "sl"]
}