exports.run = async (bot, msg, args) => {
  const memberRole = msg.guild.member(msg.author);

  const roleToAdd = args[0];
  if (!roleToAdd)
    return msg.channel
      .send("Spécifier un rôle !")
      .then(msg => msg.delete(2000));

  var role;

  if (roleToAdd === "htmlcss") {
    role = msg.guild.roles.find(x => x.name === "HTML-CSS");
    memberRole.addRole(role.id);
  } else if (roleToAdd === "javascript") {
    role = msg.guild.roles.find(x => x.name === "Javascript");
    memberRole.addRole(role.id);
  } else if (roleToAdd === "ruby") {
    role = msg.guild.roles.find(x => x.name === "Ruby");
    memberRole.addRole(role.id);
  } else if (roleToAdd === "discordbot") {
    role = msg.guild.roles.find(x => x.name === "Discord-bot");
    memberRole.addRole(role.id);
  } else if (roleToAdd === "laravel") {
    role = msg.guild.roles.find(x => x.name === "Laravel");
    memberRole.addRole(role.id);
  } else {
    msg.channel
      .send("Rôle introuvable ou non autorisé.")
      .then(msg => msg.delete(2000));
  }

  msg.delete();
  if (
    roleToAdd === "instructeur" ||
    roleToAdd === "modérateur" ||
    roleToAdd === "moderateur" ||
    roleToAdd === "patron"
  ) {
    msg.channel.send(`Bien essayé ${memberRole}, la sanction est à venir ;)`);
  } else if (
    roleToAdd === "htmlcss" ||
    roleToAdd === "javascript" ||
    roleToAdd === "ruby" ||
    roleToAdd === "discordbot" ||
    roleToAdd === "laravel"
  ) {
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
  name: "arole",
  description: "Commande pour obtenir un role.",
  usage: "arole <role>"
};
