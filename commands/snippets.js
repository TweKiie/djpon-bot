exports.run = async (bot, msg, args) => {
  msg.channel.send(
    `= Snippets par Alex =\n
Commande kick :: https://gist.github.com/ringmatthew/9f7bbfd102003963f9be7dbcf7d40e51\n
= Snippets par Kam3leøN =\n
Commande kick :: https://gist.github.com/ringmatthew/9f7bbfd102003963f9be7dbcf7d40e51`,
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
  name: 'snippets',
  description:
    'Commande pour renvoyer tous les snippets créaient jusque maintenant.',
  usage: 'snippets'
};
