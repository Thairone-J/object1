window.onload = function () {
  document.getElementById("form-id").reset();
};

function create(a, b, c) {
  this.hp = a;
  this.mana = b;
  this.name = c;
}

const slider = document.getElementById("hp-slider");
const output = document.getElementById("value-max-hp");
const sliderMana = document.getElementById("mana-slider");
const outputMana = document.getElementById("value-max-mana");

output.innerHTML = slider.value;
outputMana.innerHTML = sliderMana.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};
sliderMana.oninput = function () {
  outputMana.innerHTML = this.value;
};

function refresh() {
  location.reload();
}

function readbtn() {
  let slider1 = document.getElementById("hp-slider");
  let sliderMana1 = document.getElementById("mana-slider");
  let name1 = document.getElementById("input-name");

  const x = slider1.value;
  const y = sliderMana1.value;
  const z = name1.value;
  if (z === "") {
    alert("Insert hero name");
  } else {
    const hero = new create(x, y, z);
    const imgUrl = [
      "assets/1.png",
      "assets/2.png",
      "assets/3.png",
      "assets/4.png",
      "assets/5.png",
    ];

    const randomI = Math.floor(Math.random() * imgUrl.length);
    const randomImgUrl = imgUrl[randomI];

    const newContent = `
            
            <h2>${hero.name} has been created</h2>
            <img src="${randomImgUrl}" class="gen-image">
            <div display:flex; align-content:center;">
                <div class="line" style="margin-bottom:30px"></div>
            <p  style="margin-right:20px; text-align: center;">❤️  Life: ${hero.hp} </p>
            <p style="margin-right:20px;text-align: center;"> ⭐  Mana: ${hero.mana}</p>
            </div>
            <button class="btn" onclick="refresh()">Generate new Hero</button>
            `;
    document.getElementById("form-div").innerHTML = newContent;

    return true;
  }
}
