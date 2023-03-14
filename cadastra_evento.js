
function validarForm() {
    // Código de validação aqui
    validaDataEvento();
    validaDataNascimento();
    let registroEvento = { n_nome: "", c_cpf: "", n_nascimento: "", d_evento: "", no_evento: "" }
    registroEvento.n_nome = document.getElementById("nome").value;
    registroEvento.c_cpf = document.getElementById("cpf").value;
    registroEvento.n_nascimento = document.getElementById("nascimento").value;
    registroEvento.d_evento = document.getElementById("evento").value;
    registroEvento.no_evento = document.getElementById("n_evento").value;

    console.log(registroEvento);
}

function validaDataEvento() {
    let hoje = new Date(); //pega a data e hora atual
    //pega a data do formulário com o id data-evento
    console.log(hoje);
    let dataEvento = document.getElementById("evento").value;

    // Converte a string "dataEvento" em um objeto Date
    let data = new Date(Date.parse(dataEvento));
    /* o if abaixo compara a data atual com a data do evento
    com a função .getTime() que retorna os milissegundos da data atual
    retire os comentários de console.log abaixo e veja o resultado
    de como o if compara as datas */
    //console.log(data.getTime());
    //console.log(hoje.getTime());
    if (data.getTime() > hoje.getTime()) {
        console.log(`A data ${dataEvento} é maior que a data atual`);
    } else {
        console.log(`A data ${dataEvento} não é maior que a data atual`);
    }

}

function validaDataNascimento() {
    let hoje = new Date();
    //pega a data do formulário com o id data-nascimento
    //converte a string "dataNascimento" em um objeto Date
    let dataNascimento = new Date(document.getElementById("nascimento").value);
    //pega a data de hoje em milissegundos e subtrai o data de nascimento em milissegundos
    let idadeEmMilissegundos = hoje.getTime() - dataNascimento.getTime();
    //converte a idadeEmMilissegundos em anos
    let idadeEmAnos = idadeEmMilissegundos / (1000 * 60 * 60 * 24 * 365.25);
    //compara a idadeEmAnos com a idade do usuário
    if (idadeEmAnos >= 18) {
        console.log("A pessoa é maior de idade");
    } else {
        console.log("A pessoa é menor de idade");
    }
}