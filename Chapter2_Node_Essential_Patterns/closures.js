const inicia = ()  => {
  const nombre = "Mozilla";
  const muestraNombre = () => {
    console.log(nombre);
  }
  muestraNombre();
}
inicia();


const creaFunc = () => {
  var nombre = "Mozilla CreaFunc";
  const muestraNombre = () => {
    console.log(nombre);
  }
  return muestraNombre;
}

const miFunc = creaFunc();
miFunc();



const creaSumador = (x) => {
  return (y) => {
    return x + y;
  };
}

var suma5 = creaSumador(5);
var suma10 = creaSumador(10);

console.log(suma5(2));  // muestra 7
console.log(suma10(2)); // muestra 12
