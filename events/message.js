module.exports = (bot, message) => {
  if (message.author.bot) return;
  if (message.guild) {
    const key = `${message.guild.id}-${message.author.id}`;
    bot.points.ensure(`${message.guild.id}-${message.author.id}`, {
      user: message.author.id,
      guild: message.guild.id,
      points: 0,
      level: 1
    });

    bot.points.inc(key, "points");

    const curLevel = Math.floor(0.1 * Math.sqrt(bot.points.get(key, "points")));

    if (bot.points.get(key, "level") < curLevel) {
      message.reply(
        `Tu es monté au niveau **${curLevel}**! Dj-pon te félicite !`
      );
      bot.points.set(key, curLevel, "level");
    }
  }
  if (message.content.indexOf(bot.config.prefix) !== 0) return;

  const args = message.content.split(/\s+/g);
  const command = args
    .shift()
    .slice(bot.config.prefix.length)
    .toLowerCase();

  // Récupération des permissions
  const perms = bot.permlevel(message);

  // Alias ?
  const cmd =
    bot.commands.get(command) || bot.commands.get(bot.aliases.get(command));

  // Si la commande existe + permission, on lance la commande
  if (cmd && perms >= cmd.conf.permLevel) {
    bot.log(
      "log",
      `${message.guild.name}/#${message.channel.name}:
      ${message.author.username} (${message.author.id}) ran command ${
  cmd.help.name
}`,
      "CMD"
    );
    cmd.run(bot, message, args, perms);
  }
};
