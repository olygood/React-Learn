# React-Learn
Apprendre react :    
Créer par Jordan Walke 
Le langage utilisé par REACT est du JSX  
React est une librairie javasript pour créer des interfaces utilisateur    
interface utilisateur ?  
C'est un site web ou l'aspect visuel est est interface utilisateur   
c'est avec l'interface que l'utilisateur va réagir  
avec énormément d'éléments dynamiques et que c'est pour cette raison 
que réact a été créer pour gérer cette complexité de manière élégante 
c'est un Framwork orienté component 
la librairie va nous aider à géré des composants web 
un composant c'est une brique dans lequel on va retrouver une partie visuelle 
ce que l'utilisateur va voir et la partie logique 
pour réact une page web c'est un ensemble d'éléments qui va pouvoir être découpé
en component.
chaque component peuve être composé d'autre component et l'ensemble de l'application peut 
être gérer par un component Réact 
la librairie est polyvalente c'est-à-dire que la librairie de base est très petite et 
et va nous permettre de gérer tout l'aspect visuel, 
mais on va pouvoir rajouter d'autre librairie qui vont pouvoir s'associer avec react 
et de réaliser des applications beaucoup plus complexes 
exemple de librairie qui ne font pas directement partie de la librairie React 
si je veux : 
optimiser mon application j'utiliserai une librairie CLI (creat react app)
définir différentes pages sur mon application j'utiliserai REACT ROUTER 
si j'ai énormément d'éléments dynamiques pour gérer tous ces éléments de manière centralisée 
dans ce qu'on appelle un état on utiliserait la librairie REDUX 

---------------------------

React : est une librairie pour créer des SPA :
Single pages applications 
c'est des applications qui tourne sur l'ordinateur de l'utilisateur 
la première fois que vous vous connecter a une application SPA 
vous aller faire une première requête qui s'appelle: requête initiale 
et cette requête initiale va être récupérée par le serveur 
et le serveur va nous retourner l'intégralité : de la logique, des Vues, et du Routing 
et cette ensemble va former votre application client 
Quand un utilisateur va vouloir aller sur une autre page toute la logique va s'exécuter 
depuis sont ordinateur et le serveur n'a plus à recalculer la vue la logique la base de données 
et du coup l'utilisateur n'aura pas à attendre le serveur pour recalculer l'ensemble 
Et l'utilisateur aura une sensation de fluidité 
une fois que le client à récupérer l'application elle va quand même communiquer avec le serveur, 
mais uniquement pour récupérer de la donnée via des requêtes AJAX. 

## instalation de react et des ces outils  
> avec le CLI : le CLI de react officiel (commande line interface)  
c'est un outils qui est mi par l"équipe de développement react qui va  
nous permettre de créer des application REACT très facilement et d'avoir un floate de developpement  
très optimiser 
### instalation:  
**créer un repository**
> installer node.js et npm ...  
node --version  
npm --version  
### mettre à jour node.js  
node.js mettre a jour  exemple version 8 => version 11 linux debian:  
sudo npm cache clean -f   
sudo npm install -g n  
sudo n stable  
**ajouter le package le CLI en Global:**  
sudo npm install -g create-react-app
sudo npm install -g = install en global pas le repertoire ou l'on se trouve  
Mais sur le disque dur dans le fichier :  
usr/local/bin/create-react-app un fichier cli   
creat-react-app est le nom du fichier qui contient les instructions pour créer une
Application React avec CLI  
pour garder c'est instruction a la création d'une nouvelle application React ON FAIT :  
**creat-react-app "nom de votre application au choix"**
**créer notre application:** 
> ce mettre dans votre repository folder :   
pour faire référence au CLI on va systématiquement faire:  
> **create-react-app "nom de l'application"**  (my app: est le nom de l'application)  
> on vient d'installer notre première application  
le CLI va télécharger REACT, une autre librairie REACT DOM, et de télécharger  
toutes ses librairies les mettre dans le folder de l'application.
**se mettre dans notre aaplication:**  
cd "nom de l'application"  
**lancer le server:**  
npm start
##RESUMER
install node.js avec npm
npm install -g creat-react-app (qui va s'installer dans usr/local/bin/creat-react-app)  
ce mettre dans le repository:  
creat-react-app "nom de mon app" (en minuscule)
cd "nom de l'application"  
npm start (lancer le server)







