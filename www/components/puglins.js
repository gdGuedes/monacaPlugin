$(document).on("click", "#alerta", function() {
    function retorno() {
        alert("Você aceitou o aviso.");
    }
    alert("Selecione sua opção", retorno, "Aviso", "Aceito");
});

$(document).on("click", "#confirme", function() {
    function confirma(buttonIndex){
        if (buttonIndex === 1) {
            alert("Você escolheu a opção A.");
        } else {
            alert("Você escolheu a opção B.");
        }
    }
    confirm("Escolha A ou B", confirma, "Escolha:", ['A', 'B']);
});

$(document).on("click", "#beep", function(){
    beep(4);
});
