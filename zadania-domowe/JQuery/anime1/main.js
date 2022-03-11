/*
$("button").click(function(){
  $("div").animate({left: '250px'});
});

$(document).ready(function(){
  const div = $('#div-top');
 $('#btn-top').click(function(){
     div.animate({left: '250px'});
  });
});
*/ 
$(document).ready(function(){
$("button").click(function(){
  $("div").animate({left: '250px',height:'100px', width:'100px', color: 'blue'}, 5000);
}); 
});
