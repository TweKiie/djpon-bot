module.exports = (client, member) => {
  const channel = member.guild.channels.find(ch => ch.name === 'accueil');
  channel
    .send(
      `Bienvenue sur notre serveur, ${member}. Je te conseille de bien lire la fin de notre charte avant de continuer ton aventure sur notre commuanuté.`
    )
    .then(msg => msg.delete(30000));
};
