jQuery(document).ready(function ($) {
  $("a[href='nolink']").on("click", function (e) {
    e.preventDefault();
  });



  function setCookie(key, value, expiry) {
    var expires = new Date();
    expires.setTime(expires.getTime() + expiry * 24 * 60 * 60 * 1000);
    document.cookie = key + "=" + value + ";expires=" + expires.toUTCString();
  }

  function getCookie(key) {
    var keyValue = document.cookie.match("(^|;) ?" + key + "=([^;]*)(;|$)");
    return keyValue ? keyValue[2] : null;
  }

  function eraseCookie(key) {
    var keyValue = getCookie(key);
    setCookie(key, keyValue, "-1");
  }
  // End Cookie Functions
  // Cookie notice
  if (getCookie("visitorCookie") == "cookieAccepted") {
    $("#cookie-notice").remove();
  } else {
    $("body").append(
      '<div id="cookie-notice" class="animated fadeInUp"> <p>Our Website uses cookies to improve your experience. Read more at our <a href="/privacy-policy-mobile-app">Privacy Policy</a>.</p> <div class="buttons-wrapper"> <a href="#!" class="accept">Accept</a> <a href="#!" class="decline">Decline</a></div> </div>'
    );
    $("#cookie-notice .accept").on("click", function (e) {
      e.preventDefault();
      setCookie("visitorCookie", "cookieAccepted", 3);
      $("#cookie-notice").hide();
      setTimeout(function () {
        $("#cookie-notice").remove();
      }, 3000);
    });
    $("#cookie-notice .decline").on("click", function (e) {
      e.preventDefault();
      setCookie("visitorCookie", "cookieDeclined", 3);
      $("#cookie-notice").hide();
      setTimeout(function () {
        $("#cookie-notice").remove();
      }, 3000);
    });
  }
  // Cookie notice end

  // Update footer copyright year
  if ($('.current-year').length) {
    $('.current-year').text(new Date().getFullYear());
  }

});
