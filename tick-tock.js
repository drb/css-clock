var clock = (function(){

    var interval;

    function start() {

        interval = setInterval(tock, 200);
    }

    function setTime (time) {

        var hours = 0,
            minutes = 0,
            seconds = 0;

        time = time.split(':');

        if (time.length) {
            hours = +time[0];
        }

        if (time.length && time[1]) {
            minutes = +time[1];
        }

        if (time.length && time[2]) {
            seconds = +time[2];
        }

        update(hours, minutes, seconds);
    }

    function tock () {

        var time    = new Date(),
            hour    = time.getHours() % 12 || 12,
            minutes = time.getMinutes(),
            seconds = time.getSeconds();

        update(hour, minutes, seconds);
    }

    function getClocks () {

        return document.getElementsByClassName('clock');
    }

    function cleanClasses (el, className) {

        var regexes = [
            /(h|m)rot\-([0-9]+)/ig,
            /na/ig,
        ];

        for (var i = 0; i < regexes.length; i++) {

            el.className = el
                .className
                .replace(regexes[i], '')
                .replace(' ', '');
        }

        el.className += ' ' + className;
    }

    function update (hours, minutes, seconds) {

        var clocks = getClocks(),
            clock,
            minuteHand,
            hourHand;

        for (var i = 0; i < clocks.length; i++) {

            clock       = clocks[i];
            minuteHand  = clock.getElementsByClassName('minutes')[0];
            hourHand    = clock.getElementsByClassName('hours')[0];
            secondsHand = clock.getElementsByClassName('seconds')[0];

            if (minuteHand) {
                cleanClasses(minuteHand, 'mrot-' + minutes);
            }

            if (hourHand) {
                cleanClasses(hourHand, 'hrot-' + hours);
            }

            if (secondsHand) {
                cleanClasses(secondsHand, 'mrot-' + seconds);
            }
        }
    }

    return {
        ticktock: start,
        setTime: setTime
    };
})();