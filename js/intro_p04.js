
const infoData = ["Segurança da Informação.", "Boatos.", "Golpes.", "Ataques na Internet.", "Malwares.", "Privacidade.", "Redes Sociais.", "Mecanismos de Segurança."]

function DisplayLoad(txt){
    $("#cursos").html(txt);
}

function InitCourse(){
    $("#continuar").removeClass("disabled");
    $("#textoSeguranca").html(`<p><strong>Inicializando treinamento em Segurança da Informação v.2.021</strong><br><span class="text-info">Instalação completa.</span></p>`);
}
last = infoData.length-1
console.log(infoData.length);
var time = 800;
$(infoData).each(function(i) {
    setTimeout( function(){ 
        DisplayLoad(infoData[i]) 
        if (i == last){
            console.log("entrou");
            InitCourse();
        }
    }, time)
    
    time += 800;
});

