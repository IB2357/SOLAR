// changing quotes..........................................

function quotesChanger(id, arr, time) {
    let c = 1;
    // let l = arr.length;
    const l = 7;
    function repate() {
        ++c;
        if (c >= l) {
            c %= l;
        }
        document.getElementById(id).innerHTML = arr[c];
    } setInterval(repate, time);
}
let quotes = [
    "“Every one of us is, in the cosmic perspective, precious. If a human disagrees with you, let him live. In a hundred billion galaxies, you will not find another.”",
    "“Look again at that dot. That's here. That's home. That's us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives. The aggregate of our joy and suffering, thousands of confident religions, ideologies, and economic doctrines, every hunter and forager, every hero and coward, every creator and destroyer of civilization, every king and peasant, every young couple in love, every mother and father, hopeful child, inventor and explorer, every teacher of morals, every corrupt politician, every \"superstar,\" every \"supreme leader,\" every saint and sinner in the history of our species lived there-on a mote of dust suspended in a sunbeam.",
    "“The nitrogen in our DNA, the calcium in our teeth, the iron in our blood, the carbon in our apple pies were made in the interiors of collapsing stars. We are made of starstuff.”",
    "“If you wish to make an apple pie from scratch, you must first invent the universe.”",
    "“The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself.”",
    "“We are like butterflies who flutter for a day and think it is forever.”",
    "“The universe is a pretty big place. If it's just us, seems like an awful waste of space.”"
]
quotesChanger('quote', quotes, 30000);


// Scroll Animation............................................

let wh, eh;
var root = document.querySelector(':root');
var elements = document.querySelector('.planet');
var swipe = document.querySelector('.swipe svg');
function scrollAnimator() {
    eh = elements.getBoundingClientRect().y;
    wh = window.innerHeight;
    if (eh < wh-30) {
        root.style.setProperty('--endOpacity', '100%');
        swipe.style.opacity = '0%';
        clearInterval(timer);
    }
    // else{
    //     root.style.setProperty('--endOpacity', '10%');

    // }
}
var timer = setInterval(scrollAnimator, 100);
