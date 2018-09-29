module.exports = async bot => {
  bot.log(
    "log",
    ` Prêt à espionner ${bot.users.size} utilisateurs sur ${
      bot.channels.size
    } salons.`,
    "Prêt!"
  );

  bot.user.setPresence({
    game: {
      name: "with Alex | z:help",
      type: "PLAYING"
    },
    status: "idle"
  });
};
