// Nome e Altura
// Elaborar um programa que armazene o nome e a altura de 15 pessoas, por meio do uso de
// registros. O programa deverá ser manipulado por um menu que execute as seguintes etapas:

// a) Cadastrar os 15 registros.
// b) Apresentar os registros (nome e altura) das pessoas menores ou iguais a 1.5m.
// c) Apresentar os registros (nome e altura) das pessoas que sejam maiores que 1.5m.
// d) Apresentar os registros (nome e altura) das pessoas que sejam maiores que 1.5m e menores que
// 2.0m.
// e) Apresentar a média extraída de todas as alturas armazenadas.
// f) Sair do programa.

class Altura {
    constructor(nome, altura) {
        this.nome = nome;
        this.altura = altura;
    }
}

// função menu
function inicio() {
    let opcao;
    do {
        opcao = parseInt(prompt(
            "O que você gostaria de fazer?\n" +
            "[1] Cadastrar\n" +
            "[2] Menores ou Iguais a 1.5m\n" +
            "[3] Maiores que 1.5m\n" +
            "[4] Entre 1.5m e 2.0m\n" +
            "[5] Média das Alturas\n" +
            "[6] Sair"
        ));

        switch (opcao) {
            case 1:
                cadastrar();
                break;
            case 2:
                menoresOuIguaisA15();
                break;
            case 3:
                maioresQue15();
                break;
            case 4:
                entre15e20();
                break;
            case 5:
                mediaDasAlturas();
                break;
            case 6:
                sair();
                break;
            default:
                alert("Opção inválida! Tente novamente.");
        }
    } while (opcao !== 6);
}

// array para armazenar os registros de 15 pessoas
let pessoas = [];

// função para cadastrar pessoas
function cadastrar() {
    for (let i = 0; i < 15; i++) {
        let nome = prompt('Digite o nome da pessoa ' + (i + 1) + ':');
        let altura = parseFloat(prompt('Digite a altura da pessoa ' + (i + 1) + ':'));
        let pessoa = new Altura(nome, altura);
        pessoas.push(pessoa);
    }
}

// função para apresentar pessoas menores ou iguais a 1.5m
function menoresOuIguaisA15() {
    let mensagem = 'Pessoas menores ou iguais a 1.5m:\n';
    for (let pessoa of pessoas) {
        if (pessoa.altura <= 1.5) {
            mensagem += pessoa.nome + ', ' + pessoa.altura + 'm\n';
        }
    }
    if (mensagem === 'Pessoas menores ou iguais a 1.5m:\n') {
        mensagem = 'Nenhuma pessoa encontrada.';
    }
    alert(mensagem);
}

// função para apresentar pessoas maiores que 1.5m
function maioresQue15() {
    let mensagem = 'Pessoas maiores que 1.5m:\n';
    for (let pessoa of pessoas) {
        if (pessoa.altura > 1.5) {
            mensagem += pessoa.nome + ', ' + pessoa.altura + 'm\n';
        }
    }
    if (mensagem === 'Pessoas maiores que 1.5m:\n') {
        mensagem = 'Nenhuma pessoa encontrada.';
    }
    alert(mensagem);
}

// função para apresentar pessoas entre 1.5m e 2.0m
function entre15e20() {
    let mensagem = 'Pessoas entre 1.5m e 2.0m:\n';
    for (let pessoa of pessoas) {
        if (pessoa.altura > 1.5 && pessoa.altura < 2.0) {
            mensagem += pessoa.nome + ', ' + pessoa.altura + 'm\n';
        }
    }
    if (mensagem === 'Pessoas entre 1.5m e 2.0m:\n') {
        mensagem = 'Nenhuma pessoa encontrada.';
    }
    alert(mensagem);
}

// função para calcular a média das alturas
function mediaDasAlturas() {
    let soma = 0.0;
    for (let pessoa of pessoas) {
        soma += pessoa.altura;
    }
    if (pessoas.length > 0) {
        let media = soma / pessoas.length;
        alert('Média das alturas: ' + media.toFixed(2) + 'm');
    } else {
        alert('Nenhum registro encontrado.');
    }
}

//função cadastrar
function cadastrar(){
    let nome
}

// função para sair
function sair() {
    alert("Saindo do programa. Até logo!");
}

// chama a função principal para iniciar o programa
inicio();
