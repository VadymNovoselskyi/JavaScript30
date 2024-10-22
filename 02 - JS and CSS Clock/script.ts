const enum DegRotate {
    HOUR = 360 / 24,
    MINUTE = 360 / 60,
    SECOND = 360 / 60,
}

const hourHand = document.querySelector('.hour-hand') as HTMLElement;
const minuteHand = document.querySelector('.min-hand') as HTMLElement;
const secondHand = document.querySelector('.second-hand') as HTMLElement;

updateHands();
setInterval(updateHands, 1000);

function updateHands(): void {
    const time = Date.now();
    const hours = Math.floor(time % 8.64e7 / 3.6e6);
    const minutes = Math.floor(time % 3.6e6 / 6e4); 
    const seconds = Math.floor(time % 6e4 / 1e3);
    console.log(hours, minutes, seconds);
    hourHand.style.rotate = `${DegRotate.HOUR * (hours % 12)}deg`;
    minuteHand.style.rotate = `${DegRotate.MINUTE * minutes}deg`;
    secondHand.style.rotate = `${DegRotate.SECOND * seconds}deg`;
}