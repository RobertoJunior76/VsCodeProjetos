

var i, altura, sexo, mulh = 0, hom = 0, mediahome = 0, contamulh = 0, contahom = 0, menoralt = 0, maioralt = 0;

for(var i = 1; i < 15; i++){
    altura = parseFloat(prompt("Insira a altura["+i+"]: "));
    sexo = prompt("Imsira o sexo [M/F]: ").toUpperCase().charAt(0);
    
    if(i == 1){
        menoralt = altura;
    } if(altura > maioralt) {
        maioralt = altura;
    } if(altura < menoralt) {
        menoralt = altura;
    } if(sexo == "F") {
        mulh += altura;
        contamulh++;
    } else if(sexo == "M") {
        hom += altura;
        contahom++;
    }
}
mediahome = hom/contahom;
mediamulh = mulh/contamulh;
alert("A maior altura é: "+maioralt);
alert("A menor altura é: "+menoralt);
alert("A média das alturas dos homens é: "+mediahome);
alert("O número de mulheres é: "+contamulh);
alert("O número de homens é: "+contahom);




console.log("hello mundo");



