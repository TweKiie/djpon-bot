exports.run = async (bot, msg, args) => {
  msg.channel.send(
    `= Commande de modération =\n
= Snippets par Alex =\n
Date française :: https://gist.github.com/gCKn/4c88c5ed62efc05eb268f3927648c422
Commande kick :: https://gist.github.com/gCKn/76ca9b356489f20aa73c3586504b37fa\n
= Snippets par Kam3leøN =\n
Séparer bot et humain :: https://gist.github.com/gCKn/1a4d53f3a312b9cc57b1496bae6d5ab9\n
= Snippets par Mehmet =\n
Commande unmute :: https://gist.github.com/gCKn/b133724da63a4c2f408b9c09d95010d8\n
= Snippets par vugi99 =\n
Commande raidmode :: https://gist.github.com/gCKn/7c150b39f608e307b836f0a0c4fd3a59`,
    { code: 'asciidoc' }
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'snmod',
  description:
    'Commande pour renvoyer toutes les commandes de modération créaient jusque maintenant.',
  usage: 'snmod'
};
