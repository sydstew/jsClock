function clock() {
  const fullDate = new Date();
  var hrs = fullDate.getHours();
  var mins = fullDate.getMinutes();
  var secs = fullDate.getSeconds();

  if (hrs < 10) {
    hrs = "0" + hrs;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (secs < 10) {
    secs = "0" + secs;
  }

  document.getElementById("hours").innerHTML = hrs + ":";
  document.getElementById("minutes").innerHTML = mins + ":";
  document.getElementById("seconds").innerHTML = secs;
}

setInterval(clock, 100);
