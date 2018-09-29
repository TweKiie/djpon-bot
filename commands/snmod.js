exports.run = async (bot, msg) => {
  msg.channel.send(
    `= Commandes de modération =\n
= Snippets par Alex =\n
Commande addRole :: https://gist.github.com/gCKn/e08efb9f106a1d058ee0abb4272fedf1
Commande removeRole :: https://gist.github.com/gCKn/17e929db7c00fc1207400256129f8351
Commande report :: https://gist.github.com/gCKn/80bd31fa28c14e1a812ac63be49c2eab
Commande clear :: https://gist.github.com/gCKn/84a4a7703646d52edc64c0b9fb189103
Commande poll :: https://gist.github.com/gCKn/83fbf3caf43ec23da154f8fc378530f3
Commande mute :: https://gist.github.com/gCKn/7317af9c0df7cba660282dd253c72ce3
Commande kick :: https://gist.github.com/gCKn/76ca9b356489f20aa73c3586504b37fa
Commande ban :: https://gist.github.com/gCKn/f516fcffcff93f6744c2bddfd62b16fa
Date française :: https://gist.github.com/gCKn/4c88c5ed62efc05eb268f3927648c422\n
= Snippets par Spokloo =\n
Commande cmd :: https://gist.github.com/gCKn/43c9de5bbabb6adeadd7da80da94a2f5\n
= Snippets par Kam3leøN =\n
Séparer bot et humain :: https://gist.github.com/gCKn/1a4d53f3a312b9cc57b1496bae6d5ab9\n
= Snippets par Mehmet =\n
Commande unmute :: https://gist.github.com/gCKn/b133724da63a4c2f408b9c09d95010d8\n
= Snippets par vugi99 =\n
Commande raidmode :: https://gist.github.com/gCKn/7c150b39f608e307b836f0a0c4fd3a59`,
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
  name: "snmod",
  description:
    "Commande pour renvoyer toutes les commandes de modération créaient jusque maintenant.",
  usage: "snmod"
};
