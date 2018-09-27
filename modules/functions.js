module.exports = bot => {
  bot.permlevel = message => {
    let permlvl = 0;

    if (message.author.id === bot.config.ownerID) return 10;
    if (!message.guild || !message.member) return 0;

    try {
      let modRole = message.guild.roles.find('name', bot.config.modRoleName);
      if (modRole && message.member.roles.has(modRole.id)) permlvl = 2;
    } catch (e) {
      console.warn(
        'modRoleName not present in configuration. Skipping Moderator (level 2) check'
      );
    }
    try {
      let adminRole = message.guild.roles.find(
        'name',
        bot.config.adminRoleName
      );
      if (adminRole && message.member.roles.has(adminRole.id)) permlvl = 3;
    } catch (e) {
      console.warn(
        'adminRoleName not present in configuration. Skipping Administrator (level 3) check'
      );
    }

    if (message.author.id === message.guild.owner.id) permlvl = 4;

    return permlvl;
  };

  // Log de la console

  bot.log = (type, msg, title) => {
    if (!title) title = 'Log';
    console.log(`[${type}] [${title}]${msg}`);
  };

  /* MISCELANEOUS NON-CRITICAL FUNCTIONS */

  // `await wait(1000);` to "pause" for 1 second.
  global.wait = require('util').promisify(setTimeout);

  // Another semi-useful utility command, which creates a "range" of numbers
  // in an array. `range(10).forEach()` loops 10 times for instance. Why?
  // Because honestly for...i loops are ugly.
  global.range = (count, start = 0) => {
    const myArr = [];
    for (var i = 0; i < count; i++) {
      myArr[i] = i + start;
    }
    return myArr;
  };

  // These 2 simply handle unhandled things. Like Magic. /shrug
  process.on('uncaughtException', err => {
    let errorMsg = err.stack.replace(new RegExp(`${__dirname}\/`, 'g'), './');
    console.error('Uncaught Exception: ', errorMsg);
  });

  process.on('unhandledRejection', err => {
    console.error('Uncaught Promise Error: ', err);
  });
};
