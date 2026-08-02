#   Cloning Repo

To clone this repo open your terminal to your desired directory and type:

`git clone <repo>`

`npm install`


#   Update NPM Packages

Run:

`npm audit`

for a list of outdated packages that can be updated. Keep note of any breaking changes as
packages update.


#   Start Server

To start the server on localhost run:

`npm start`

I have configured package.json to launch this in a separate Windows Terminal tab. If this fails
due to not being on a Windows system using Windows Terminal please use:

`npm run dev`


#   Build Project

To build project run:

`npm run build`

##  *** NOTE ***

This project is using Tachyons. At the time of this project Tachyons is using an obsolete CSS hack
for IE6/7. After installing your npm packages please remove:

*zoom: 1;

from both Tachyons CSS files located in node_modules/tachyons/css at the time of this writing.
