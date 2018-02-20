$(document).ready(function () {
	$('#query').on("keypress", function (event) {
		if (event.keyCode == 13) {
			var query = this.value;
			var key = "9aBex1AHPgGeOnbnh6CLGCtEw2oCyr6p";
			var url = "http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=" + key + "&limit=20";
			$.getJSON(url, function (json) {

				var cards = [];



				var $game = $('#game');
				var matches = 2;
				for (let j = 0; j < matches; j++) {
					for (let i = 0; i < json.data.length; i++) {
						var img = json.data[i];
						var div = $('<div>')
							.addClass('card')
							.attr('data-num', i);
						var imgElem = new Image();
						imgElem.src = img.images.downsized.url;
						imgElem.style.display = "none";
						div.append(imgElem);
						cards.push(div);
					}
				}
				var score = [];



				cards.sort(function () {
					return 0.5 - Math.random()
				});
				for (let i = 0; i < cards.length; i++) {
					$game.append(cards[i]);
				}

				var clickedCards = [];

				$('.card').click(function () {
					const $card = $(this);

					$card.children().show();

					(clickedCards.length, matches);
					if (clickedCards.length == matches - 1) {

						var allMatch = true;
						for (let i = 0; i < clickedCards.length; i++) {
							if (clickedCards[i].num != $card.data().num) {
								allMatch = false;
							}
						}
						if (allMatch) {
							// match, stay face up
							console.log("Mached");
							alert("matched!")
						} else {
							// not a match, hide the images
							$card.children().slideToggle(1000).hide(0);
							for (let i = 0; i < clickedCards.length; i++) {
								clickedCards[i].img.slideToggle(1000).hide(0);

							}
						}


						clickedCards = [];
					} else {

						clickedCards.push({
							num: $card.data().num,
							img: $card.find('img')

						});
					}
				});

			});
		}
	});
});



startTimer();
document.getElementById('ti').innerHTML =
	00 + ":" + 00;
setTimeout(function () {
	alert("Times up!You lost!");
}, 100000);

function startTimer() {
	var presentTime = document.getElementById('ti').innerHTML;
	var timeArray = presentTime.split(/[:]+/);
	var m = timeArray[0];
	var s = checkSecond((timeArray[1] - 1));
	if (s == 30) {
		m = m - 0
	}


	document.getElementById('ti').innerHTML =
		m + ":" + s;
	setTimeout(startTimer, 3000);
}

function checkSecond(sec) {
	if (sec < 10 && sec >= 0) {
		sec = "" + sec
	};
	if (sec < 0) {
		sec = "31"
	};
	return sec;
}
