//configuração do calendário
$('#inputBirthDate').datepicker({
    format: "dd/mm/yyyy",
    language: "pt-BR"
});

//esconde o botão submit
$('#btnsubmit').hide();

//Exibe ou inibe o botão submit quando os campos estão ou não preenchidos
$('#frmPersonalData').change(function() {
    var passed=true;
    $("input").each(function(){
        if(!this.checkValidity()){passed=false;}
    });
    if(passed){ $('#btnsubmit').show();}
    else{       $('#btnsubmit').hide();}    
});

// Set a cookie com o primeiro nome do aluno
$("#frmPersonalData").submit(function( event ) {
    firstName = $("#inputName1").val();
    $.cookie('fname', firstName, { path: '/' });
});
