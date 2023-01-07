
$( document ).ready(function() {
    $('.list-lang__link').click(function(e){
        $('.list-lang__link').removeClass('active');
        $(this).addClass('active');
    })
    $('.navigation__link').click(function(e){
        $('.navigation__link').removeClass('active');
        $(this).addClass('active');
    })
    $('.navigation__btn').click(function(e){
        $('.navigation').toggleClass('active');
    })

    $(function() {
        $('.tabs__btn').click(function(e){
            e.preventDefault();
            const tab_id = $(this).attr('href');

            $('.tabs__btn').removeClass('active');
            $('.tabs__content').removeClass('active');

            $(this).addClass('active');
            $(tab_id).addClass('active');
        })
    });

    $('.slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        adaptiveHeight: true
      });
});

