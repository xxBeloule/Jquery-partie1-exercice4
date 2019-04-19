$(document).ready(function() {
  $('#button').click(function() {
    $('li').css('color', 'red');
  });
});
$(document).ready(function(){
  $('li').mouseover(function(){
    $(this).css('color', 'black');
  });
});
