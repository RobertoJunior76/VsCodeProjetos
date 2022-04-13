/*
var n1 = 10;
var n2 = 20;
var n3 = 30;


function soma(n1, n2, n3){
    return n1+n2+n3;
    
}
 
console.log(soma(n1, n2, n3));
*/

/*
function maiorMenor(){
    for (var i = 0; i < arguments.length; i++){
        if (i == 0){
            maior = arguments[i];
            menor = arguments[i];

        }
        if (maior < arguments[i]){
            maior = arguments[i];
        
        }
        if (menor > arguments[i]){
            menor = arguments[i];

        }

    }
    console.log(maior);
    console.log(menor);
    
}

maiorMenor(10, 2, 7, 9, 15)
*/

/*
array = [];
function numeros() {
    for (var i = 0; i < arguments.length; i++) {
        array.push(arguments[i]);
    }
    console.log(array.join(", "));

    
}
numeros(1, 6, 10, 93, 202, 43, 56);
*/

/*
array = [];
function numeros() {
    for (var i = 0; i < arguments.length; i++) {
        array.push(arguments[i]);
    }
    console.log(array.join(", "));
    console.log(array.reverse().join(", "));
    
}
numeros(1, 6, 10, 93, 202, 43, 56);
*/

var salario = 0;
var novoSalario;
var reajuste;
var percentualReajuste;
var valorAumentoSalario;

function reajuste(salario) {
    if (salario <= 280) {
        novoSalario = (salario * 0.2) + salario;
        percentualReajuste = "20%";
        valorAumentoSalario = novoSalario - salario;

    }
    else if (salario > 280 && salario <=700){
        novoSalario = (salario * 0.15) + salario;
        percentualReajuste = "15%";
        valorAumentoSalario = novoSalario - salario;
    }
    else if (salario > 700 && salario <=1500) {
        novoSalario = (salario * 0.1) + salario;
        percentualReajuste = "10%";
        valorAumentoSalario = novoSalario - salario;
    }
    else {
        novoSalario = (salario * 0.05) + salario;
        percentualReajuste = "5%";
        valorAumentoSalario = novoSalario - salario;
    }
    console.log("Novo Salário: " + novoSalario);
    console.log("Salário antes do aumento: " + salario);
    console.log("Percentual de Reajuste: " + percentualReajuste);
    console.log("Valor do Aumento no Salário: " + valorAumentoSalario);

}
reajuste(500);
