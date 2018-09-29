exports.run = async (bot, msg) => {
  msg.channel
    .send(
      "Lien vers la playlist : https://www.youtube.com/watch?v=8GOqJmGwQPM&index=2&list=PLuWyq_EO5_AKv7cA_PLUFlVMpSwueUSCG (se supprime automatiquement après 20 secondes)."
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
  name: "playlist",
  description: "Commande renvoyant la playlist Discord de YouTube.",
  usage: "playlist"
};
