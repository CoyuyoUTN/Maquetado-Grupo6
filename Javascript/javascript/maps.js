const users = [
  {
    id: 1,
    userName: "Fabi",
    userLastName: "Tureo",
  },
  {
    id: 2,
    userName: "Melina",
    userLastName: "Lencinas",
  },
  {
    id: 3,
    userName: "Guillermo",
    userLastName: "Scharf",
  },
  {
    id: 4,
    userName: "Emi",
    userLastName: "Salias",
  },
];

const practice = users.map((users) => users.userName + "maped");

console.log(practice);

const view = users.filter((user) => user.id == 2).map((user) => user.userName);

console.log("FILTER AND MAP", view);

const arrayTest = [
  "auto",
  "camioneta",
  "colectivo",
  "camion",
  "moto",
  "avion",
  "cuatriciclo",
  "patineta",
  "skate",
  "bicicleta",
];
const [vehiculo1, vehiculo2, vehiculo3] = arrayTest;
console.log(` ${vehiculo1}  ${vehiculo2}  ${vehiculo3}`);

const fun = () => {
  let i = 0;
  while (i < users.length) {
    let { id, userName, userLastName } = users[i];
    console.log(`${id} ${userName} ${userLastName}`);
    i++;
  }
};

fun();

const userGuille = {
  id: 3,
  userName: "Guillermo",
  userLastName: "Scharf",
};

const names = ["Fabi", "Melina", "Guillermo", "Emi"];
const otherNames = ["Sofia", "Fabricio", "Deborah", "Nacho"];
const otherNamesAgain = ["Paloma", "Fernando", "Celeste", "Javier"];

const totalNames = names.concat(otherNamesAgain, otherNames);
console.log("Total Names", totalNames);

const totalNamesSpread = [...names, ...otherNames, ...otherNamesAgain];
console.log("Con puntitos", totalNamesSpread);

const updateGuille = {
  ...userGuille,
  userEmail: "guille@skillfactory.com",
};

console.log("Update Guille", updateGuille);
