// . PROBLEMA: Grogu ha iniciado su entrenamiento Jedi y debe activar un software que permita clasificar su dieta:
// alimento = {
//  nombre,
//  tipo (Puede ser vegetal, animal, insecto),
//  nivel de energía (números entre 100-500)

// }
// Cree un programa que permita recibir 50 alimentos diferentes y mediante una función primaria después de 5 segundos se  pueda obtener solo los alimentos de tipo vegetal que entreguen mas de 200 unidades de energía. Finalmente, una función callback debe permitir entregar la sumatoria de niveles de energía entregados por los alimentos vegetales consumidos en la dieta de Grogu.

let nombre_alimentos = ["Wasabi","Olivas verdes / Aceitunas verdes","Ocra / Quimbombó","Espárragos","Fideos cocidos","Pasta de espelta, cocida","Espaguetis integrales cocidos","Albaricoque"];
let tipo_alimentos=["vegetales", "carne", "pasta"]

let alimentos= []
for (i =0; i < 50; i++){
  let alimento ={}
  alimento.nombre_alimentos=(nombre_alimentos[Math.floor(Math.random()*nombre_alimentos.length)])
  alimento.tipo_alimentos=(tipo_alimentos[Math.floor(Math.random()*tipo_alimentos.length)])
  alimento.caloria=Math.floor(Math.random()*(min=100, max=500))
alimentos.push(alimento)
}

function filtrar_vegetales (alimentos,callback){
  setTimeout(function(){
      let vegetales = alimentos.filter(function(alimento){
          return(alimento.tipo_alimentos=="vegetales" && alimento.caloria>= 200)
      })
     callback (vegetales)
  },5000)
 
}
filtrar_vegetales(alimentos,function(vegetales){
  let  suma_calorias=0
  vegetales.forEach(function(vegetales){
    suma_calorias+=vegetales.caloria
  })
console.log(vegetales)
console.log(`el tota de calorias es : ${suma_calorias}`)
})


