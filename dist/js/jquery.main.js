$( document ).ready(function() {
    // $('.list-lang__link').click(function(e){
    //     $('.list-lang__link').removeClass('active');
    //     $(this).addClass('active');
    // })
    // $('.navigation__link').click(function(e){
    //     $('.navigation__link').removeClass('active');
    //     $(this).addClass('active');
    // })
    // $('.navigation__btn').click(function(e){
    //     $('.navigation').toggleClass('active');
    // })
    $(function() {
        $('.tabs__btn').click(function(e){
            e.preventDefault();
            const tab_id = $(this).attr('href');

            $('.tabs__btn').removeClass('active');
            $('.tabs__content').removeClass('active');

            $(this).toggleClass('active');
            $(tab_id).toggleClass('active');
        })
    });

    $('.slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: '<i class="fa slider-arrows arrows-left fa-arrow-left"></i>',
        nextArrow: '<i class="fa slider-arrows arrows-right fa-arrow-right"></i>',
        slidesToShow: 2,
        adaptiveHeight: true
      });
});

