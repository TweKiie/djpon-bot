const Discord = require('discord.js');

exports.run = async (bot, message) => {
  const filtered = bot.points.filter(p => p.guild === message.guild.id).array();
  const sorted = filtered.sort((a, b) => a.points - b.points);
  const top10 = sorted.splice(0, 10).reverse();
  const embed = new Discord.RichEmbed()
    .setTitle('Classement')
    .setAuthor(bot.user.username, bot.user.avatarURL)
    .setDescription('Voici notre TOP10 !')
    .setColor(0x00ae86);
  for (const data of top10) {
    embed.addField(
      bot.users.get(data.user).tag,
      `${data.points} points (niveau ${data.level})`
    );
  }
  return message.channel.send({ embed });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['lead'],
  permLevel: 0
};

exports.help = {
  name: 'leaderboard',
  description: 'Renvoie le classement des 10 premiers utilisateurs.',
  usage: 'leaderboard | z:lead'
};
