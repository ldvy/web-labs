"Use strict";
async function fetchInfo() {
  const node = document.getElementById("container");
  node.textContent = "";

  for (let i = 0; i < 5; i++) {
    await fetch("https://randomuser.me/api")
      .then((response) => response.json())
      .then((data) => {
        let personInfo = data.results["0"];
        let personBox = document.createElement("div");
        personBox.class = "personBox";

        let image = document.createElement("img");
        image.src = personInfo.picture.large;
        personBox.append(image);

        let name = document.createElement("p");
        name.innerText = `Name: ${personInfo.name.title} ${personInfo.name.first} ${personInfo.name.last}`;
        personBox.append(name);

        let city = document.createElement("p");
        city.innerText = `City: ${personInfo.location.city}`;
        personBox.append(city);

        let postCode = document.createElement("p");
        postCode.innerText = `Postal Code: ${personInfo.location.postcode}`;
        personBox.append(postCode);

        let phone = document.createElement("p");
        phone.innerText = `Phone: ${personInfo.phone}`;
        personBox.append(phone);

        container.append(personBox);
      });
  }
}
