firstName = $.cookie('fname');
$(".usuario").html(firstName);

//*************controle de navegação:
// esconde conteúdo
$(".conteudo, #mouse, #mouse2, #card").hide();

//Mostra a primeira parte do conteúdo
$(".c1").show();
progressbar(0,20);

//Quando for último slide habilida o próximo conteúdo
$('#carousel').on('slid.bs.carousel', function (i) {
    curSlide = i.to;
    totSlide = $('.carousel-item').length-1;
    console.log(curSlide, totSlide);
    if (curSlide==totSlide ) {
        $("#mouse").show();
        animation("#mouse", 1000);
        setTimeout(() => {
            $(".c2").show();
            $('#btnPosVideo').hide();
          }, "1000")
          progressbar(20,40);
    }
    
});



function cClick(){
    $("#btnPosVideo").trigger('click');
}

function cKeyPress(){
    $(document).bind('keypress', 'c', cClick());
    
}

const onPlay = function(data) {
    $('#btnPosVideo').show();
    $('#btnPosVideo').on('click', function (){
        $(".c3, .c4").show();
        $("#showBtn").show();
        //cKeyPress()
        animation(".c3", 1000);
    });
    animation("#showBtn", 1000);
    progressbar(40,60);
    
};

// Vimeo Player
const Player = new Vimeo.Player($('iframe'));

//Quando o vídeo terminar habilita o próximo conteúdo.
Player.on('ended', onPlay);

var baralho = [
    [   1, 
        `<h6 class="baralho__title">1 - Acesso a conteúdos impróprios ou ofensivos</h6>
        <p>Ao navegar você pode se deparar com conteúdos que contenham pornografia, atentem contra a honra ou incitem o ódio e o racismo.</p>`,
        `../../img/carta_numeros_1.png` 
    ],
    [   2, 
        `<h6 class="baralho__title">2 - Contato com pessoas mal-intencionadas</h6>
        <p>Ao navegar você pode se deparar com conteúdos que contenham pornografia, atentem contra a honra ou incitem o ódio e o racismo.</p>`,
        `../../img/carta_numeros_2.png`
    ],
    [   3, 
        `<h6 class="baralho__title">3 - Furto de identidade</h6>
        <p>Alguém pode tentar se passar por você e executar ações em seu nome, levando outras pessoas a acreditarem que estão interagindo com você e colocando em risco a sua imagem ou reputação. </p>`,
        `../../img/carta_numeros_3.png`
    ],
    [   4, 
        `<h6 class="baralho__title">4 - Furto e perda de dados</h6>
        <p>Os dados presentes em seus equipamentos conectados à internet podem ser furtados e apagados pela ação de ladrões, atacantes e códigos maliciosos.</p>`,
        `../../img/carta_numeros_4.png`
    ],
    [   5, 
        `<h6 class="baralho__title">5 - Invasão de privacidade</h6>
        <p>A divulgação de informações pessoais pode comprometer a sua privacidade, de seus amigos e familiares e, mesmo que você restrinja o acesso, não há como controlar que elas não serão repassadas.</p>`,
        `../../img/carta_numeros_5.png`
    ],
    [   6, 
        `<h6 class="baralho__title">6 - Desinformação</h6>
        <p>As informações na internet se propagam rapidamente e podem atingir um grande número de pessoas em pouco tempo. Se isso pode ser positivo em certos casos, também pode ser usado para a divulgação de informações falsas, que podem gerar pânico e prejudicar pessoas e empresas.</p>`,
        `../../img/carta_numeros_6.png` 
    ],
    [   7, 
        `<h6 class="baralho__title">7 - Dificuldade de exclusão</h6>
        <p>Aquilo que é divulgado na internet nem sempre pode ser totalmente excluído ou ter o acesso controlado. Uma opinião dada em um momento de impulso pode ficar acessível por tempo indeterminado e pode, de alguma forma, ser usada contra você e acessada por diferentes pessoas, desde seus familiares até seus chefes.  </p>`,
        `../../img/carta_numeros_7.png`
    ],
    [   8, 
        `<h6 class="baralho__title">8 - Dificuldade de manter sigilo</h6>
        <p>No seu dia a dia, é possível ter uma conversa confidencial com alguém e tomar cuidados para que ninguém mais tenha acesso ao que está sendo dito. Na internet, caso não sejam tomados os devidos cuidados, as informações podem trafegar ou ficar armazenadas de forma que outras pessoas tenham acesso ao conteúdo. </p>`,
        `../../img/carta_numeros_8.png`
    ]
 ];

 //Quando chegar na última carta do baralho habilita o próximo conteúdo.
card = 0;
$("#baralhoCards").on('click', function () {
    $('#baralhoCards').css('pointer-events', 'none');
    
    if (card == 0){$('#card').show();};
    
    $('#baralhoCard').html(baralho[card][1]);
    $('.img-minibaralho').attr("src",baralho[card][2]);
    setTimeout(function() { 
        $('#baralhoCards').css('pointer-events', 'initial');
    }, 2000);
    if (card == 7){
        $("#mouse2").show();
        $(".c5").show();
        animation("#mouse2", 1000);
        progressbar(60,80);
        card = 0;
    }else{card++;};
    
});




