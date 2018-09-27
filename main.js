const Discord = require('discord.js');
const { promisify } = require('util');
const readdir = promisify(require('fs').readdir);

const bot = new Discord.Client();
bot.config = require('./config.json');
require('./modules/functions')(bot);

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

(async function() {
  // Command handler
  const cmdFiles = await readdir('./commands/');
  cmdFiles.forEach(f => {
    try {
      let props = require(`./commands/${f}`);
      bot.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        bot.aliases.set(alias, props.help.name);
      });
    } catch (e) {
      bot.log(`Impossible de charger la commande ${f}: ${e}`);
    }
  });

  // Event loader
  const eventFiles = await readdir('./events/');
  eventFiles.forEach(file => {
    const eventName = file.split('.')[0];
    const event = require(`./events/${file}`);
    bot.on(eventName, event.bind(null, bot));
    delete require.cache[require.resolve(`./events/${file}`)];
  });

  bot.login(bot.config.token);
})();
