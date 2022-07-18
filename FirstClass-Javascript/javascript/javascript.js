const name = "Gonzalo Herrero";
const age = 31;
const isPartner = false;
const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arraySkillerNames = [
  "Marina Arrieta",
  "Rodrigo Guinazu",
  "Gabriel Maguna",
  "Franco Vargas",
  "Emmanuel Mombelli",
];

const object = {
  name: "Gonzalo Herrero",
  age: 31,
  isPartner: false,
  arraryNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  arraySkillerNames: [
    "Marina Arrieta",
    "Rodrigo Guinazu",
    "Gabriel Maguna",
    "Franco Vargas",
    "Emmanuel Mombelli",
  ],
};

console.log(
  `%c ${name}`,
  "color:darkblue; border: 4px solid black; padding 10px; background: yellow; margin: 10px"
);

console.log(
  `%c ${age}`,
  "color:darkblue; border: 4px solid black; padding 10px; background: lightblue; margin: 10px"
);

console.log(
  `%c ${isPartner}`,
  "color:white; border: 4px solid black; padding 10px; background: black; margin: 10px"
);

console.log(
  `%c ${arrayNumbers}`,
  "color:darkblue; border: 4px solid darkred; padding 10px; background: white; margin: 10px"
);

console.log(arraySkillerNames);
console.log(object);
