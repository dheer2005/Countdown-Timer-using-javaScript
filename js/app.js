const endDate = "26 June 2050 00:01 AM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")


// const clock = () => {

// }

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;
    if (diff < 0) return;
    
    //Calculate remaining Days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    //Calculate remaining Hours
    inputs[1].value = Math.floor(diff / 3600) % 24;
    //Calculate remaining Minutes
    inputs[2].value = Math.floor(diff / 60) % 60;
    //Calculates reamining Seconds
    inputs[3].value = Math.floor(diff) % 60;
}

//intial call (when we refreshing the page)
clock()

/**
 * 1 day = 24 hours
 * 1 hr = 60 mins
 * 60 min = 3600 sec
 */

setInterval(() => {
        clock()
    },1000)