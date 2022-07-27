const validar = () => {
  let validation = false;
  let value = parseInt(prompt("Ingrese el numero"));
  while (validation == false) {
    if (isNaN(value)) {
      console.log("El valor no es numerico, por favor vuelva a ingresar");
      value = parseInt(prompt("Ingrese el  numero"));
    } else {
      validation = true;
    }
  }
  return value;
};

const compare = (firstNumberReceived, secondNumberReceived) => {
  if (firstNumberReceived > secondNumberReceived) {
    console.log(
      `El primer numero ingresado ${firstNumberReceived} es el mayor`
    );
  } else if (secondNumberReceived > firstNumberReceived) {
    console.log(
      `El segundo numero ingresado ${secondNumberReceived} es el mayor`
    );
  } else {
    console.log(`Ambos numeros son iguales`);
  }
};

const firstNumberReceived = validar();
console.log("Primer numero", firstNumberReceived);
const secondNumberReceived = validar();
console.log("Segundo numero", secondNumberReceived);

compare(firstNumberReceived, secondNumberReceived);
