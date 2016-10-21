$(document).ready(function(){

  $('.button').click(function(){

    $('.circle').each(function(){

      if ($(this).hasClass('big-green') ){
        $(this).removeClass('big-green').addClass('small-red');
      } else {
        $(this).removeClass('small-red').addClass('big-green');
      }

    });

  });

});
