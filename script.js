// window.alert("ATENÇÃO!! esse site utiliza fórmula para simular um empréstimo com juros reais apenas para fins acadêmicos e não subistitui qualquer ferramenta regularizada ou um contador profissional")
let f = document.getElementById("formulário")

f.addEventListener("submit", function (a){
    a.preventDefault()

    let v1 = parseFloat((document.getElementById("empréstimo").value).replace(',','.'))
    let v2 = Number(document.getElementById("parcelas").value)
    let taxa = parseFloat((document.getElementById("tax").value).replace(',', '.'))

    let result = Number((((1+taxa/100)**v2*(taxa/100))/((1+taxa/100)**v2-1))*v1)


    let prest = document.getElementById("prestação")
    let tfinal = document.getElementById("total")

    prest.innerText = (result.toLocaleString('pt-br', {style: 'currency', currency: 'brl'}))

    tfinal.innerText = ((v2*result).toLocaleString('pt-br', {style: 'currency', currency: 'brl'}))
})