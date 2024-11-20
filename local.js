// local storage and js :
// set c'est à dire stocké rassemblé Quelques caractéristiques du Set en JavaScript :Un Set ne stocke que des valeurs uniques (pas de doublons).Il permet d'ajouter, de supprimer et de vérifier la présence d'éléments.


// méthode 1: 
 window.localStorage.setItem("color","#F00");
  console.log(window.localStorage);
console.log( typeof window.localStorage);

// object: contient key  c'est la propriété à ajouté and value c'est sa valeur qui va prendre

// ! pour voir qui sera se passé on va aller à inspecté +console va affiché se quiest dedant le storage + le type de notre élement cest un objet .

// ! COMMENT ACCéDé A NOTRE STORAGE DANS L'APPLICATION ?
// on va à >>+ application + local storage +HTTP.. notre page onclick va nous affiché un array de key et value stocké dans local storage


// méthode 2:

// window.localStorage.key="value";
// ex:
window.localStorage.fontweight="bold";


// méthode 3:
window.localStorage["fontsize"]="20px";
// !comment je peut utilisé encore une fois les données stocké dans local storage :


// get La méthode getItem permet de récupérer une valeur à partir d'une clé stockée dans le Local Storage ou le Session Storage.

console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);

// aprés avoir accédé a ce qu'ona stocké comment le voir dans la page 
// Set color in the page 
document.body.style.backgroundColor=window.localStorage.color

// >>maitenant si je part a mon site web je vais trouvé que la couleur de mon backgorund est rouge méme aprés réfréche de la page 
// !!maitenant si je veut supprimé un key =proprité que je n'ai pas besoin 


 // remove one key 

// window.localStorage.removeItem("color");
  // remove all keys
// window.localStorage.clear();

// GET KEY 

// console.log(window.localStorage.key(index);
// console.log(window.localStorage.key(0)
console.log(window.localStorage.key(0));
// cela afiiche l key c'est à dire la propriété avec l'index 0



