const second = document.querySelector(".second");
const min = document.querySelector(".min");
const hour = document.querySelector(".hour");

const digitalClock = document.querySelector(".time")

const setDate = () => {
  //Get Date method
  const now = new Date();

  //Get Seconds
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360;

  //Get Minutes
  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360);

  //Get Hours
  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360);

  //Display logic
  second.style.transform = `rotate(${secondsDegrees}deg)`;
  min.style.transform = `rotate(${minutesDegrees}deg)`;
  hour.style.transform = `rotate(${hoursDegrees}deg)`

  console.log(`${hours} - ${minutes} - ${seconds}`);

  digitalClock.innerHTML = `<span>${hours}:</span> <span>${minutes}:</span> <span>${seconds}</span>`
  // console.log(secondsDegrees);
};

setInterval(setDate, 1000);
