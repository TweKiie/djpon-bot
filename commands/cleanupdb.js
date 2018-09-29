exports.run = async (bot, message) => {
  const filtered = bot.points.filter(p => p.guild === message.guild.id);
  const rightNow = new Date();
  const toRemove = filtered.filter(data => {
    return (
      !message.guild.members.has(data.user) ||
      rightNow - 2592000000 > data.lastSeen
    );
  });
  toRemove.forEach(data => {
    bot.points.delete(`${message.guild.id}-${data.user}`);
  });
  message.channel.send(`J'ai nettoyé ${toRemove.size} anciens membres.`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: "cleanupdb",
  description:
    "Nettoyer la base de données des utilisateurs n'ayant pas parlé depuis 1 mois.",
  usage: "cleanupdb"
};
