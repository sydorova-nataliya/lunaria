$( document ).ready(function() {
    
    $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
      $('#scroll').fadeIn();
      } else {
      $('#scroll').fadeOut();
      }
      });
       
      $('#scroll').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
      });
       

    $(function() {
        $('.tabs__btn').click(function(e){
            e.preventDefault();
            const tab_id = $(this).attr('href');

            $('.tabs__btn').removeClass('active');
            $('.tabs__content').removeClass('active');

            $(this).toggleClass('active');
            $(tab_id).toggleClass('active');
          //   if(this.hasClass('active')&&  tab_id.hasClass('active')){
          //     $(this).removeClass('active');
          //     $(tab_id).removeClass('active');
          //   } else{            
          //   $('.tabs__btn').removeClass('active');
          //   $('.tabs__content').removeClass('active');

          //   $(this).toggleClass('active');
          //   $(tab_id).toggleClass('active');
          // }

        })
    });
 
    $('.slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: '<i class="fa slider-arrows arrows-left fa-arrow-left"></i>',
        nextArrow: '<i class="fa slider-arrows arrows-right fa-arrow-right"></i>',
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              
            }
          },
        ]
      });

      $('.form__range').slider({
        min: 500,
        max: 25000,
        value: 1250,
        slide: function(event, ui){
          $('.form__range-value').text(`$ ${ui.value}`);
        }
      });

});

