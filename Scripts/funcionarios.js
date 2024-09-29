// Funcionários
// Considerando os registros de 20 funcionários, contendo os campos: matrícula, nome e salário,
// desenvolver um programa que, por meio de um menu, execute as seguintes etapas:

// a) Cadastrar os 20 empregados e classificar os registros por número de matrícula.
// b) Pesquisar um determinado empregado pelo número de matrícula.
// c) Apresentar de forma ordenada (por matrícula) os registros dos empregados que recebem salários
// acima de R$1.000,00.
// d) Apresentar de forma ordenada (por matrícula) os registros dos empregados que recebem salários
// abaixo de R$1.000,00.
// e) Apresentar de forma ordenada (por matrícula) os registros dos empregados que recebem salários
// iguais a R$1.000,00.
// f) Sair do programa.

// classe para funcionários
class Funcionarios {
    constructor(matricula, nome, salario) {
        this.matricula = matricula;
        this.nome = nome;
        this.salario = salario;
    }
}

// array para armazenar os funcionários
let funcionarios = [];

// função para mostrar o menu e executar as opções
function inicio() {
    let opcao;
    do {
        opcao = parseInt(prompt(
            "O que você gostaria de fazer?\n" +
            "[1] Cadastrar\n" +
            "[2] Pesquisar\n" +
            "[3] Mostrar salários acima de R$1.000,00\n" +
            "[4] Mostrar salários abaixo de R$1.000,00\n" +
            "[5] Mostrar salários iguais a R$1.000,00\n" +
            "[6] Sair\n"
        ));

        switch (opcao) {
            case 1:
                cadastrar();
                break;
            case 2:
                pesquisar();
                break;
            case 3:
                mostrarSalariosAcima(1000);
                break;
            case 4:
                mostrarSalariosAbaixo(1000);
                break;
            case 5:
                mostrarSalariosIguais(1000);
                break;
            case 6:
                sair();
                break;
            default:
                alert("Opção inválida! Tente novamente.");
        }
    } while (opcao !== 6);
}

//função para cadastrar funcionários
function cadastrar() {
    for (let i = 0; i < 20; i++) {
        let matricula = prompt('Digite o nome da pessoa ' + (i + 1) + ':');
        let nome = prompt("Digite o nome do funcionário: ");
        let salario = parseFloat(prompt("Digite o salário do funcionário: "));

        let funcionario = new Funcionarios(matricula, nome, salario);
        funcionarios.push(funcionario);
    }
    //ordenar por matrícula  
    funcionarios.sort((a, b) => a.matricula.localeCompare(b.matricula));
    alert("Funcionários cadastrados com sucesso!");
}

//função para pesquisar funcionário pela matrícula
function pesquisar() {
    let matricula = prompt("Digite a matrícula do funcionário: ");
    for (let funcionario of funcionarios) {
        if (funcionario.matricula === matricula) {
            alert("Funcionário encontrado!\n" +
                "Nome: " + funcionario.nome + "\n" +
                "Matrícula: " + funcionario.matricula + "\n" +
                "Salário: R$" + funcionario.salario.toFixed(2));
            return;
        }
    }
    alert("Funcionário não encontrado!");
}

//unção para mostrar funcionários com salários acima de 1000
function mostrarSalariosAcima(valor) {
    let resultado = [];
    for (let i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].salario > valor) {
            resultado.push(funcionarios[i]);
        }
    }
    if (resultado.length === 0) {
        alert("Nenhum funcionário encontrado acima de R$" + valor.toFixed(2) + ".");
    } else {
        let mensagem = "Funcionários com salários acima de R$" + valor.toFixed(2) + ":\n";
        for (let f of resultado) {
            mensagem += "Nome: " + f.nome + ", Matrícula: " + f.matricula + ", Salário: R$" + f.salario.toFixed(2) + "\n";
        }
        alert(mensagem);
    }
}

//função para mostrar funcionários com salários abaixo de 1000
function mostrarSalariosAbaixo(valor) {
    let resultado = [];
    for (let i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].salario < valor) {
            resultado.push(funcionarios[i]);
        }
    }
    if (resultado.length === 0) {
        alert("Nenhum funcionário encontrado abaixo de R$" + valor.toFixed(2) + ".");
    } else {
        let mensagem = "Funcionários com salários abaixo de R$" + valor.toFixed(2) + ":\n";
        for (let f of resultado) {
            mensagem += "Nome: " + f.nome + ", Matrícula: " + f.matricula + ", Salário: R$" + f.salario.toFixed(2) + "\n";
        }
        alert(mensagem);
    }
}

//função para mostrar funcionários com salários iguais a 1000
function mostrarSalariosIguais(valor) {
    let resultado = [];
    for (let i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].salario === valor) {
            resultado.push(funcionarios[i]);
        }
    }
    if (resultado.length === 0) {
        alert("Nenhum funcionário encontrado com salário igual a R$" + valor.toFixed(2) + ".");
    } else {
        let mensagem = "Funcionários com salários iguais a R$" + valor.toFixed(2) + ":\n";
        for (let f of resultado) {
            mensagem += "Nome: " + f.nome + ", Matrícula: " + f.matricula + ", Salário: R$" + f.salario.toFixed(2) + "\n";
        }
        alert(mensagem);
    }
}

//função para sair do programa
function sair() {
    alert("Saindo do programa. Até logo!");
}

//iniciar o programa
inicio();
