export function counterRun() {


    var firstTime = true;

    window.addEventListener("scroll", function () {

        if (isScrolledIntoView(document.getElementById("counter")) && firstTime) {
            counter("clients", 2000);
            counter("projects", 2000);
            counter("coffies", 2000);

            firstTime = false;
        }

    });

    function isScrolledIntoView(el) {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;

        // Only completely visible elements return true:
        //    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        // Partially visible elements return true:
        var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
        return isVisible;
    }

    function counter(id, duration) {

        var item = document.getElementById(id);

        var end = parseInt(item.dataset.end);
        var start = parseInt(item.dataset.start);

        var range = end - start;
        // no timer shorter than 50ms (not really visible any way)
        var minTimer = 50;
        // calc step time to show all interediate values
        var stepTime = Math.abs(Math.floor(duration / range));

        // never go below minTimer
        stepTime = Math.max(stepTime, minTimer);

        // get current time and calculate desired end time
        var startTime = new Date().getTime();
        var endTime = startTime + duration;
        var timer;

        function run() {
            var now = new Date().getTime();
            var remaining = Math.max((endTime - now) / duration, 0);
            var value = Math.round(end - (remaining * range));
            item.innerHTML = value;
            if (value == end) {
                clearInterval(timer);
            }
        }

        timer = setInterval(run, stepTime);
        run();

    };

}
