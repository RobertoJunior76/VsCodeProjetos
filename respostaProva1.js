/*
function parImpar(n) {
    if (n % 2 == 0) {
        console.log("O número  " + n + " é Par");
    }
    else {
        console.log("O número " + n + " é Ímpar");
    }
}
console.log(parImpar(15));
console.log(parImpar(40));
*/

var n = [12, 33, 10, 5];
console.log(n);

function novosNumeros(array) {
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i] * 2;
    }
    console.log(array);
}
novosNumeros(n);