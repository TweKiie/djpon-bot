exports.run = async (bot, msg, args) => {
  number = 78;
  imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
  msg.channel.send({ files: ['./images/' + imageNumber + '.gif'] });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'poney',
  description: 'Commande pour renvoyer une image de poney aléatoire.',
  usage: 'poney'
};
