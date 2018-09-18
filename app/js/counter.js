export function counterRun() {

    const counterArea = document.getElementById("counter");

    let firstTime = true;

    if (counterArea) {

        window.addEventListener("scroll", function () {

            if (isScrolledIntoView(counterArea) && firstTime) {
                counter("clients", 3000);
                counter("projects", 3000);
                counter("coffies", 3000);

                firstTime = false;
            }
        });
    }

    function isScrolledIntoView(el) {
        let rect = el.getBoundingClientRect();
        let elemTop = rect.top;
        let elemBottom = rect.bottom;

        // Only completely visible elements return true:
        //            var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        // Partially visible elements return true:
        let isVisible = elemTop < window.innerHeight && elemBottom >= 0;
        return isVisible;
    }

    function counter(id, duration) {

        const item = document.getElementById(id);
        const end = parseInt(item.dataset.end);
        const start = parseInt(item.dataset.start);

        const range = end - start;
        // no timer shorter than 50ms (not really visible any way)
        const minTimer = 50;
        // calc step time to show all interediate values
        let stepTime = Math.abs(Math.floor(duration / range));

        // never go below minTimer
        stepTime = Math.max(stepTime, minTimer);

        // get current time and calculate desired end time
        let startTime = new Date().getTime();
        let endTime = startTime + duration;
        let timer;

        function run() {
            let now = new Date().getTime();
            let remaining = Math.max((endTime - now) / duration, 0);
            let value = Math.round(end - (remaining * range));
            item.innerHTML = value;
            if (value == end) {
                clearInterval(timer);
            }
        }

        timer = setInterval(run, stepTime);
        run();

    };

}
