// Declare and define three variables using a numerical value

// * If the three variables are equal, display "The three variables are the same" in the console
// * If only two of the variables are equal, display "Two of the variables are the same" in the console
// * If the variables are all differents display "all variables are differents" in the console

const a = 1;
const b = 3;
const c = 5;

if (a === b && b === c && a === c) {
  console.log("Les 3 variables sont identiques !");
} else if (a === b || b === c || c === a) {
  console.log("Seulement 2 variables sont identiques");
} else {
  console.log("Toutes les variables sont diffèrentes");
}
