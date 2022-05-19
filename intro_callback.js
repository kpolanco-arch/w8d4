// import {
//     setInterval,
// } from 'timers/promises';

// const interval = 100;
// for await (const startTime of setInterval(interval, Date.now())) {
//     const now = Date.now();
//     console.log(now);
//     if ((now - startTime) > 1000)
//         break;
// }
// console.log(Date.now());


class Clock {
    constructor() {
        const current_date = new Date();
        
        this.hours = current_date.getHours()
        this.minutes = current_date.getMinutes()
        this.seconds = current_date.getSeconds()
        // 1. Create a Date object.
        // 2. Store the hours, minutes, and seconds.
        // 3. Call printTime.
         console.log(this.printTime);
        // 4. Schedule the tick at 1 second intervals.
    }

    printTime() {
        // Format the time in HH:MM:SS
        const time =  [this.hours, this.minutes, this.seconds].join("");
        // Use console.log to print it.
        console.log(time)
    }

    _tick() {
        // 1. Increment the time by one second.
        // 2. Call printTime.
        this.printTime()
    }
}

const clock = new Clock();