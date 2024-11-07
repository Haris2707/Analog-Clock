/*12 hour=360deg
1 hour=360/12=30
h hours=30h+m/2

60 min=30
1min=30/60=1/2
m mins=(1/2)m

*/
let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
    // Create a new Date object to get the current time
    let date = new Date();

    // Extract hours, minutes, and seconds from the date object
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    // Calculate rotation angles for the clock hands
    let hRotation = 30 * hh + mm / 2;  // Each hour represents 30 degrees, and each minute represents 0.5 degrees
    let mRotation = 6 * mm;             // Each minute represents 6 degrees
    let sRotation = 6 * ss;             // Each second represents 6 degrees

    // Apply the rotation to the corresponding HTML elements
    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

// Call the displayTime function every 1000 milliseconds (1 second)
setInterval(displayTime, 1000);

