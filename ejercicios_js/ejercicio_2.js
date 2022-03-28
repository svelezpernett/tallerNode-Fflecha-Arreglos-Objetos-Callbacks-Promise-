// 2.PROBLEMA: Han solo y Chewbacca deben infiltrarse en el planeta yavin4 para robar uno de los planos de una de las 10 estrellas de la muerte, como distractor el imperio ha creado planos falsos y se tiene el dato de que el número de serie de estos planos falsos comienza por encima del número 10; es decir todos los planos falsos tienen números de serie consecutivos comenzando desde el #11. SOLO si se obtiene un plano verdadero Chewbacca y Han pueden abordar su nave y ejecutar un mensajeen consola avisando que han despegado Configure la rutina necesaria para despegar la nave utilizando callbacks

let recibir_palnos=(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,callback)=>setTimeout(function(){
        let planos=[n1,n2,n3,n4,n5,n6,n7,n8,n9,n10]
        let filtro_planos =planos.filter(function(plano){
            return(plano>=1 && plano <=10)
        })
        callback(filtro_planos)
    },2000)

let planos = recibir_palnos(5,20,2,150,200,250,300,400,500,1000, function(filtro_planos){
    if (filtro_planos.length > 0) {
        console.log("puedes irte, hay "+ filtro_planos.length +" planos")
    }else{
        console.log ("devuelvete")
    }
    
})