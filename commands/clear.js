exports.run = async (bot, msg, args) => {
  msg.channel.bulkDelete(args[0]).then(() => {
    msg.channel
      .send(`J'ai suppprimé ***${args[0]} messages*** pour vous !`)
      .then(msg => msg.delete(5000));
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: "clear",
  description: "Commande pour nettoyer un nombre de messages spécifiés.",
  usage: "clear"
};
