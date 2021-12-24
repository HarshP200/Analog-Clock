const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');

setInterval(() => {

    const date = new Date();

    const secDeg = date.getSeconds() * 6 - 90;
    const minDeg = date.getMinutes() * 6 + (secDeg + 90) / 60 - 90;
    const hourDeg = date.getHours() * 30 + (minDeg + 90) / 12 - 90;

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minDeg}deg)`;
    secondHand.style.transform = `rotate(${secDeg}deg)`;

}, 1000)