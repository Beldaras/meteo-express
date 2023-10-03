# meteo-express

Voici le projet backend d'une web app météo développer avec NodeJS, Express et MySQL.  
Vous trouverez la partie frontend ici : https://github.com/Beldaras/meteo-checker.

L'objectif est de fournir une API permettant de communiquer avec une base de donnée afin d'enregistrer des utilisateurs et leurs villes favorites.

Pour la suite, je dois finir le CRUD utilisateur (pour mettre à jour ses informations ou supprimer son compte) et refactoriser le code.  
J'aimerais également limiter le nombre de favoris par utilisateur et empêcher les doublons.


### Pour lancer le projet :

```
git clone git@github.com:Beldaras/meteo-express.git

cd meteo-express

npm install

npm run dev
```

N'oublier pas de paramétrer vos variables d'environnement dans un fichier .env (utilisez le .env.sample en exemple).

## English translation

A backend project from scratch with nodeJS/Express and MySQL.  
The frontend project : https://github.com/Beldaras/meteo-checker

The goal is to provide a server side for a meteo checker web app.  
The frontend project below to search a city and checked her weather, and stocked the last search in browser's local storage.  
With this backend, users can create an account and display their favorites cities weahter.

### To run the project :
```
git clone git@github.com:Beldaras/meteo-express.git

cd meteo-express

npm install

npm run dev

npm run migrate // if you want a database with some users and favorites
```

don't forget to clone and run front and set your .env (with .env.sample variables).
