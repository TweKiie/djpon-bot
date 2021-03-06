const Discord = require("discord.js");

exports.run = async (bot, msg, args) => {
  const kickedUser = msg.guild.member(
    msg.mentions.users.first() || msg.guild.members.get(args[0])
  );
  const kickReason = args.join(" ").slice(22);
  if (kickedUser.hasPermission("MANAGE_MESSAGES"))
    return msg.channel.send("Vous ne pouvez pas kicker cette personne !");

  const kickEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#dc143c")
    .addField("Utilisateur kické", `${kickedUser} (ID: ${kickedUser.id})`)
    .addField("Utilisateur ayant kické", `${msg.author} (ID: ${msg.author.id})`)
    .addField("Channel", msg.channel)
    .addField("Raison", kickReason);

  const kickChannel = msg.guild.channels.find("name", "me");

  msg.guild
    .member(kickedUser)
    .kick(kickReason)
    .then(msg => msg.delete(5000));
  kickChannel.send(kickEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: "kick",
  description: "Commande pour renvoyer un utilisateur de votre serveur.",
  usage: "kick <@pseudo> <raison>"
};
