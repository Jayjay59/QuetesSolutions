// Given an array of names of people but mixing lower case and upper case letters, you will have to:
// - Create a function that contains the logic to refactor those names so it converts a name like `anTHoNY` to `Anthony`.
// - A function that accepts two parameters: an array and a callback function that is in charge of refactoring all items inside that array
// - Return the original array but with all names properly typed

const people = [
  "JoHn",
  "ChrISTiana",
  "anThoNY",
  "MARia",
  "jaMeS",
  "MIChaEl",
  "jeNNIFeR",
];

// Fonction qui met toutes les lettres en minuscules pour chaque élément du tableau
function nameLowerCase(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toLowerCase();
  }
}

// fonction qui prend en paramètres un tableau et une fonction callback (Mettre en minuscules)
function refactorArray(array, callback) {
  callback(array);
}

// Appel de la fonction et definition de ses 2 arguments
refactorArray(people, nameLowerCase);
// Affichage du nouveau tableau
console.log(people);
