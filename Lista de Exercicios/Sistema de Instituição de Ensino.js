//Sistema Simples em JS de Instituição de Ensino
//Grupo KodeForge www.kodeforge.com.br
//Criado Por Lucas Verissimo e Kelvens Alves
//Versão 1.0

const readline = require("readline")
const entrada = readline.createInterface ({
    input : process.stdin,
    output : process.stdout
});

function list_alunos(alunos) {
    console.log("=== Lista de Alunos ===\n")
    alunos.forEach((aluno, indice) => {
        console.log(indice += 1, aluno);
    });

}

function cad_aluno(alunos) {
    const lista_positivo = ["sim", "s", "Sim", "SIM", "S"]
    console.log("=== Cadastro de Alunos ===\n")
    entrada.question("Digite o nome do aluno que você quer cadastrar \n>  ", (aluno_cad) => {
        alunos.push(aluno_cad)
        entrada.question("Quer adicionar mais algum aluno? \n>  ", (resposta_usuario) =>{
            for (; lista_positivo.includes(resposta_usuario); ) {
                entrada.question("Digite o nome do(a) aluno(a)\n>  ", (aluno_cad) => {
                    alunos.push(aluno_cad)
                    entrada.question("Quer adicionar mais algum aluno? \n>  ", (nova_resposta) => {
                        nova_resposta = resposta_usuario;

                        if (!lista_positivo.includes(resposta_usuario)) {
                            main()
                        }
                    });
                });
                break;
            }
            if (!lista_positivo.includes(resposta_usuario)) {
                main();
            }
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
    entrada.question("\nDigite a Opção que o(a) senhor(a) deseja\n>  ", (resposta_usuario) => {
        switch (resposta_usuario){
            case "1":
                console.clear()
                cad_aluno(lista_alunos)
                break;
            case "2":
                console.clear();
                list_alunos(lista_alunos);
                break;
        };
    });
};
main()