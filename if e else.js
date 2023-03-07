// referencia
// const idade = 17;

// exemplo 01

// if (idade >= 18) {
//     console.log("é maior de idade");
// }
// else {
//     console.log("menor de idade");
// }
// console.log("fim de codigo");
// ________________________________


// exemplo 02 - encadeando if e else

// menor de 18
// maior de idade, menor que 65 anos = adulto
// maior que 65 anos = idosa

// if (idade < 18) {
//     console.log("menor de idade")
// } else if (idade <= 65) {
//     console.log("adulto");
// } else {
//     console.log("idosa");
// }
// _______________________________________

// exemplo 03 - cinema

const temIngresso = false;
const censura = 16;
const idade = 18;
const acompanhadaDosPais = false;

// if (temIngresso === true) {
//     if (idade >= censura) {
//         console.log("pode entrar")
//     } else {
//         console.log("barrada")
//     }
// } else {
//     console.log("barrada por falta de ingresso")
// }
// ____________________________________________


// exemplo 03 - usando E lógico (&&)

// if (temIngresso === true && idade >= censura) {
//     console.log("liberada");
// } else {
//     console.log("sem nocao");
// }
// _______________________________________________

// exemplo 03 - usando OU lógico (||)

// if (temIngresso === true) {
//     if (idade >= censura || acompanhadaDosPais === true) {
//         console.log("permitido");
//     } else {
//         console.log("nao permitido");
//     }
// } else {
//     console.log("nao permitido");
// }

// SOBRE NEGAÇÃO

// quano for negação buleano colocar no if (uma esclamação da variavel).
// exemplo: const acordada = true / if (!acordada) será o oposto
// _____________________________________________________________

// EXEMPLO 04 - TERNÁRIO

const saldo = 1;
const unidade = (saldo === 1 ? "Real" : "Reais");


// if (saldo === 1) {
//     console.log("real");
// } else {
//     console.log("reais");
// }

// usando o ternario

// console.log(unidade);

// resumindo: um ternario é a forma resumida de fazer o if
// ________________________________________________________________

// exercicios 05

const valorDoProduto = 100;
const numeroDeParcelas = 36;

// if (numeroDeParcelas === 1) {
//     // a vista tem 10% de desconto
//     const desconto = valorDoProduto * 10 / 100;
//     const valorApagar = valorDoProduto - desconto;

//     console.log(`voce deverá pagar R$ ${valorApagar} pois tem 10% de desconto`);
// } else {
//     const valorDaParcela = (valorDoProduto / numeroDeParcelas).toFixed(2);
//     console.log(`voce irá pagar ${numeroDeParcelas} parcelas de R$ ${valorDaParcela}`);
// }

if (numeroDeParcelas === 1) {
    // a vista tem 10% de desconto
    const desconto = valorDoProduto * 10 / 100;
    const valorApagar = valorDoProduto - desconto;

    console.log(`voce deverá pagar R$ ${valorApagar} pois tem 10% de desconto`);


} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
    const valorDaParcela = (valorDoProduto / numeroDeParcelas).toFixed(2);
    console.log(`voce irá pagar ${numeroDeParcelas} parcelas de R$ ${valorDaParcela}`);

} else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
    const juros = (valorDoProduto * (1 + 1 / 100) ** numeroDeParcelas).toFixed(2);
    const valorApagar = (juros / numeroDeParcelas).toFixed(2);
    console.log(`voce devera pagar ${numeroDeParcelas} parcelas de R$ ${valorApagar} totalizando R$ ${juros} devido a incidencia de juros`);
} else {
    console.log(`numero de parcela invalido`)
}
