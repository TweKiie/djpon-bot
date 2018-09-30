exports.run = async (bot, message, args) => {
  if (message.author.id !== message.guild.ownerID)
    return message.reply("Seul Alex peut ajouter des points ;)");
  const user = message.mentions.users.first() || bot.users.get(args[0]);
  if (!user) return message.reply("Il faut mentionner quelqu'un Alex ;");
  const pointsToAdd = parseInt(args[1], 10);
  if (!pointsToAdd) return message.reply("Combien de points dois-je ajouter ?");
  // Ensure there is a points entry for this user.
  bot.points.ensure(`${message.guild.id}-${user.id}`, {
    user: message.author.id,
    guild: message.guild.id,
    points: 0,
    level: 1
  });
  // Get their current points.
  let userPoints = bot.points.get(`${message.guild.id}-${user.id}`, "points");
  userPoints += pointsToAdd;
  // And we save it!
  bot.points.set(`${message.guild.id}-${user.id}`, userPoints, "points");
  message.channel.send(
    `${
      user.tag
    } a reçu ${pointsToAdd} points d'expérience et se retrouve maintenant à ${userPoints} points.`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: "give",
  description: "Donner des points d'expérience à un utilisateur.",
  usage: "give"
};
