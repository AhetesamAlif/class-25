function imageOne(){
    document.getElementById('img').src = "images/img1.jpg"
 }
 function imageTwo(){
    document.getElementById('img').src = "images/img2.jpg"
  }
function welcome(){
    alert('welcome to AhetesamAlif');
}


$(document).ready(function(){

  $('#welcome').click(function(){
    alert("welcome to AhetasamAlif.com")

  });

});
$(document).ready(function(){
  $('#hide').click(function(){
    $('img').hide();
  });

});

$(document).ready(function(){
  $('#show').click(function(){
    $('img').show();
  });

});
