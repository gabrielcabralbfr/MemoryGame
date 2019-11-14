(function MemoryGame() {
  const imagens = ["img/facebook.png", "img/facebook.png", "img/android.png", "img/android.png", "img/chrome.png", "img/chrome.png",
    "img/firefox.png", "img/firefox.png", "img/html5.png", "img/html5.png", "img/googleplus.png", "img/googleplus.png",
    "img/twitter.png", "img/twitter.png", "img/windows.png", "img/windows.png"
  ];

  const crossImage = "img/cross.png";
  const board = $('#tabuleiro');

  let count = 0;
  let option1 = "";
  let option2 = "";

  let initialTime = 0;
  let finalTime = 0;
  let timeElapsed = 0;

  function randomizeImages() {
    Array.prototype.randomize = function () {
      let i = this.length;
      let j;
      let temp;
      while (--i) {
        j = Math.floor(Math.random() * (i - 1));
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
      }
    };
    imagens.randomize();
  }

  function showCards() {
    let html = "<ul>";
    for (let i = 0; i < 16; i++) {
      html += "<li>";
      html += "<img class='card front' src ='" + imagens[i] + "' />";
      html += "<img class='cross back' src ='" + crossImage + "' />";
      html += "</li>";
    }
    html += "</ul>";
    board[0].innerHTML = "<button id='iniciar-jogo'>Iniciar Jogo</button>";
    board[0].innerHTML += html;
  }

  function turnCardUp(card) {
    card.addClass("face-up");
    card.children(".card").fadeIn(0);
    card.children(".cross").fadeOut(0);
  }

  function turnCardsDown() {
    $("li.face-up:not(.match)").removeClass("face-up");
    card1 = "";
    card2 = "";

    setTimeout(function () {
      $("li:not(.match)").children(".cross").fadeIn(0);
      $("li:not(.match)").children(".card").fadeOut(0);
    }, 1500)
  }

  function checkCardParity(card1, card2) {
    if (card1 === card2) {
      $(this).addClass("match");
      $('img[src="' + card1 + '"]').parent().addClass("match");
      count = 0;
    } else {
      turnCardsDown();
      setTimeout(function () {
        count = 0;
      }, 1500);
    }
  }

  function gameEnded() {
    if ($("li:not(.match)").length === 0) {
      return true;
    } else {
      return false;
    }
  }

  function endGame() {
    finalTime = new Date();
    timeElapsed = finalTime - initialTime;
    Math.round(timeElapsed /= 1000);
    alert(`Você venceu! \n Sua partida durou: ${timeElapsed} segundos \n Iniciando um novo jogo..`);
    initGame();
  }

  function initGame() {
    initialTime = new Date();
    alert("Você tem 3 segundos para memorizar o jogo");
    randomizeImages();
    showCards();

    setTimeout(function () {
      $(".card").fadeOut(0);
      $(".cross").fadeIn(0);
    }, 3000);

    $(document).on('click', 'li', function () {
      if ((count < 2) && ($(this).hasClass("face-up")) === false) {
        count++;
        turnCardUp($(this))

        switch (count) {
          case 1:
            option1 = $(this).children('.card').attr('src');
            break;
          case 2:
            option2 = $(this).children('.card').attr('src');
            checkCardParity(option1, option2)
            break;
        }
      }
      if (gameEnded()) {
        endGame();
      }
    })
  }

  $(document).ready(function () {
    showCards();

    $(document).on('click', '#iniciar-jogo', function () {
      initGame();
    });
  });
})()