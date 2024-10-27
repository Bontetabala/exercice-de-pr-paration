// Ecrivez une boucle qui affiche nombre de 1 à 10 dans la console
for (let i = 1; i <= 10; i++) {
   console.log(i);
}

// Créez une fonction qui calcule la sommes des nombres entre 1 et 10 utilisant une boucle

function sommeMultiplication () {
   let somme = 0;
   for (let i = 0; i < 10; i++) {
      somme += 1;  
   }
   return somme;
}

let resultal = sommeMultiplication();
console.log(resultal);

// Utilisez une boucle pour créez une table de multiplication (de 1 à 10) et affichez-la dans la console

for (let i = 1; i <= 10; i++) {
   let tableaux = " ";

   for (let j = 0; j <= 10; j++) {
      tableaux += (i * j) + "\t"
   }
   
   console.log(tableaux);
}

/* Opérateurs logiques */

// 1 créez un fonction qui verifie si un nombre est pair et positif

/* Awa na koki na nga te, il faut m'expliquer */ 

// 2 créez une condition qui vérifie si une variable est une chaine de caracteres OU un nombre 

let variable = "04"; // votre variable ici  

if (typeof variable === 'string' || typeof variable === 'number') {  
    console.log("La variable est soit une chaîne de caractères, soit un nombre.");  
} else {  
    console.log("La variable n'est ni une chaîne de caractères ni un nombre.");  
}

// 3 implémentez une fonction de validation de formulaire qui vérifie si tous les champs requis sont remplies

/* awa pe na koki te */

/* Objet */

// créez un objet representant un livre avec des propriétés comme titre, auteur, et année de publication

let livre = {
   titre : "Seigneur des anneaux",
   auteur : "peter jackson",
   anneePublication: 2003,
      
   // Ajoutez une méthode à l'objet livre qui retourne une phrase décrivant le livre.
      decrire: function() {  
          return `${this.titre} est un livre écrit par ${this.auteur} et publié en ${this.anneePublication}.`;  
      }  
}


// Tableau d'objets livre  
const livres = [  
   { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", annee: 1943 },  
   { titre: "1984", auteur: "George Orwell", annee: 1949 },  
   { titre: "L'Étranger", auteur: "Albert Camus", annee: 1942 },  
   { titre: "Sapiens: Une brève histoire de l'humanité", auteur: "Yuval Noah Harari", annee: 2011 },  
   { titre: "La Peste", auteur: "Albert Camus", annee: 1947 }  
];  

// Créez un tableau d'objets livre et écrivez une fonction pour trouver le livre le plus récent. 
function trouverLivreLePlusRecent(livres) {  
   return livres.reduce((plusRecent, livre) => {  
       return (livre.annee > plusRecent.annee) ? livre : plusRecent;  
   });  
}  

// Appel de la fonction et affichage du résultat  
const livreRecent = trouverLivreLePlusRecent(livres);  
console.log("Le livre le plus récent est :", livreRecent);