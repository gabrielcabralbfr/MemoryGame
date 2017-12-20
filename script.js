// (function() {
//   var imagens = [
//     "img/facebook.png",
//     "img/android.png",
//     "img/chrome.png",
//     "img/firefox.png",
//     "img/html5.png",
//     "img/googleplus.png",
//     "img/twitter.png",
//     "img/windows.png",
//     "img/cross.png"
//   ];
// })();

// app.inicio();

$(document).ready(function() {
  var imagens = [
    "img/facebook.png",
    "img/android.png",
    "img/chrome.png",
    "img/firefox.png",
    "img/html5.png",
    "img/googleplus.png",
    "img/twitter.png",
    "img/windows.png",
    "img/cross.png"
  ];

  let cells = $("td");

  for (cell in cells) {
    let i = 0;
    $('td').append("<img src=" + imagens[i] + ">");
    i++;
  }
});

$("button").on("click", function() {});
