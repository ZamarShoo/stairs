$(window).scroll(function(){
    $('header').toggleClass('headerScroll', $(this).scrollTop() > 400);
});


$(function() {
    $('.burger').click(function() {
        $('.header__bottom').toggleClass('activeNav')
        $('header').toggleClass('headerActive')
    })
    if($(document).width() < 1050){
        $('.header__bottom nav:first-child > ul > li:first-child a').click(function(e) {
            e.preventDefault()
            $(this).parent().toggleClass('activeLi')
            $('ul.children').toggleClass('active')
        })
    }
})