// QUI-GON JINN está encargado de revisar un arreglo
// de 20 sables de luz y contabilizar la cantidad de sables que
// tienen energías menores a 20 Joules.

// Nota: el formato de cada sable es:
// cable={
// color:v erde,
//  energía: 50 ,
//  portafor: Obi Wan
// }




sables = [];
sablesMenoresa20 = [];

for(i=0;i<=40;i++){
    sable = {
        color: "verde",
        energia: i,
        portador: "obiwan"
    }

    sables.push(sable)
    
}



sables.forEach(sable => {
    if(sable.energia>20){
        sablesMenoresa20.push(sable);
    }
});

console.log(sablesMenoresa20.length);



