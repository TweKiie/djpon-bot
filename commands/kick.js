const Discord = require('discord.js');

exports.run = async (bot, msg, args) => {
  let kickedUser = msg.guild.member(
    msg.mentions.users.first() || msg.guild.members.get(args[0])
  );
  let kickReason = args.join(' ').slice(22);

  let kickEmbed = new Discord.RichEmbed()
    .setDescription('Reports')
    .setColor('#dc143c')
    .addField('Utilisateur kické', `${kickedUser} (ID: ${kickedUser.id})`)
    .addField('Utilisateur ayant kické', `${msg.author} (ID: ${msg.author.id})`)
    .addField('Channel', msg.channel)
    .addField('Raison', kickReason);

  let kickChannel = msg.guild.channels.find(`name`, 'me');

  msg.guild.member(kickedUser).kick(kickReason);
  kickChannel.send(kickEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'kick',
  description: 'Commande pour renvoyer un utilisateur de votre serveur',
  usage: 'kick <@pseudo> <raison>'
};
