exports.run = async (bot, msg, args) => {
  msg.channel
    .send(
      'Lien vers les issues de GitHub : https://github.com/gCKn/djpon-bot/issues (se supprime automatiquement après 20 secondes).'
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
  name: 'suggest',
  description:
    'Commande renvoyant vers les suggestions/issues de GitHub (si vous avez une suggestion concernant le bot).',
  usage: 'suggest'
};
