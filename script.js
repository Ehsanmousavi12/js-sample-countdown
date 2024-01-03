const seconds_to_milliseconds = 1_000;
const minutes_to_milliseconds = seconds_to_milliseconds * 60;
const hours_to_milliseconds = minutes_to_milliseconds * 60;
const days_to_milliseconds = hours_to_milliseconds * 24;
const months_to_milliseconds = days_to_milliseconds * 30;
const years_to_milliseconds = months_to_milliseconds * 12;

document.addEventListener("DOMContentLoaded", function () {
  const deadline = new Date(2025, 8, 17).getTime();

  const countdownFunction = setInterval(function () {
    const now = new Date().getTime();
    const difference = deadline - now;

    const years = Math.floor(difference / years_to_milliseconds);

    const months = Math.floor(
      (difference % years_to_milliseconds) / months_to_milliseconds
    );
    const days = Math.floor(
      (difference % months_to_milliseconds) / days_to_milliseconds
    );
    const hours = Math.floor(
      (difference % days_to_milliseconds) / hours_to_milliseconds
    );
    const minutes = Math.floor(
      (difference % hours_to_milliseconds) / minutes_to_milliseconds
    );
    const seconds = Math.floor(
      (difference % minutes_to_milliseconds) / seconds_to_milliseconds
    );
    document.getElementById("years").textContent = years;

    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (difference < 0) {
      clearInterval(countdownFunction);

      document.querySelector("#countdown").innerHTML = "Happy My Birthday";
    }
  }, 1000);
});
