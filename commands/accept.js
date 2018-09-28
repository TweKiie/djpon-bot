exports.run = async (bot, msg, args) => {
  let memberRole = msg.guild.member(msg.author);
  if (msg.member.hasPermission('ADD_REACTIONS')) {
    return msg.channel.send(
      'Vous ne pouvez pas utilser cette commande deux fois de suite !'
    );
  }

  let Accepted = msg.guild.roles.find(x => x.name === 'Accepted');

  await memberRole.addRole(Accepted);

  try {
    await memberRole.send(
      `Bravo ${memberRole}, tu as accepté notre charte et tu peux donc accéder au serveur normalement. Comme dit précédemment, n'hésite pas à accéder au canal #infos afin d'avoir des informations sur le serveur. Si tu ne sais pas quoi faire après avoir tapée la commande, relis simplement le message envoyé par le bonhomme bleu.`
    );
  } catch (e) {
    msg.channel.send(
      `Bravo ${memberRole}, tu as accepté notre charte et tu peux donc accéder au serveur normalement. Comme dit précédemment, n'hésite pas à accéder au canal #infos afin d'avoir des informations sur le serveur. Si tu ne sais pas quoi faire après avoir tapée la commande, relis simplement le message envoyé par le bonhomme bleu.`
    );
  }

  msg.delete();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'accept',
  description: 'Commande pour accepter la charte du serveur.',
  usage: 'accept <@pseudo>'
};
