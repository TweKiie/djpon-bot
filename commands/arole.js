exports.run = async (bot, msg, args) => {
  let memberRole = msg.guild.member(msg.author);

  let roleToAdd = args[0];
  if (!roleToAdd)
    return msg.channel
      .send('Spécifier un rôle !')
      .then(msg => msg.delete(2000));

  if (roleToAdd === 'htmlcss') {
    var role = msg.guild.roles.find(x => x.name === 'HTML-CSS');
    memberRole.addRole(role.id);
  } else if (roleToAdd === 'javascript') {
    var role = msg.guild.roles.find(x => x.name === 'Javascript');
    memberRole.addRole(role.id);
  } else if (roleToAdd === 'ruby') {
    var role = msg.guild.roles.find(x => x.name === 'Ruby');
    memberRole.addRole(role.id);
  } else if (roleToAdd === 'discordbot') {
    var role = msg.guild.roles.find(x => x.name === 'Discord-bot');
    memberRole.addRole(role.id);
  } else if (roleToAdd === 'laravel') {
    var role = msg.guild.roles.find(x => x.name === 'Laravel');
    memberRole.addRole(role.id);
  } else {
    msg.channel
      .send('Rôle introuvable ou non autorisé.')
      .then(msg => msg.delete(2000));
  }

  msg.delete();
  if (
    roleToAdd === 'instructeur' ||
    roleToAdd === 'modérateur' ||
    roleToAdd === 'moderateur' ||
    roleToAdd === 'patron'
  ) {
    msg.channel.send(`Bien essayé ${memberRole}, la sanction est à venir ;)`);
  } else {
    msg.channel
      .send(
        `Félicitation ${memberRole}, tu as reçu le rôle ${roleToAdd} avec succès !`
      )
      .then(msg => msg.delete(3000));
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'arole',
  description: 'Commande pour obtenir un role.',
  usage: 'arole <role>'
};
