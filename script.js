var btnSalvar = document.querySelector("#btn2");

btnSalvar.addEventListener("click", function (event){

    event.preventDefault();
    
    var formPrincipal = document.querySelector("#formPrincipal");
    console.log("CÓDIGO: " + formPrincipal.CodProd.value) //pegar o valor do codigo
    console.log("NOME: " + formPrincipal.Nome.value) //pegar o valor do NOME
    console.log("QUANTIDADE: " + formPrincipal.Quant.value) //pegar o valor do quantidade
    console.log("PREÇO: " + formPrincipal.PrecoUnit.value) //pegar o valor do preço
    console.log("TOTAL: " + formPrincipal.Total.value) //pegar o valor do total

    // CHAMANDO A FUNÇÃO DE BAIXO
    var linhatrr = criaLinha(formPrincipal);
    
    //SELECIONANDO A TABELA E O CAMPO DE INCLUSÃO
    var tabela = document.querySelector("#tbPessoas").querySelector("tbody")
    // MANDA O TR PERMANECER
    tabela.appendChild(linhatrr);

    formPrincipal.reset();
})


function criaLinha(formPrincipal){
    //CRIAR TR
    var linhatrr = document.createElement("tr");

    //CRIA TD CHAMANDO A FUNÇÃO 'criaColuna', PEGA O VALOR DO 'FORM' E COLOCA DENTRO DA TD E DENTRO DO TR
    linhatrr.appendChild(criaColuna(formPrincipal.CodProd.value));
    linhatrr.appendChild(criaColuna(formPrincipal.Nome.value));
    linhatrr.appendChild(criaColuna(formPrincipal.Quant.value));
    linhatrr.appendChild(criaColuna(formPrincipal.PrecoUnit.value));
    linhatrr.appendChild(criaColuna(formPrincipal.Total.value));

    return linhatrr;
}


function criaColuna(valor){
    var coluna = document.createElement("td");
    coluna.textContent = valor;

    return coluna;
}

