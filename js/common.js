//main navigation submenu

// if(jQuery(window).width() < 1025)
// {
//     jQuery( "<span class='clickD'></span>" ).insertAfter(".navbar-nav > li.menu-item-has-children > a");
// }
 $('.navbar-nav li .clickD').click(function(e) {
    e.preventDefault();
    var $this = $(this);
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.removeClass('toggled');
        $this.next().hide();
    } else {
        $this.parent().parent().find('.sub-menu').removeClass('show');
        $this.parent().parent().find('.toggled').removeClass('toggled');
        $this.parent().parent().find('.sub-menu').hide();
        $this.next().toggleClass('show');
        $this.toggleClass('toggled');
        $this.next().show();
    }
});

 $('html').click(function(){
    $('.navbar-nav li .clickD').removeClass('toggled');
});
  $(document).click(function(){
     $('.navbar-nav li .clickD').removeClass('toggled');
});
  $('.navbar-nav').click(function(e){
  e.stopPropagation();
});





// $('.logo_box').click(function(){
//     $("html, body").animate({
//             scrollTop: 0
            
//         }, 600);
//         return false;
//   });


// function onScroll(event){
//         var scrollPos = $(document).scrollTop() + 200;
//         $('.navbar-nav li a').each(function () {
//             var currLink = $(this);
//             var refElement = $(currLink.attr("href"));
//             if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//                 $('.navbar-nav li').removeClass("current-menu-item");
//                 currLink.parent('li').addClass("current-menu-item");
//             }
//             else{
//                 currLink.parent('li').removeClass("current-menu-item");
//             }
//         });
//     }

//     $('.navbar-nav li a').on('click', function (e) {
//       e.preventDefault();
//       $(document).off("scroll");
//       $('.navbar-nav li a').each(function () {
//           $(this).parent('li').removeClass('current-menu-item');
//       });
//       $(this).parent('li').addClass('current-menu-item');
//       var target = this.hash, $target = $(target)
// ;
//       $('html, body').stop().animate({
//           'scrollTop': $target.offset().top - $('.main_head').outerHeight()
//       }, 500, 'swing', function () {
//           window.location.href.substr(0, window.location.href.indexOf('#'));
//           $(document).on("scroll", onScroll);
//       });
//   });
 
// sticky menu

 $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
      $('.main_head').addClass('sticky');
      $('body').addClass('sticky');
    } else{
      $('.main_head').removeClass('sticky');
      $('body').removeClass('sticky');
    }
  });

// menu collapse auro click
$('.navbar-nav li a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});


// sticky scroll to section
            
if ( ! window.console ) console = { log: function(){} };
$('.single-page-nav').singlePageNav({
    offset: $('.main_head').outerHeight() - 20,
    threshold: 0,
    filter: ':not(.external)',
    updateHash: true,
    beforeStart: function() {
        console.log('begin scrolling');
    },
    onComplete: function() {
        console.log('done scrolling');
    }
});




$(document).ready(function(){
  $("a.scroll").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});




