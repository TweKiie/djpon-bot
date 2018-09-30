exports.run = (bot, message, params, level) => {
  if (!params[0]) {
    const myCommands = bot.commands.filter(c => c.conf.permLevel <= level);
    const commandNames = myCommands.keyArray();
    const longest = commandNames.reduce(
      (long, str) => Math.max(long, str.length),
      0
    );
    message.channel.send(
      `= Liste de commandes =\n\n[Utilisez ${
        bot.config.prefix
      }help <commandname> pour plus de détails]\n\n${myCommands
        .map(
          c =>
            `${bot.config.prefix}${c.help.name}${" ".repeat(
              longest - c.help.name.length
            )} :: ${c.help.description}`
        )
        .join("\n")}`,
      { code: "asciidoc" }
    );
  } else {
    let command = params[0];
    if (bot.commands.has(command)) {
      command = bot.commands.get(command);
      message.channel.send(
        `= ${command.help.name} = \n${
          command.help.description
        }\nUtilisation -> z:${command.help.usage}`,
        { code: "asciidoc" }
      );
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["h", "halp"],
  permLevel: 0
};

exports.help = {
  name: "help",
  description: "Affiche toutes les commandes disponibles pour votre rang.",
  usage: "help [command]"
};
