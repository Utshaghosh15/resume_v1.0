    jQuery(document).ready(function(){
    jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
            width:jQuery(this).attr('data-percent')
        },5000);
    });
});

$(document).ready(function() {
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 500) { 
              $('.navbar').addClass('solid');
          } else {
              $('.navbar').removeClass('solid');
          }
        });
});

$(window).scroll(function () {
if ($(window).scrollTop() >= 600) {
$('.sticky').css('background','black');
} else {
$('.sticky').css('background','transparent');
}
});


$("#about1").click(function() {
  $("html, body").animate({ scrollTop: 600 }, "slow");

});
$("#service").click(function() {
  $("html, body").animate({ scrollTop: 1170 }, "slow");

});
$("#contact").click(function() {
  $("html, body").animate({ scrollTop: 1750 }, "slow");

});
$("#ug").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");

});