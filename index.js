function verificarIdadeBtn(){
    var idade= window.prompt("Qual a sua idade?")

if (idade === null){
    window.alert("operação cancelada pelo usuário")

} else if (isNaN (idade) || idade === ""){
    
} else if (idade >= 18) {
    window.alert("Você é maior de idade.");
} else {
    window.alert("Você é menor de idade.");
}

}

document.getElementById ("verificarIdadeBtn").addEventListener("click", verificarIdadeBtn)

