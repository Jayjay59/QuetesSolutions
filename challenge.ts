
// On définit que la fonction va prendre en paramètres des users stockés dans un tableau (wilders)
const prettyPrintWilder = (users: Array<{ name: string; age: number }>) => {
  console.log("########################");
  users.map((el) => {
    console.log(`${el.name} is ${el.age} years old`);
  });
  console.log("########################");
};

// On type Wilders en tant qu'un tableau d'objets possédant chacun un nom et un âge
const wilders: Array<{ name: string; age: number }> = [
  { name: "Pierre", age: 23 },
  { name: "Paul", age: 30 },
  { name: "Jacques", age: 25 },
];

// On appel la fonction avec wilders en argument et qui contient notre tableau de trois wilders
prettyPrintWilder(wilders);

