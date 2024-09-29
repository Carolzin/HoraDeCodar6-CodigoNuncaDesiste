// Agenda
// Considerando a necessidade de desenvolver uma agenda que contenha nomes, endereços e telefones de 10 pessoas, defina a estrutura de registro apropriada, o diagrama de blocos e a codificação de um programa que por meio do uso de um menu de opções, execute as seguintes etapas:

// a) Cadastrar os 10 registros.
// b) Pesquisar um dos 10 registros de cada vez pelo campo nome (usar o método seqüencial).
// c) Classificar por ordem de nome os registros cadastrados.
// d) Apresentar todos os registros.
// e) Sair do programa de cadastro.

// criando objeto para os contatos da agenda
class Registro {
    constructor(nome, endereco, telefone) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
    }
}

// função do menu inicial
function inicio() {
    let opcao;
    do {
        opcao = parseInt(prompt(
            "O que você gostaria de fazer?\n" +
            "[1] Cadastro\n" +
            "[2] Pesquisa\n" +
            "[3] Classificar\n" +
            "[4] Listar\n" +
            "[5] Sair"
        ));

        switch (opcao) {
            case 1:
                cadastrar();
                break;
            case 2:
                pesquisarRegistro();
                break;
            case 3:
                classificarRegistros();
                break;
            case 4:
                listar();
                break;
            case 5:
                sair();
                break;
            default:
                alert("Opção inválida! Tente novamente.");
        }
    } while (opcao !== 5);
}

// array para armazenar registros
let registros = [];

// função para cadastrar pessoas na agenda
function cadastrar() {
    for (let i = 0; i < 10; i++) {
        let nome = prompt("Digite o nome da pessoa " + (i + 1) + ":");
        let endereco = prompt("Digite o endereço da pessoa " + (i + 1) + ":");
        let telefone = prompt("Digite o telefone da pessoa " + (i + 1) + ":");

        let registro = new Registro(nome, endereco, telefone);
        registros.push(registro);
    }
}

// função para pesquisar registros
function pesquisarRegistro() {
    let nome = prompt("Digite o nome para pesquisar: ");
    for (let registro of registros) {
        if (registro.nome.toLowerCase() === nome.toLowerCase()) {
            alert("Nome: " + registro.nome + "\nEndereço: " + registro.endereco + "\nTelefone: " + registro.telefone);
            return;
        }
    }
    alert("Registro não encontrado.");
}

// função para classificar registros
function classificarRegistros() {
    registros.sort((a, b) => a.nome.localeCompare(b.nome));
    alert("Registros classificados com sucesso.");
}

// função para listar registros
function listar() {
    apresentarRegistros();
}

// função para apresentar registros
function apresentarRegistros() {
    if (registros.length === 0) {
        alert("Nenhum registro encontrado.");
        return;
    }

    let mensagem = "";
    for (let registro of registros) {
        mensagem += "Nome: " + registro.nome + "\n" +
            "Endereço: " + registro.endereco + "\n" +
            "Telefone: " + registro.telefone + "\n" +
            "------------------------\n";
    }
    alert(mensagem);
}


// função para sair
function sair() {
    alert("Saindo do programa. Até logo!");
}

// chama a função inicial para iniciar o programa
inicio();
