exports.run = async (bot, msg) => {
  msg.channel.send(
    `= Commandes fun =\n
= Snippets par Alex =\n
Commande cat :: https://gist.github.com/gCKn/1c939f9992434a7ce2252e7ca7fb12be
Commande dog :: https://gist.github.com/gCKn/278c836283b53ddd800beffbb50564a3
Commande ask :: https://gist.github.com/gCKn/08dd4aee851ba27b25e9d2aca49bc4d1
Système d'expérience :: https://gist.github.com/gCKn/c3cbdd55e61e3bf3bf9dd1a3999cdbe5
Système de monnaie :: https://gist.github.com/gCKn/5ac523a14be8d15d856b1411958f17c8\n
= Snippets par Kam3leøN =\n
Commande chuck :: https://gist.github.com/gCKn/c8cdd95e24b324c835c717922fe468ae
Commande clope :: https://gist.github.com/gCKn/5147bc15961f06cacca5346f2834dd32
Commande ascii :: https://gist.github.com/gCKn/fb7fddf10255837e9bdc19ffc6e82589\n
= Snippets par Spokloo =\n
Commande google :: https://gist.github.com/gCKn/32ed100fb42e7e8ca6ad385f484883aa  
Commande youtube :: https://gist.github.com/gCKn/2fe512c37e9f0969352c4baf5631889a
Commande wiki :: https://gist.github.com/gCKn/50ea679ad20c086b77563aa168a6b0fb
Commande manga :: https://gist.github.com/gCKn/ecf4a34d9e4aee0eb07dafdb51813c31
Commande anime :: https://gist.github.com/gCKn/53048e8b77b18fd0c133e5ec9ea33f39\n
= Snippets par vugi99 =\n
Commande fight :: https://gist.github.com/gCKn/b7f5552870ab827022021449d60fe516
Commande choose :: https://gist.github.com/gCKn/7ca7a3754b701704c36c8841175c62ba
Commande deviner :: https://gist.github.com/gCKn/d410e3a992b5651cf19560b42cc67b34`,
    { code: "asciidoc" }
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "snfun",
  description:
    "Commande pour renvoyer toutes les commandes fun créaient jusque maintenant.",
  usage: "snfun"
};
