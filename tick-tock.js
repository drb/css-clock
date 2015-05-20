var clock = (function(){

	var interval;

	function start() {

		interval = setInterval(tock, 200);
	}

	function tock () {

		var time 	= new Date(),
			hour 	= time.getHours() % 12 || 12,
			minutes = time.getMinutes(),
			seconds = time.getSeconds();

		update(hour, minutes, seconds);
	}

	function getClocks () {

		return document.getElementsByClassName('clock');
	}

	function update (hours, minutes, seconds) {

		var clocks = getClocks(),
			regex = /(h|m)rot\-([0-9]+)/ig,
			clock,
			minuteHand,
			hourHand;

		for (var i = 0; i < clocks.length; i++) {

			clock 		= clocks[i];
			minuteHand 	= clock.getElementsByClassName('minutes')[0];
			hourHand 	= clock.getElementsByClassName('hours')[0],
			secondsHand	= clock.getElementsByClassName('seconds')[0];

			minuteHand.className = minuteHand.className.replace(regex, '').replace(' ', '');
			minuteHand.className += ' mrot-' + minutes;

			hourHand.className = hourHand.className.replace(regex, '').replace(' ', '');
			hourHand.className += ' hrot-' + hours;

			if (secondsHand) {
				secondsHand.className = secondsHand.className.replace(regex, '').replace(' ', '');
				secondsHand.className += ' mrot-' + seconds;
			}
		}
	}

	return {
		ticktock: start
	};
})();

clock.ticktock();