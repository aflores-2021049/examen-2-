function message1() {
    console.log('goku');
}

function message2() {
    console.log('Vegeta');
}

function message3() {
    console.log('gotens');
}

function message4() {
    console.log('pikoro');
}

function message5() {
    console.log('kakaroto');
}

var mensajes = [message1, message2, message3, message4, message5];

function mensajeAleatorio() {
    const i = Math.floor(Math.random() * mensajes.length);    
    mensajes[i]();
}

mensajeAleatorio();

//--------------------------------------------------------------------------
//Ejercicio #2

function esPalindromo(cadena) {
    cadena = cadena.replace(/ /g, '').toLowerCase();
  
   
    const cadenaInvertida = cadena.split('').reverse().join('');
  
   
    return cadena === cadenaInvertida;
  }
  
 
  console.log(esPalindromo("anilina")); 
  console.log(esPalindromo("oso")); 
  console.log(esPalindromo("Hola, mundo"));
  console.log(esPalindromo("racecar")); 

//--------------------------------------------------------------------------
//Ejercicio #3

function contarVocalesYConsonantes(cadena) {
    cadena = cadena.toLowerCase();
    let conteoVocales = 0;
    let conteoConsonantes = 0;
    const expresionVocal = /[aeiouáéíóú]/;
    for (let i = 0; i < cadena.length; i++) {
      const caracter = cadena[i];
  
      if (expresionVocal.test(caracter)) {
        conteoVocales++;
      } else if (caracter.match(/[a-z]/i)) {
        conteoConsonantes++;
      }
    }
    console.log("Número de vocales: " + conteoVocales);
    console.log("Número de consonantes: " + conteoConsonantes);
  }
  contarVocalesYConsonantes("Hola Mundo");

//--------------------------------------------------------------------------
//Ejercicio #4

//--------------------------------------------------------------------------
//Ejercicio #5


function contarDigitos(numero) {
    const numeroComoTexto = numero.toString();
    const cantidadDeDigitos = numeroComoTexto.length;
    return cantidadDeDigitos;
  }
  
 
  console.log(contarDigitos(12345)); 
  console.log(contarDigitos(987654321)); 
  console.log(contarDigitos(0)); 

//--------------------------------------------------------------------------
//Ejercicio #6

function calcularDiferenciaDeDias(fecha1, fecha2) {
    const fecha1Millis = fecha1.getTime();
    const fecha2Millis = fecha2.getTime();
    const diferenciaMillis = Math.abs(fecha1Millis - fecha2Millis);
  

    const dias = Math.floor(diferenciaMillis / (1000 * 60 * 60 * 24));
  
    return dias;
  }
  
  const fechaInicio = new Date('2023-09-02');
  const fechaFin = new Date('2023-09-10');
  
  const diferenciaDias = calcularDiferenciaDeDias(fechaInicio, fechaFin);
  console.log(`La diferencia en días entre las fechas es: ${diferenciaDias} días`);
  