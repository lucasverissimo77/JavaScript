//Sistema Simples em JS de Instituição de Ensino
//Grupo KodeForge www.kodeforge.com.br
//Criado Por Lucas Verissimo e Kelvens Alves
//Versão 1.0

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const lista_positivo = ["sim", "s", "Sim", "SIM", "S", "SI", "Si", "si"]
const lista_negativo = ["nao", "n", "Nao", "NAO", "N", "NA", "na", "não", "Não", "NÃO", "NÃo"]

const readline = require("readline")
const entrada = readline.createInterface ({
    input : process.stdin,
    output : process.stdout
});

function exc_aluno(alunos) {
    console.log("=== Cancelamento de Registro ===\n")
    alunos.forEach((aluno, indice) => {
        console.log(indice += 1, aluno, "\n");
    });
    const indice_remover = Number(numero_registro) - 1
    entrada.question("Digite o número de registro do aluno para remover o registro do aluno", (numero_registro) => {
        if (indice_remover >= 0 && indice_remover < alunos.length) {
            alunos.splice(indice_remover, 1);
            console.log("Registro removido com sucesso!");
        }
        else {
            console.log("Número de registro inválido")
        }
    })
}

function proc_aluno(alunos) {
    console.log("=== Procura de Aluno ===\n")
    entrada.question("Digite o nome do aluno que você deseja saber se está cadastrado\n>   ", (aluno_procurado) => {
        if (aluno_procurado in alunos) {
            return `Aluno\n>  ${aluno_procurado}
            foi encontrado. Nº de Registro\n>  ${alunos[aluno_procurado]}`
        }
        else {
            console.log("O aluno não tem registro ou o sistema ainda não atualizou")
            console.log("Voltando ao Menu")
            sleep(3500)
            main()
        }
    })
}

function list_alunos(alunos) {
    console.log("=== Lista de Alunos ===\n")
    alunos.forEach((aluno, indice) => {
        console.log(indice += 1, aluno, "\n");
    });
    entrada.question("Digite Enter para voltar ao Menu principal", (resposta_usuario) => {
        console.log("Voltando ao Menu Principal...")
        sleep(3500);
        main();
    });
}

function cad_aluno(alunos) {
    console.log("=== Cadastro de Alunos ===\n")
    entrada.question("Digite o nome do aluno que você quer cadastrar \n>  ", (aluno_cad) => {
        alunos.push(aluno_cad)
        entrada.question("Quer adicionar mais algum aluno? \n>  ", (resposta_usuario) =>{
            for (; lista_positivo.includes(resposta_usuario); ) {
                entrada.question("Digite o nome do(a) aluno(a)\n>  ", (aluno_cad) => {
                    alunos.push(aluno_cad)
                    entrada.question("Quer adicionar mais algum aluno? \n>  ", (nova_resposta) => {
                        nova_resposta = resposta_usuario;

                        if (lista_negativo.includes(resposta_usuario)) {
                            main()
                        }
                        else {
                            console.log("Comando não reconhecido, voltando para o menu principal")
                            console.log("Carregando")
                            sleep(5000)
                            main()
                        };
                    });
                });
                break;
            }
            if (lista_negativo.includes(resposta_usuario)) {
                main();
            }
            else {
                console.log("Comando não reconhecido, voltando para o menu principal");
                console.log("Carregando");
                sleep(5000);
                main();
            };
        });
    });
}

function main(lista_alunos) {
    let lista_alunos = ["Kelvens", "Bryan corno", "Lucas Del Valle", "Nathan borracha fraca", "Mati Leao"];
    console.log("\n=== Instituição KodeForge ===\n");
    console.log("==> Opções");
    console.log("Opção 1: Cadastrar Alunos");
    console.log("Opçaõ 2: Listar Alunos");
    console.log("Opção 3: Procurar Aluno");
    console.log("Opção 4: Excluir aluno");
    console.log("Opção 5: Sair")
    entrada.question("\nDigite a Opção que o(a) senhor(a) deseja\n>  ", (resposta_usuario) => {
        console.log("Carregando...")
        sleep(3000)
        switch (Number(resposta_usuario)) {
            case 1:
                console.log("Carregando opção 1...")
                console.clear()
                cad_aluno(lista_alunos)
                break;
            case 2:
                console.log("Carregando opção 2...")
                sleep(3500)
                console.clear();
                list_alunos(lista_alunos);
                break;
            case 3:
                console.log("Carregando opção 3...")
                sleep(3500)
                console.clear()
                console.log(proc_aluno(lista_alunos))
                break;
            case 4:
                console.log("Carregando opção 4...");
                sleep(3500);
                console.clear();
                exc_aluno(lista_alunos);
                break;
            case 5:
                console.log("Carregando opção 5...");
                console.log("Encerrando Sistema")
                sleep(3500);
                console.clear()
                break;
        };
    });
};
main()