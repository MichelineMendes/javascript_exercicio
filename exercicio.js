
/*
Código de Micheline Mendes - P2 - A - EXERCÍCIO 01 em 30 de agosto de 2022
Os  comentários feitos no código são para em ajudar  a lembrar depois
*/

var i, novaAltura, sexo, maiorAltura = 0, menorAltura = 0, mulheres = 0, homens = 0, mediaHomens = 0, contaMulheres = 0, contaHomens = 0;

            for(i = 1 ;i <= 15; i++) {        
                novaAltura = parseFloat(prompt("Informe sua altura["+i+"]:")); // parseFloat converte em numero float
                sexo = prompt("Sexo: M ou F:").toUpperCase(); // .toUpperCase() coverte a resposta em maiúsculas


                if(i == 1) {
                    menorAltura = novaAltura;
                } if(novaAltura > maiorAltura) { 
                    maiorAltura = novaAltura;
                } if(novaAltura < menorAltura) { 
                    menorAltura = novaAltura;
                } if(sexo == 'F') {
                    mulheres += novaAltura; //aqui vai somar as alturas de todas as mulheres
                    contaMulheres++;// aqui vai contar quantas mulheres
                } else if(sexo == 'M') {
                    homens += novaAltura;
                    contaHomens++;
                }
                  if (contaHomens > 0){
                     mediaHomens = (homens/contaHomens).toFixed(2); // .toFixed() define numero de casas decimais dentro do parênteses
                   }
            }
            mediaHomens = (homens/contaHomens).toFixed(2); // .toFixed() define numero d casas decimais dentro do parênteses
            alert("A maior altura é: "+maiorAltura +"metros"); 
            alert("A menor altura é: "+menorAltura +"metros");
            alert("A altura média de homens é de: "+mediaHomens);
            alert("O número de mulheres é de : "+contaMulheres);


