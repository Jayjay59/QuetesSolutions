const instructors = [
  {
    name: "John",
    availabilty: "all",
    specialities: ["Javascript", "Python", "C++"],
  },
  {
    name: "Mary",
    availabilty: "weekend",
    specialities: ["Javascript", "Ruby", "C++"],
  },
  {
    name: "Chris",
    availabilty: "evenings",
    specialities: ["Javascript"],
  },
  {
    name: "Anthony",
    availabilty: "all",
    specialities: ["Python", "Ruby"],
  },
  {
    name: "Pauline",
    availabilty: "only Mondays",
    specialities: ["Javascript", "Html", "CSS"],
  },
  {
    name: "Mark",
    availabilty: "all",
    specialities: ["C#", "C++", "Javascript"],
  },
  {
    name: "Helen",
    availabilty: "evenings",
    specialities: ["Python", "C++"],
  },
  {
    name: "Charles",
    availabilty: "none",
    specialities: ["Python"],
  },
];

// PARTIE 1
const newArray = [];

instructors.forEach((item) => {
  if (item.availabilty === "all" || item.availabilty === "weekend") {
    item.specialities.forEach((element) => {
      if (element === "Javascript") {
        newArray.push(item);
      }
    });
  }
});

// PARTIE 2 ET PARTIE 3
function afficheMessage(array) {
  array.forEach((element) => {
    if (element.specialities.includes("Python")) {
      console.log(
        `Hi ${element.name} we inform you that this weekend you will be doing the support class and you need to prepare a Python workshop`
      );
    } else {
      console.log(
        `Hi ${element.name} we inform you that this weekend you will be doing the support class `
      );
    }
  });
}

// PARTIE 1
console.log(newArray);
// PARTIE 2 ET PARTIE 3
afficheMessage(newArray);
