document.addEventListener("DOMContentLoaded", function() {
    var newDriverBtn = document.getElementById("newDriverBtn");
    var driversBtn = document.getElementById("driversBtn");
    var newDriverBtn2 = document.getElementById("driversBtn2");
    var businessBtn = document.getElementById("businessBtn");
    var aboutBtn = document.getElementById("aboutBtn");
    var logInBtn = document.getElementById("logInBtn");
    var signUpBtn = document.getElementById("signUpBtn");
    var booknow = document.getElementById("booknow");

    newDriverBtn.addEventListener("click", function() {
        window.location.href = "/driversPage";
    });

    newDriverBtn2.addEventListener("click", function() {
        window.location.href = "/driversPage.html";
    });

    driversBtn.addEventListener("click", function() {
        window.location.href = "/html/driversPage.html";
    });

    businessBtn.addEventListener("click", function() {
        window.location.href = "/business_page.html";
    });

    aboutBtn.addEventListener("click", function() {
        window.location.href = "/about_page.html";
    });

    logInBtn.addEventListener("click", function() {
        window.location.href = "/logIN";
    });

    signUpBtn.addEventListener("click", function() {
        window.location.href = "/signup";
    });

    booknow.addEventListener("click", function() {
        window.location.href = "/map.html";
    });
});
