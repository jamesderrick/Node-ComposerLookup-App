const form = document.querySelector("form");
const portrait = document.querySelector("img");
const nameCell = document.querySelector("#name");
const years = document.querySelector("#years");
const country = document.querySelector("#country");
const works = document.querySelector("#works");
const link = document.querySelector("a");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const composerName = urlParams.get('name');

//let composerName = 'Bach';
// let url = `http://localhost:5000/composers?name=${composerName}`;

// const options = {
//   method: "GET",
//   body: JSON.stringify(composerName),
// };

function fetchData(composerName) {
  let url = `http://localhost:5000/composers?name=${composerName}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => addDataToDOM(data))
    .catch((err) => console.warn("Oops, something went wrong!"));
  console.log("Waiting for composer data...");
}

function addDataToDOM(composerObj) {
  portrait.src = composerObj.portraitURL;
  nameCell.textContent = composerObj.fullName;
  years.textContent = composerObj.years;
  country.textContent = composerObj.country;
  works.textContent = composerObj.works;
  link.href = composerObj.url;
}

if(composerName) {
  fetchData(composerName);
}

if(form) {
  form.addEventListener("submit", (e) => {
    let input = e.target.name.value;
    let composerName = input[0].toUpperCase() + input.toLowerCase().substring(1);
  });
}
