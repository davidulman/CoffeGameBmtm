var changeNumber = Math.floor(Math.random() * 6) + 1; // 4
var changeNumber2 = Math.floor(Math.random() * 6) + 1; // 4

var changeImage = "images/dice" + changeNumber + ".png"; // images/dice4.png
var changeImage2 = "images/dice" + changeNumber2 + ".png"; // images/dice4.png

document.querySelector(".dice .img1").setAttribute("src", changeImage);
document.querySelector(".dice .img2").setAttribute("src", changeImage2);

if (changeNumber2 > changeNumber) {
  document.querySelector("h1").innerHTML = "🕍 ✡️ אריאל מכין קפה";
} else if (changeNumber2 < changeNumber) {
  document.querySelector("h1").innerHTML = "🥓🥓🥓 אולמן מכין קפה";
} else {
  document.querySelector("h1").innerHTML = "תיקו התחל שוב";
}
