callApi();

let gender;
const tagGender = document.getElementById("span-gender-icon");
const img = document.getElementById("img-profile");
const name = document.getElementById("p-name");
const email = document.getElementById("p-email");
const address = document.getElementById("p-address");
const btn = document.getElementById("btn-random");
const loading = document.getElementById("div-loading-card");

btn.onclick = () => {
  callApi();
  loading.style.display = "";
};

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  if (resp.data.results[0].gender == "female") {
    tagGender.innerText = "👩";
  } else {
    tagGender.innerText = "👨";
  }
  img.src = resp.data.results[0].picture.large;
  name.innerText =
    resp.data.results[0].name.first + " " + resp.data.results[0].name.last;
  email.innerText = resp.data.results[0].email;
  address.innerText =
    resp.data.results[0].location.city +
    " " +
    resp.data.results[0].location.state +
    " " +
    resp.data.results[0].location.country +
    " " +
    resp.data.results[0].location.postcode;
  resp.data.gender = resp.data.results[0].gender;
  loading.style.display = "none";
  console.log(resp.data.results[0]);
}
