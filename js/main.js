$(function() {
  
  let testTimer;

  function startTimer() {
    testTimer = setInterval(function(){
      slideToRight();
    }, 5000)
  };

  function stopTimer() {
    clearInterval(testTimer);
  }

  startTimer();

  function slideToRight() {
    stopTimer();
    $('.slide:not(:animated)').animate({
      'margin-left' : -1 * $('.slide li').width()
    },function() {
      $('.slide').append($('.slide li:first-child'));
      $('.slide').css('margin-left', 0);
    });
    startTimer();
  }

  function slideToLeft() {
    stopTimer();
    $('.slide:not(:animated)').prepend($('.slide li:last-child'))
    .css('margin-left', -1 * $('.slide li').width())
    .animate({
      'margin-left' : 0
    });
    startTimer();
  }

  $('#next').click(function() {
    slideToRight();
  });

  $('#prev').click(function() {
    slideToLeft();
  });

  $(function(){
    $('a[href^=#]').click(function() {
      $('#target').removeClass('active');
       let speed = 400; 
       let href= $(this).attr("href");
       let link = $(href == "#" || href == "" ? 'html' : href);
       let position = link.offset().top;
       $('body,html').animate({scrollTop:position}, speed, 'swing');
       return false;
    });
 });

 $('#bar').click(function() {
  $('#target').toggleClass('active');
 });

});