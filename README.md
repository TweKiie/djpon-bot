![logo](https://getcodingknowledge.com/wp-content/uploads/2018/08/petitLogo.png)

# Dj-pon Discord Bot

À la base, le bot `dj-pon` se trouve sur le serveur de l'entreprise getCodingKnowledge. Si vous avez une question, contactez-nous sur le Discord, les commentaires ne sont pas lus ici.

# Où pouvez-vous nous trouver ?

Rejoignez-nous sur notre [Discord](https://discord.gg/FADJwNS), nous sommes à votre écoute. Vous pouvez aussi nous retrouver directement sur notre [site web](https://getcodingknowledge.com).

## Bien débuter

Ces instructions vont vous permettre de récupérer une copie du bot sur votre machine local afin de permettre le développement ainsi que différents tests.

### Prérequis

Si vous décidez d'utiliser notre bot, vous aurez besoin des logiciels suivants :

- [Python 2.7](https://www.python.org/downloads/release/python-2715/)
- [Node 8+ (< 10)](https://nodejs.org/fr/download/releases/)
- [Discord](https://discordapp.com)

### Installation

Une fois que vous avez ces différents logiciel installés, rendez-vous dans votre projet et tapez la commande : `https://github.com/gCKn/djpon-bot.git`.

Ensuite, prenez le fichier `config.json.exemple`, renommez le `config.json` puis remplacez les informations, voici le fichier en question :

```js
{
  "ownerID": "l'ID de l'utilisateur qui a créé le serveur (copy ID sur son pseudo)",
  "token": "le token de votre bot",
  "prefix": "le prefixe de votre bot",
  "modRoleName": "le rôle de modérateur",
  "adminRoleName": "le rôle d'administrateur"
}
```

Une fois que vous avez terminé cette configuration, vous pouvez simplement taper la commande `npm i`.

Et c'est terminé ! Tapez la commande `node main.js` dans le terminal pour lancer le bot.

## Coder avec

- [VS Code](https://code.visualstudio.com/download) - Editeur de texte
- [discord.js](http://www.sitedumodeleun.com) - Librairie pour les bots Javascript

## Accéder à notre documentation

Pour connaître les différentes commandes de notre projet, vous pouvez vous rendre sur [notre Discord](https://discord.gg/FADJwNS) et tapez la commande `z:help`.

## Historique de version

Pour retrouver un historique de nos versions, regardez directement les [tags du repository](https://github.com/gCKn/djpon-bot/tags).

## Auteurs

- **Alexis OLLAND** - _Travaille initial_ - [Alex](https://github.com/gCKn)

## License

Ce projet est enregistré sous une licence MIT - vous pouvez retrouver plus d'informations sur notre fichier [license](https://github.com/gCKn/djpon-bot/blob/master/LICENSE.md).
