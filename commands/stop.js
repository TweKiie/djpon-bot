exports.run = async (bot, msg, args, ops) => {
  if (!msg.member.voiceChannel)
    return msg.channel.send('Connectez-vous à un salon vocal !');
  if (!msg.guild.me.voiceChannel)
    return msg.channel.send("Désolé, le bot n'est pas connecté !");
  if (msg.guild.me.voiceChannelID !== msg.member.voiceChannelID)
    return msg.channel.send('Vous ne vous trouvez pas dans le même salon !');
  msg.guild.me.voiceChannel.leave();
  msg.delete();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'stop',
  description:
    'Commande pour stopper la musique du bot (déconnexion du serveur).',
  usage: 'stop'
};
