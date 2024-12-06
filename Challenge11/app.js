"use strict";

//1
// https://transport.opendata.ch/v1/stationboard?station=Yverdon-les-Bains&limit=10

//2
const req = new XMLHttpRequest();
const searchedStation = "Vevey";
const limit = 10;

req.open(
  "GET",
  `https://transport.opendata.ch/v1/stationboard?station=${searchedStation}&limit=${limit}`
);
req.send();

req.addEventListener("load", () => {
  const data = JSON.parse(req.response);
  const stationBoard = data.stationboard;
  console.log(stationBoard);
  console.log(data.stationboard[0]);

  stationBoard.forEach(train => {
    renderTrains(train);
  });

});


const renderTrains = (train) => {

const departureTime = new Date(train.stop.departure).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
  const html = `<article>
        <div class="time">${departureTime}</div>
        <div class="category" data-category="${train.category}">${train.category}</div>
        <div class="destination">${train.to}</div>
    </article>`;

  document.querySelector("#board").insertAdjacentHTML("beforeend", html);
};
