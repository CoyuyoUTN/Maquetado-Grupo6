const arrayTasks = [12, 2, "Willy", 1, 22, 20, 17, 15, "Gon"];
console.table(arrayTasks);

const pop = arrayTasks.pop(); //Remueve el ultimo elemento del arreglo y lo devuelve.
console.log("Utilizando POP: ", pop);
console.table(arrayTasks);

const shift = arrayTasks.shift(); // Remueve el primer elemento del arreglo y lo devuelve
console.log("Utilizando Shift: ", shift);
console.table(arrayTasks);

const push = arrayTasks.push("NuevoElemento"); // Agregar un nuevo elemento al final del
console.log("Utilizando push: ", push); //arreglo y retorna la longitud.
console.table(arrayTasks);

const slice = arrayTasks.slice(0, -1); // retorna el rango de indices pasados por parametro
console.log("Utilizando Slice: ", slice); // no modifica el arreglo
console.table(arrayTasks);

const unshift = arrayTasks.unshift("1000"); // Agrega nuevo elemento al comienzo del arreglo
console.log("Utilizando Unshift", unshift); // retorna la nueva longitud
console.table(arrayTasks);

const reverse = arrayTasks.reverse(); // Da vuelta el arreglo
console.log("Utilizando Reverse", reverse); // retorna como queda
console.table(arrayTasks);

const join = arrayTasks.join("--+--"); // Transforma el arreglo en un String. Por defecto separa con comas
console.log("Utilizando Join", join); // sino con lo que pasemos por parametro.
console.table(arrayTasks);

const newArrayTask = ["concat1", "concat2"];
const concat = arrayTasks.concat(newArrayTask); // Retorna un nuevo array concatenado con el pasado
console.log("Utilizando concat", concat); // por parametro. No modifica el array
console.table(arrayTasks); // donde se efectua el metodo.

const longitud = arrayTasks.length; //No es una funcion como tal sino una propiedad
console.log("Utilizando lenght", longitud); // da la longitud del arreglo.
console.table(arrayTasks);

const orderArray = arrayTasks.sort(); // Ordena el arreglo yu lo modifica de menor a mayor
console.log("Ordernado", orderArray);
console.table(arrayTasks);

const map = arrayTasks.map((n) => n * 2); // retorno el arreglo modificado por al condicion del map
console.log("Utilizando map", map); // no modifica el arreglo
console.table(arrayTasks); // los strings los retorna como nan

const filter = arrayTasks.filter((n) => n == 1000);
console.log("Utilizando filter: ", filter); //Devuelve un array segun la condicion
console.table(arrayTasks); // No modifica el arreglo

const find = arrayTasks.find((n) => n == "perro");
console.log("Utilizando find: ", find); //Retorna un elemento si lo encuentro por la condicion
console.table(arrayTasks); // sino retorne undefined. No modifica el arreglo.

const findIndex = arrayTasks.findIndex((n) => n == "Willy");
console.log("Utilizando findIndex: ", findIndex); //Retorna la posicion de un elemento segun al condicion
console.table(arrayTasks); //  Si no existe retorna -1. No modifica el arreglo

const fill = arrayTasks.fill("Fill"); // Modifica el arreglo y rellena todos los espacios con lo
console.table(arrayTasks); // pasado por parametro
console.log("Utilizando Fill: ", fill);
