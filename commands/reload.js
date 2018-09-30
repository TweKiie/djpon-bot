exports.run = async (bot, msg, args) => {
  if (!args || args.size < 1)
    return msg.reply("Must provide a command to reload. Derp.");

  let command;
  if (bot.commands.has(args[0])) {
    command = bot.commands.get(args[0]);
  } else if (bot.aliases.has(args[0])) {
    command = bot.commands.get(bot.aliases.get(args[0]));
  }
  if (!command)
    return msg.reply(
      `La commande \`${
        args[0]
      }\` n'existe pas, ni son alias. Essayez à nouveau !`
    );
  command = command.help.name;

  delete require.cache[require.resolve(`./${command}.js`)];
  const cmd = require(`./${command}`);
  bot.commands.delete(command);
  bot.aliases.forEach((cmd, alias) => {
    if (cmd === command) bot.aliases.delete(alias);
  });
  bot.commands.set(command, cmd);
  cmd.conf.aliases.forEach(alias => {
    bot.aliases.set(alias, cmd.help.name);
  });

  msg.reply(`La commande \`${command}\` a été relancé !`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: "reload",
  description: "Recharge une commande qui a été modifié.",
  usage: "reload [command]"
};
