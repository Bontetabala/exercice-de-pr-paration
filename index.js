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

// 3 