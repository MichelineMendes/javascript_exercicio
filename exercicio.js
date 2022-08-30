
/*
Código de Micheline Mendes - P2 - A - EXERCÍCIO 01 em 30 de agosto de 2022
Os  comentários feitos no código são para em ajudar  a lembrar depois
*/

var i, novaaltura, sexo, maioralt = 0, menoralt = 0, mulh = 0, homens = 0, mediahomens = 0, contamulh = 0, contahom = 0;

            for(i = 1 ;i <= 15; i++) {        
                novaaltura = parseFloat(prompt("Informe sua altura["+i+"]:")); // parseFloat converte em numero float
                sexo = prompt("Sexo: M ou F:").toUpperCase(); // .toUpperCase() coverte a resposta em maiúsculas


                if(i == 1) {
                    menoralt = novaaltura;
                } if(novaaltura > maioralt) { 
                    maioralt = novaaltura;
                } if(novaaltura < menoralt) { 
                    menoralt = novaaltura;
                } if(sexo == 'F') {
                    mulh += novaaltura; //aqui vai somar as alturas de todas as mulheres
                    contamulh++;// aqui vai contar quantas mulheres
                } else if(sexo == 'M') {
                    homens += novaaltura;
                    contahom++;
                }
            }
            mediahomens = (homens/contahom).toFixed(2); // .toFixed() define numero d casas decimais dentro do parênteses
            alert("A maior altura é: "+maioralt +"metros"); 
            alert("A menor altura é: "+menoralt +"metros");
            alert("A altura média de homens é de: "+mediahomens);
            alert("O número de mulheres é de : "+contamulh);



