const timeElements = document.querySelectorAll("time");
for (let timeElement of timeElements) {
  timeElement.innerText = timeElement.dateTime;
}

