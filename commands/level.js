exports.run = async (bot, message) => {
  const key = `${message.guild.id}-${message.author.id}`;
  return message.channel.send(
    `Tu as actuellement ${bot.points.get(
      key,
      'points'
    )} points, et tu es niveau ${bot.points.get(key, 'level')}!`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rank'],
  permLevel: 0
};

exports.help = {
  name: 'level',
  description: "Renvoie le niveau actuel de l'utilisateur.",
  usage: 'level'
};
