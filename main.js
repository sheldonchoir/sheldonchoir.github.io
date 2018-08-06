function move() {
    var t = document.getElementById("myBar"),
        e = 1,
        n = setInterval(function() {
            35 <= e ? clearInterval(n) : (e++, t.style.width = e + "%");
        }, 10);
}

function move2() {
    var t = document.getElementById("myBar2"),
        e = 1,
        n = setInterval(function() {
            45 <= e ? clearInterval(n) : (e++, t.style.width = e + "%");
        }, 10);
}

function move3() {
    var t = document.getElementById("myBar3"),
        e = 1,
        n = setInterval(function() {
            95 <= e ? clearInterval(n) : (e++, t.style.width = e + "%");
        }, 10);
}

function validate() {
    "shschoirs2018" == $("#password1").val() ? ($("#validate-status").text("Password accepted. Redirecting ..."), window.setTimeout(function() {
        window.location.replace("https://projectlotus.github.io/");
    }, 2e3)) : $("#validate-status").text("Password invalid.");
}
$(document).ready(function() {
    $("#password1").keyup(validate);
});
