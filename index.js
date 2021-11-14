// get the clock hands
const hour = document.querySelectorAll(".hour-hand");
const min = document.querySelectorAll(".min-hand");
const second = document.querySelectorAll(".second-hand"); 
console.log(min)
// set the var of the clock 
let hh = 0
let mm = 0
let ss = 0
let secondDeg = 90
let minDeg = 90
let hourDeg = 90

// setting the current time 
let d = new Date(); 
d.getSeconds()
d.getMinutes() 
d.getHours()

// setting the values of the current time
const secCurentDeg =  (((d.getSeconds() * 6)) + 90)
let secTime = secCurentDeg 
const minCurentDeg =  (((d.getMinutes() * 6)) + 90)
let minTime = minCurentDeg 
const hourCurentDeg =  ((d.getHours() / 12) * 360 ) + 90
let hourTime = minCurentDeg
console.log(hourTime)


// The hands start from deg 0, But the hands on the clock should start from 90deg
second[0].style.transform += 'rotate('+secondDeg+'deg)'
second[1].style.transform += 'rotate('+secondDeg+'deg)'
min[0].style.transform += 'rotate('+minDeg+'deg)'
min[1].style.transform += 'rotate('+minDeg+'deg)'
hour[0].style.transform += 'rotate('+hourDeg+'deg)'
hour[1].style.transform += 'rotate('+hourDeg+'deg)'



function timerS () {
    // each second the second hand sould rotat 6 deg
    secondDeg = secondDeg + 6
    second[0].style.transform = 'rotate('+secondDeg+'deg)'
    
    ss++
    if (ss == 60) {
        ss = 0
        mm++
        minDeg = minDeg + 6
        // each min the second hand sould rotat 6 deg
        min[0].style.transform = 'rotate('+minDeg+'deg)'
        hourDeg = hourDeg + 0.25
        hour[0].style.transform = 'rotate('+hourDeg+'deg)'
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

    // current time start here 

    let c = new Date(); 
    c.getSeconds()

    secTime = secTime + 6
    second[1].style.transform = 'rotate('+secTime+'deg)'
    if (c.getSeconds() == 00) {
        minTime = minTime + 6
        min[1].style.transform = 'rotate('+minTime+'deg)'
        hourTime = hourTime + 0.25
        hour[1].style.transform = 'rotate('+hourTime+'deg)'
    }
    min[1].style.transform = 'rotate('+minTime+'deg)'
    hour[1].style.transform = 'rotate('+hourTime+'deg)'

    setTimeout(timerS, 1000) // callback each 1s
}

timerS();
