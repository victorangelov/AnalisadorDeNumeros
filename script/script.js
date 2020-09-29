let num = window.document.querySelector('input#txtnum')
let lista = window.document.querySelector('select#flista')
let res = window.document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n) != -1)){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        window.alert(`Tudo ok`)
    }else{
        window.alert('Valor inválido ou já encontrado na lista')
    }
}