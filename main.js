$(document).ready(function() {
  $("#password1").keyup(validate);
});
function validate() {
  var password1 = $("#password1").val();
  var password2 = 'shschoirs2018';

    if(password1 == password2) {
       $("#validate-status").text("Password accepted. Redirecting ...");
			 window.setTimeout(function() {
				window.location.replace('https://google.com/')
			 	}, 2000);
    }
    else {
        $("#validate-status").text("Password invalid."); 
    }
}

function move() {
  var elem = document.getElementById("myBar");   
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 35) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
function move2() {
  var elem2 = document.getElementById("myBar2");   
  var width2 = 1;
  var id2 = setInterval(frame, 10);
  function frame() {
    if (width2 >= 45) {
      clearInterval(id2);
    } else {
      width2++; 
      elem2.style.width = width2 + '%'; 
    }
  }
}
function move3() {
  var elem3 = document.getElementById("myBar3");   
  var width3 = 1;
  var id3 = setInterval(frame, 10);
  function frame() {
    if (width3 >= 95) {
      clearInterval(id3);
    } else {
      width3++; 
      elem3.style.width = width3 + '%'; 
    }
  }
}

