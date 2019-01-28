## Fonctionnement de react:  
## Les éléments:    
sont immutable on ne peuvent êtres modifiés
quand on arrive à la ligne d'une **variable element = const element** l'élément est stocké  
les expressions javasript vont être évaluées et vont être retournées comme une chaine de caractère  
stocké dans **element**et ensuite **element** est figé.  
et si on veut modifier le display via render il va falloir à chaque fois modifier l'élément
**_Mais on ne le fait jamais car on va utilisé des class_** qui vont avoir 
une methode **render**et qui vont s'exécutées à chaque fois que la **class** va être modifiée
et la **class**est un composant **REACT**et le **render vas mettre à jour le **DOM** 
 
## Dom virtuel: 
ReactDom.render  : n'accepte que les éléménts
## Class:  
on va utiliser des class qui on une méthode **render** qui vas s'exécuter  
à chaque fois que la class vas être modifier et la class est un composant REACT  
et le **render** met à jour le **DOM**  
le render de **ReactDom.render vas comparer l'ancien **DOM_Virtuel**avec le nouveau  
et oprère uniquement sur les différences  
##Composants: Component:  
**les composants fonctionnel:**  
###créer un composant:  
**1A.**
**à l'aide d'une fonction:**
1. créer une variable qui vas avoir une fonction qui va retouner un élément **REACT**
2. rendre le composant sur le**DOM**
1. const Composant1 = () =>{
    return <h1>hello world</h1>
}
2. **ReactDom.render(<Composant1 />,document.getElementById('root));**
> <Composant1 /> c'est comme si on avait ecrit {} comme si on utilisait 
un objet dans une méthod avec {}, au lieu d'avoir une variable intermédiare.  
 la methode d render de Reactdom ,'accepte que des éléments  
donc j'appelle mon composant **<Composant1/>**  
la methode render va essayer d'interprètes le composants elle va voir qu'il y a une majuscule 
le fait qu'il y a une majuscule fait que l'on est en présence d'un composant, pas d'un tag  
- elle va allez dans la variable du composant et **return* _hello word_ 
dans l'elément qui a **ID 'root'**   
**ou avec une étape intermédiare:**  

const Composant1 = () =>{
    return <h1>hello world</h1>
 const element = <Composant1 />   
ReactDom.render(element,document.getElementById('root));
**<Composant />**  
cest comme si c'était : <composant></composant> qu'il n' y arien entre les deux.
créer un composant avec une méthode représente quelques limite on va le  
réserver pour le composant qui ne contient aucune logique  
les composants qui ne vont pas récuperer de **DATA**  
### créer un composant: 
**2a**  
**utilisé les classes es6:**  
comment ca marche:  
class Composant1 extends React.Component {
    render(){
        return <h1>hello world</h1>
    }

}
ReactDom.render(element,document.getElementById('root));
**explication du code:**  





