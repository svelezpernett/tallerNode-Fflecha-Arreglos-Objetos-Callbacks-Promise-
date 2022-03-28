// Watto paga a su personal de ventas un salario de
// 3500000 mensuales, más una comisión de 1500000 por cada
// nave vendida, menos el 5% de deducciones aplicada solo a las
// comisiones. Codifica un programa que calcule e imprima el
// salario mensual de un vendedor dado;



// function calcularSalario(nombre, salarioMensual, navesVendidas){
//     let salarioTotal = salarioMensual + (navesVendidas*1500000) - (((navesVendidas*1500000)*5)/100)
//     return salarioTotal;
// }


// console.log(calcularSalario("Juan", 3500000, 1))


let calcularSalario = (nombre, salarioMensual, navesVendidas) => salarioTotal = salarioMensual + (navesVendidas*1500000) - (((navesVendidas*1500000)*5)/100);


let salario = calcularSalario("Juan", 3500000, 1);

console.log(salario);
