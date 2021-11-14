const hour = document.querySelector(".hour-hand");
const min = document.querySelector(".min-hand");
const second = document.querySelector(".second-hand"); 
console.log(second)
// let i = 0
// setTimeout(function() {
//     console.log(i++)
// }, 1000);

let hh = 0
let mm = 0
let ss = 0
let rotation = 90
secondDeg = 90
minDeg = 90
hourDeg = 90
second.style.transform += 'rotate('+secondDeg+'deg)'
min.style.transform += 'rotate('+90+'deg)'
hour.style.transform += 'rotate('+90+'deg)'
function timerS () {
    console.log(ss)
    // rotation = rotation + 6
    secondDeg = secondDeg + 6
    second.style.transform = 'rotate('+secondDeg+'deg)'
    ss++
    if (ss == 60) {
        ss = 0
        mm++
        minDeg = minDeg + 6
        min.style.transform = 'rotate('+minDeg+'deg)'
        if (mm == 60) {
            hh++
            mm = 0
            hourDeg = hourDeg + 15
            hour.style.transform = 'rotate('+hourDeg+'deg)'
            if ( hh == 24) {
                hh = 0
                mm = 0
                ss = 0
            }
        }
    }
    console.log("this is min " + mm)
    console.log("this is hour " + hh)
    setTimeout(timerS, 1000) // callback
}
timerS();