// 1.PROBLEMA: Yoda el maestro jedí, necesita asignar a sus aprendices Padawans 2 actividades dependiendo de la edad de ellos:
// • Manejo de la fuerza: Si el aprendiz es menor de 15 años
// • Manejo del sable de luz: Si el aprendiz es mayor de 15 años
// Inicialmente, se debe programar una función que asocie los datos de:
// {nombre, planeta, edad y estatura} de 1 Padawan a un objeto (10 segundos) y una vez este objeto sea creado se debe llamar a una función secundaria que clasifique y muestre en consola la actividad asignada al Padawan

//declarando la funcion principal 
let actividades = ["Manejo de la fuerza", "Manejo del sable de Luz"];
function crear_pandawan(nombre, planeta, edad, estatura, callback) {
  setTimeout(function () {
    //Proceso principal

    let pandawan = {
      nombre_pandawan: nombre,
      planeta_pandawan: planeta,
      estatura_pandawan: estatura,
      edad_pandawan: edad,
    };
    //llamadno al Callback
    callback(pandawan);
  }, 10000);
}

//llamo la funcion principal

crear_pandawan("Anakin Skywalker", "Coruscant", 16, 1.54, function (pandawan) {
  if (pandawan.edad_pandawan >= 15) {
    console.log(
      pandawan.nombre_pandawan,
      "su actividad es ",
      actividades[1],
      "tienes",
      pandawan.edad_pandawan,
      "años"
    );
  } else {
    console.log(
      pandawan.nombre_pandawan,
      "su actividad es ",
      actividades[0],
      "tienes",
      pandawan.edad_pandawan,
      "años"
    );
  }
});