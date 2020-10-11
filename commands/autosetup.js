const botconfig = require("../botconfig.json");

module.exports.run = async (_bot, message) => {
    message.guild.channels
        .create(`${botconfig["channel-name"]}`, {
            type: 'text',
        })
        .then((channel) => {
            const categoryID = message.channel.parentID
            channel.setParent(categoryID)
            message.channel.send(`✅ **| Successfully setted chat bot in <#${channel.id}>**`)
        })
}

module.exports.help = {
    name: "autosetup",
    aliases: ["auto-setup"]
}