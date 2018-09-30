const ytdl = require("ytdl-core");

exports.run = async (bot, msg, args) => {
  if (!msg.member.voiceChannel)
    return msg.channel.send("Connectez vous à un salon vocal !");
  if (msg.guild.me.voiceChannel)
    return msg.channel.send("Le bot est déjà connecté à un serveur vocal !");
  if (!args[0]) return msg.channel.send("Merci de préciser un lien YouTube !");
  const validate = await ytdl.validateURL(args[0]);
  if (!validate) return msg.channel.send("Désolé, l'URL n'est pas valide !");
  const info = await ytdl.getInfo(args[0]);
  const connection = await msg.member.voiceChannel.join();
  const dispatcher = await connection.playStream(
    ytdl(args[0], { filter: "audioonly" })
  );
  msg.channel.send(`Musique ajoutée : ${info.title}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "play",
  description: "Commande pour jouer de la musique dans un salon vocal.",
  usage: "play <url youtube>"
};
