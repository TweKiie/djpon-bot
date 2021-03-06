const Discord = require("discord.js");

exports.run = async (bot, msg, args) => {
  const bannedUser = msg.guild.member(
    msg.mentions.users.first() || msg.guild.members.get(args[0])
  );
  const banReason = args.join(" ").slice(22);
  if (bannedUser.hasPermission("MANAGE_MESSAGES"))
    return msg.channel.send("Vous ne pouvez pas ban cette personne !");

  const kickEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#dc143c")
    .addField("Utilisateur banni", `${bannedUser} (ID: ${bannedUser.id})`, true)
    .addField(
      "Utilisateur ayant ban",
      `${msg.author} (ID: ${msg.author.id})`,
      true
    )
    .addField("Channel", msg.channel)
    .addField("Raison", banReason);

  const banChannel = msg.guild.channels.find("name", "me");

  msg.guild
    .member(bannedUser)
    .ban(banReason)
    .then(msg => msg.delete(5000));
  banChannel.send(kickEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: "ban",
  description: "Commande pour bannir un utilisateur de votre serveur.",
  usage: "ban <@pseudo> <raison>"
};
