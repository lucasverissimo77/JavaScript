const readline = require("readline");
const entrada = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
})


function ola_mundo() {
    let nome = "Lucas";
    let idade = 16;
    const cidade = "Rio de Janeiro";

    console.log("Olá Mundo me chamo " + nome + " " + "Tenho " + idade + " " + "anos e moro no estado " + cidade);
}


//Calculadora de soma, multiplicação, subtração e divisão
function calculadora_basica(numero1, numero2) {
    let resultado_subtracao = Number(numero1) - Number(numero2);
    let resultado_adicao = Number(numero1) + Number(numero2);
    let resultado_multiplicacao = Number(numero1) * Number(numero2);
    let resultado_divisao;
    if (numero1 >= numero2) {
        resultado_divisao = Number(numero1) / Number(numero2);
    }
    else if (numero2 >= numero1) {
        resultado_divisao= Number(numero2) / Number(numero1);
    }
    else if (numero1 <= 0 || numero2 <= 0) {
        resultado_divisao = "Não foi possivel fazer a divisão com número 0"
    }

    return `O resultado da adição foi: ${resultado_adicao}

O resultado da Subtração foi: ${resultado_subtracao}

O resultado da Multiplicação foi: ${resultado_multiplicacao}

O resultado da Divisão foi: ${resultado_divisao}`
}

function calculadora() {
    entrada.question("Digite um número: ", (numero1) =>{
        if (numero1 < 0) {
            console.log(`O número ${numero1} que você escolheu está indisponivel tente somente com números positivos ou iguais a zero`) 
            main()
        };
        entrada.question("Digite outro número: ", (numero2) => {
            if (numero2 < 0) {
                console.log(`O número ${numero2} que você escolheu está indisponivel tente somente com números positivos ou iguais a zero`)
                main()
            };

            console.log(calculadora_basica(numero1, numero2));
            entrada.close();
        });
    });
}


//Código para calcular descontos de uma loja
function loja_desconto(preco, desconto) {
    let total_desconto = Number(desconto) % Number(preco);
    let preco_total = Number(preco) - Number(total_desconto);
    return `O desconto adicionado foi de ${desconto}% (valor bruto do desconto: R$${total_desconto})e o produto ficou com preço total de R$${preco_total}`
}

function loja() {
    entrada.question ("Digite o preço do produto: ", (preco) => {
        if (preco <= 0) {
            console.log(`O Preço do produto que você colocou é invalido tente colocar um valor maior que R$0.00`)
            loja()
        };
        entrada.question ("Digite a porcentagem do desconto: ", (desconto) =>{
            if (desconto < 0) {
                console.log(`O desconto é inválido digite apenas desconto positivo`)
                loja()
            };

            console.log(loja_desconto(preco, desconto))
            entrada.close()
        });
    });
}


//Código de Calculadora de Temperatura
function calculadora_temperatura(c, local) {
    temperatura_fah = Number(c) * 1.8 + 32
    return `A temperatura no estado de ${local} em Fahrenheit é ${temperatura_fah}Fº`
}

function meteorologista() {
    entrada.question ("Digite a temperatura de onde você está em Celsius: ", (temperatura_celsius) => {
        entrada.question ("Digite a sua localidade (Ex: RJ, ES, SP...): ", (local) =>{
            console.log(calculadora_temperatura(temperatura_celsius, local))
        });
    });
}

//Código de Média de notas
function media(quantidade) {
    let nova_nota = 0;

    function pedir_nota(i) {
        if (i > Number(quantidade)) {
            let media_nota = nova_nota / Number(quantidade);
            console.log(`A média foi ${media_nota}`);
            return;
        }

        entrada.question(`Digite a ${i}º nota:`, (nota) => {
            nova_nota += Number(nota);
            pedir_nota(i + 1);
        });
    }

    pedir_nota(1)
}

function calculadora_media() {
    entrada.question("Digite quantas notas precisa para você saber a média: ", (quantidade_notas) => {
        media(quantidade_notas);
    });
}


//Função para verificar se a pessoa pode ter carteira de motorista
function verificar_idade(idade) {
    if (idade >= 18) {
        return `${idade} pode dirigir`
    }
    else if (idade <= 0) {
        return `A idade é inválida`
    }
    else {
        return `${idade} não pode dirigir`
    };
}

function carteira_motorista() {
    entrada.question("Digite a sua idade: ", (idade) => {
        console.log(verificar_idade(Number(idade)));
        entrada.close()
    });
}


//Função para ver se a pessoa pode votar
function verificar_titulo(idade) {
    if (idade >= 16 && idade < 60) {
        return `${idade} pode votar`
    }
    else if (idade >= 60) {
        return `${idade} pode votar mas não é obrigatório`
    }
    else if (idade <= 0) {
        return "Idade inválida para poder votar"
    }
    else {
        return `${idade} não pode votar por causa de sua idade`
    }
}

function titulo_eleitor() {
    entrada.question("Digite a sua idade para verificarmos no sistema se você pode votar: ", (idade) => {
        console.log(verificar_titulo(idade))
        entrada.close()
    })
}


//Função para descobrir qual número é maior dentro de uma lista
function descobrir_numero(numeros) {
    let maior = 0
    for (let numero of numeros) {
        if (numero > maior) {
            maior = numero
        }
    }
    return maior
}

function pedir_numero(i, quantidade_numeros, numeros) {
    if (i > Number(quantidade_numeros)) {
        console.log(descobrir_numero(numeros))
        return;
    }
    entrada.question(`Digite o ${i} número: `, (numero) => {
        numeros.push(Number(numero));
        pedir_numero(i + 1, quantidade_numeros, numeros)
    })
}

function descobrir_maior() {
    let numeros = [];
    entrada.question("Digite quantos números deseja colocar para sabermos o maior: ", (quantidade_numeros) => {
        pedir_numero(1, quantidade_numeros, numeros)
    });
}


//Função para descobrir se um ano é bissexto
function verificar_ano() {
    entrada.question("Digite o ano que o senhor quer saber se é Bissexto: \n>  ", (ano) => {
        if (Number(ano) % 4 === 0 || Number(ano) % 100 != 0 && Number(ano) % 400 === 0) {
            console.log(`O ano ${ano} é um ano Bissexto`);
        }
        else {
            console.log(`O ano ${ano} não é um ano Bissexto`);
        }
        entrada.close()
    });
}


//Novas Atualizações serão postadas abaixo! Lista de Exercicios no GitHub
