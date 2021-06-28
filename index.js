const form = document.querySelector("form");
const portrait = document.querySelector("img");
const nameCell = document.querySelector("#name");
const years = document.querySelector("#years");
const country = document.querySelector("#country");
const works = document.querySelector("#works");
const link = document.querySelector("a");
let composerName;
let url = `http://localhost:5000/composers?name=${composerName}`;

// const options = {
//   method: "GET",
//   body: JSON.stringify(composerName),
// };

function fetchData() {
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => addDataToDOM(data))
    .catch((err) => console.warn("Oops, something went wrong!"), err);
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

form.addEventListener("submit", (e) => {
  let input = e.target.name.value;
  composerName = input[0].toUpperCase() + input.toLowerCase().substring(1);
});
