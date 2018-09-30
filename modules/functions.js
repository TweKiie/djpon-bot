module.exports = bot => {
  bot.permlevel = message => {
    let permlvl = 0;

    if (message.author.id === bot.config.ownerID) return 10;
    if (!message.guild || !message.member) return 0;

    try {
      const modRole = message.guild.roles.find("name", bot.config.modRoleName);
      if (modRole && message.member.roles.has(modRole.id)) permlvl = 2;
    } catch (e) {
      console.warn("modRoleName non présent dans le fichier de configuration.");
    }
    try {
      const adminRole = message.guild.roles.find(
        "name",
        bot.config.adminRoleName
      );
      if (adminRole && message.member.roles.has(adminRole.id)) permlvl = 3;
    } catch (e) {
      console.warn(
        "adminRoleName non présent dans le fichier de configuration."
      );
    }

    if (message.author.id === message.guild.owner.id) permlvl = 4;

    return permlvl;
  };

  // Log de la console

  bot.log = (type, msg, title) => {
    if (!title) title = "Log";
    console.log(`[${type}] [${title}]${msg}`);
  };

  // Fonctions basiques

  // Ajouter `await wait(1000);` pour faire une pause d'une seconde
  global.wait = require("util").promisify(setTimeout);

  global.range = (count, start = 0) => {
    const myArr = [];
    for (var i = 0; i < count; i++) {
      myArr[i] = i + start;
    }
    return myArr;
  };

  // Amélioration des messages d'erreurs
  process.on("uncaughtException", err => {
    const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
    console.error("Uncaught Exception: ", errorMsg);
  });

  process.on("unhandledRejection", err => {
    console.error("Uncaught Promise Error: ", err);
  });
};
