function animation(el, t){
    $('html, body').animate({
        scrollTop: $(el).offset().top
    }, t);
}

function progressbar(p_now, p_next) {
    $(".progress-bar-animated").each(function() {
        $(this).css("width", p_now+"px").animate({width: p_next+"%"}, 500);
        $(this).html(p_next+"%")
    });
};