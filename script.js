var main = function() {
  $(".more-btn").on('click', function(event){
    event.preventDefault();
    $(this).next().toggle();
  });
  
  $(".share").on('click', function(){
    $(this).next().toggle();
  });

  $('.bell').on('click', function(){
    $(this).find('.notification').toggleClass('active');
  });
};

$(document).ready(main);