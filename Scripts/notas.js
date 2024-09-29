// criando objeto Aluno
class Aluno {
    constructor(nome, nota1, nota2, nota3, nota4) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
        this.media = (nota1 + nota2 + nota3 + nota4) / 4;
        this.situacao = this.media >= 5 ? "Aprovado" : "Reprovado";
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
            "[4] Apresentar todos os registros\n" +
            "[5] Sair"
        ));

        switch (opcao) {
            case 1:
                cadastrar();
                break;
            case 2:
                pesquisar();
                break;
            case 3:
                classificar();
                break;
            case 4:
                apresentarAlunos();
                break;
            case 5:
                sair();
                break;
            default:
                alert("Opção inválida! Tente novamente.");
        }
    } while (opcao !== 5);
}

// função para cadastrar alunos
let alunos = [];
function cadastrar() {
    for (let i = 0; i < 20; i++) {
        let nome = prompt("Digite o nome do aluno " + (i + 1) + ":");
        let nota1 = parseFloat(prompt("Insira a primeira nota: "));
        let nota2 = parseFloat(prompt("Insira a segunda nota: "));
        let nota3 = parseFloat(prompt("Insira a terceira nota: "));
        let nota4 = parseFloat(prompt("Insira a quarta nota: "));

        let aluno = new Aluno(nome, nota1, nota2, nota3, nota4);
        alunos.push(aluno);
    }
}

// função para pesquisar alunos
function pesquisar() {
    let nomePesquisa = prompt("Digite o nome do aluno a pesquisar: ");
    for (let aluno of alunos) {
        if (aluno.nome.toLowerCase() === nomePesquisa.toLowerCase()) {
            alert("Aluno encontrado!\n" +
                  "Nome: " + aluno.nome + "\n" +
                  "Média: " + aluno.media.toFixed(2) + "\n" +
                  "Situação: " + aluno.situacao);
            return; 
        }
    }
    alert("Aluno não encontrado!");
}

// função para classificar alunos
function classificar() {
    alunos.sort((a, b) => a.nome.localeCompare(b.nome));
    alert("Alunos classificados por nome com sucesso.");
}

// função para apresentar todos os registros
function apresentarAlunos() {
    if (alunos.length === 0) {
        alert("Nenhum registro encontrado.");
        return;
    }

    let mensagem = "";
    for (let aluno of alunos) {
        mensagem += "Nome: " + aluno.nome + "\n" +
                    "Média: " + aluno.media.toFixed(2) + "\n" +
                    "Situação: " + aluno.situacao + "\n" +
                    "------------------------\n";
    }
    alert(mensagem);
}

// função para sair
function sair() {
    alert("Saindo do programa. Até logo!");
}

// chama a função inicio para iniciar o programa
inicio();
