var mn = "Quiz";
$(".dropdown-item").each(function() {
    if($(this).text() == mn) {
        $(this).addClass('active');            
    }                        
  });



$("#gabarito").hide();

function addQuestions(index, text){
    
    //Plota o html do quiz
    var quiz_html =`
    <section id="sec-${index}">
        <div class="row">
            <div class="col-12 mb-3">
                <h2>${index}/${total}</h2>
            </div>
            <div class="col-12">
                <div class="d-md-block">
                ${text}
                </div>
            </div>
            <div class="col-12 mt-4 form-check-group question" id="quiz-${index}" data-c="">
            </div>
            <div class="col-12 py-2 mt-4"> 
                <!--<a href="#" class="btn btn__disabled-form text-center cyberpunk glitched">CONFERIR</a>-->
            </div>
            <div class="col-sm-8" id="return-${index}">
                <h5>Resposta </h5>
                <i id="i-${index}"><span id="correct-${index}"></span></i>
                <span id="feedback-${index}"></span>
            </div>
            <div class="col-sm-4 d-flex align-items-center justify-content-center"><a href="#" type="button">
            <img src="../../img/seta_direita_ativa.png" alt="Próximo" class="img-fluid" id="next-${index}"></a>
            </div>
        </div>
    </section>`
    
    $(".aulas").append(quiz_html);
    
    $("#next-"+index).on("click",(() => {
        nextQuest(index);
    }));
}

function addOptions(i, index, option, value, type, correct, feedback){
    
    //Plota as alternativas do quiz
    var options_html=`
    <div class="quiz-opt${index} form-check">
        <input class="form-${type}-input" value="" type="${type}" name="flex${type}" id="opt${index}" data-v="${value}">
        <label class="form-${type}-label" for="opt${index}">
            ${option}
        </label>
    </div>`
    $("#quiz-"+i).append(options_html);
    
    //Verificar a questão a cada click
    $("#opt"+index).on("click",(() => {
        checkQuest("#quiz-"+i);
        $("#return-"+i).show();
        $("#next-"+i).show();
        $("#correct-"+i).html(correct);
        $("#feedback-"+i).html(feedback);
        
        a = $("#quiz-"+i).attr("data-c");
        if(a=="Correct"){
            $("#i-"+i).attr("class","text-success bi bi-check-circle-fill");
        }else{
            $("#i-"+i).attr("class","text-danger bi bi-x-circle-fill");}

        animation("#return-"+i,200);
        
    }));
    
    
    
}

//Navega para a próxima questão
function nextQuest(i){
        next = i+1;
        $("#sec-"+i).hide();
        if(total>=next){
            $("#sec-"+next).show();
        }
        else{
            $("#gabarito").show();
            showGabarito();
        }
}
//Marcar questão como Correta ou Incorreta
function checkQuest(el){
    $(el + "> .form-check > input").each(function() {
        v = "Correct"
        a = $(this).attr("data-v");
        c = $(this).prop("checked");
        if ((a == 1 && c == false) || (c == true && a == 0)){
            v = "Incorrect"
            $(el).attr("data-c",v);
            return false;
        }
    });
    $(el).attr("data-c",v);
}


function showGabarito(){
    progressbar(80,100);  
    for (var x = 1; x <= total; x++) {
        el = "#i-"+x;
        
        r = $(el).html();

        if ($(el).hasClass('text-success')){
            c = "text-success";
            txt = "Parabéns, você acertou! ";
        }else{
            c = "text-danger";
            txt = "A resposta certá é: ";
        }
        var p_html=`<p class="${c}">${x}) ${txt} <strong>${r}</strong></p>`
        
        $("#itens").append(p_html)
        
     }
    
}

//Leita do quiz no arquivo json
$.getJSON('../json/quiz.json', function(j) {
    total = 3;
    idc = 0;
    idx  = 0;
    $(j).each(function(){
        type = this.type;
        opts = this.options; 
        cort = this.correct;
        fedb = this.feedback;
        
        idc++;
        addQuestions(idc, this.text);
        $(opts).each(function(y){
            idx++;
            addOptions(idc, idx, this.text, this.value, type, cort, fedb);
        });
        $("#sec-"+idc).hide();
        $("#return-"+idc).hide();
        $("#next-"+idc).hide();
    });
    $("#sec-1").show();
});


