$(window).scroll(function() { 
  var scroll = $(window).scrollTop();

  if (scroll > 200) {
      $('.navbar').css('background-color','rgba(49, 51, 70)');
  } else {
      $('.navbar').css('background-color','transparent');
  }
});