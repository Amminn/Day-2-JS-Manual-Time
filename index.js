// get the clock hands
const hour = document.querySelector(".hour-hand");
const min = document.querySelector(".min-hand");
const second = document.querySelector(".second-hand"); 

// set the var of the clock 
let hh = 0
let mm = 0
let ss = 0
let secondDeg = 90
let minDeg = 90
let hourDeg = 90

// The hands start from deg 0, But the hands on the clock should start from 90deg
second.style.transform += 'rotate('+secondDeg+'deg)'
min.style.transform += 'rotate('+minDeg+'deg)'
hour.style.transform += 'rotate('+hourDeg+'deg)'

function timerS () {
    // each second the second hand sould rotat 6 deg
    secondDeg = secondDeg + 6
    second.style.transform = 'rotate('+secondDeg+'deg)'
    ss++
    if (ss == 60) {
        ss = 0
        mm++
        minDeg = minDeg + 6
        // each min the second hand sould rotat 6 deg
        min.style.transform = 'rotate('+minDeg+'deg)'
        hourDeg = hourDeg + 0.25
        hour.style.transform = 'rotate('+hourDeg+'deg)'
        if (mm == 60) {
            hh++
            mm = 0
            // each hour the second hand sould rotat 6 deg
            if ( hh == 24) {
                hh = 0
                mm = 0
                ss = 0
            }
        }
    }
    setTimeout(timerS, 1000) // callback each 1s
}

timerS();
