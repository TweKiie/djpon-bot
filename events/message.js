module.exports = (bot, message) => {
  if (message.author.bot) return;
  if (message.content.indexOf(bot.config.prefix) !== 0) return;

  const args = message.content.split(/\s+/g);
  const command = args
    .shift()
    .slice(bot.config.prefix.length)
    .toLowerCase();

  // Récupération des permissions
  let perms = bot.permlevel(message);

  // Alias ?
  const cmd =
    bot.commands.get(command) || bot.commands.get(bot.aliases.get(command));

  // Si la commande existe + permission, on lance la commande
  if (cmd && perms >= cmd.conf.permLevel) {
    bot.log(
      'log',
      `${message.guild.name}/#${message.channel.name}:
      ${message.author.username} (${message.author.id}) ran command ${
        cmd.help.name
      }`,
      'CMD'
    );
    cmd.run(bot, message, args, perms);
  }
};
