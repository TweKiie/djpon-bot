exports.run = async (bot, msg) => {
  msg.channel
    .send(
      "Lien vers le bot : https://github.com/gCKn/djpon-bot (se supprime automatiquement après 20 secondes)."
    )
    .then(msg => msg.delete(20000));
  msg.delete();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "bot",
  description: "Commande pour renvoyer le lien vers le code source du bot.",
  usage: "bot"
};
