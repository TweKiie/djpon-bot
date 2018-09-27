exports.run = async (bot, msg, args) => {
  let memberRole = msg.guild.member(msg.author);
  if (!memberRole) {
    return msg.channel.send("L'utilisateur n'existe pas !");
  }

  let roleToAdd = args[0];
  if (!roleToAdd) return msg.channel.send('Spécifier un rôle');

  if (roleToAdd === 'htmlcss') {
    var role = msg.guild.roles.find(x => x.name === 'HTML-CSS');
    memberRole.removeRole(role.id);
  } else if (roleToAdd === 'javascript') {
    var role = msg.guild.roles.find(x => x.name === 'Javascript');
    memberRole.removeRole(role.id);
  } else if (roleToAdd === 'ruby') {
    var role = msg.guild.roles.find(x => x.name === 'Ruby');
    memberRole.removeRole(role.id);
  } else if (roleToAdd === 'discordbot') {
    var role = msg.guild.roles.find(x => x.name === 'Discord-bot');
    memberRole.removeRole(role.id);
  } else if (roleToAdd === 'laravel') {
    var role = msg.guild.roles.find(x => x.name === 'Laravel');
    memberRole.removeRole(role.id);
  } else {
    msg.channel.send('Rôle introuvable ou non autorisé.');
  }

  msg.delete();
  msg.channel
    .send(
      `Félicitation ${memberRole}, tu as enlevé le rôle ${roleToAdd} avec succès !`
    )
    .then(msg => msg.delete(5000));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rrole',
  description: 'Commande pour enlever un role.',
  usage: 'rrole <role>'
};
