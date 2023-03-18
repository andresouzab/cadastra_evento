
function validarForm() {
    // Código de validação aqui
    validaDataEvento();
    validaDataNascimento();
    let eventos = [];
    let registroEvento = { n_nome: "", c_cpf: "", n_nascimento: "", d_evento: "", no_evento: "" }
    registroEvento.n_nome = document.getElementById("nome").value;
    registroEvento.c_cpf = document.getElementById("cpf").value;
    registroEvento.n_nascimento = document.getElementById("nascimento").value;
    registroEvento.d_evento = document.getElementById("evento").value;
    registroEvento.no_evento = document.getElementById("n_evento").value;

    // Verifica se já existe evento cadastrado.
    if (sessionStorage.getItem("vetor_eventos")){
        eventos = JSON.parse(sessionStorage.getItem("vetor_eventos"));
    }

    eventos.push(registroEvento);
    sessionStorage.setItem("vetor_eventos", JSON.stringify(eventos));

    console.log(eventos);
    listar();
    return true;
   
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


function listar(){
    var dados = document.getElementById("colunas");
    var registros = document.getElementsByTagName("tbody")[0];
    var eventos = JSON.parse(sessionStorage.getItem("vetor_eventos"));
    for (var i = 0; i < eventos.length; i++){
        var novaLinha = document.createElement("tr"); // Criar uma tag tr na tabela que vai ser apresentado a lista de contatos do Vetor
        registros.appendChild(novaLinha); // insere a tag tr criada
        novaLinha.innerHTML = dados.innerHTML; // insere as colunas do id="colunas"

        for (var indice in novaLinha.childNodes){   // Retorna os Nodes filhos da minha novaLinha
            var celula = novaLinha.childNodes[indice]; // verificar a tag
            if(celula.nodeName == "TD"){
            switch(celula.dataset.column){
                case "Nome":
                    celula.innerHTML = eventos[i]["n_nome"];
                    break;
                case "CPF":
                celula.innerHTML = eventos[i]["c_cpf"];
                    break;
                case "Nascimento":
                celula.innerHTML = new Date(eventos[i]["n_nascimento"]).toLocaleDateString("pt-BR", { timeZone: 'UTC' });
                    break;
                case "Data do Evento":
                        celula.innerHTML = new Date(eventos[i]["d_evento"]).toLocaleDateString("pt-BR", { timeZone: 'UTC' });
                     break;
                case "Evento":
                         celula.innerHTML = eventos[i]["no_evento"];
                     break;
            }}
        }


    }

}
