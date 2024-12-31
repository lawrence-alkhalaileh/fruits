const fruits = [
  {
    name: "Apple: ",
    image:
      "https://t4.ftcdn.net/jpg/05/34/17/63/240_F_534176369_6AOCIq74kTeoX9gwTaqE8r4EceLlW3dQ.jpg",
  },
  {
    name: "Banana: ",
    image:
      "https://t4.ftcdn.net/jpg/02/99/29/05/240_F_299290543_D7Hg1njhj3SZc2JiYp2hsT3HWk9WIFrL.jpg",
  },
  {
    name: "Cherry: ",
    image:
      "https://t4.ftcdn.net/jpg/00/74/22/49/240_F_74224960_NdKkkU8tjpw9TNKDfDJtTnIMuCNUIGRV.jpg",
  },
  {
    name: "Grape: ",
    image:
      "https://t3.ftcdn.net/jpg/01/56/26/38/240_F_156263893_NjL8agp6JEoPIHijmBpL1TJgdarmQeve.jpg",
  },
  {
    name: "Orange: ",
    image:
      "https://t4.ftcdn.net/jpg/02/56/59/09/240_F_256590939_sOJseFyxZjw268kbjsGIRSWiJdJTGJkz.jpg",
  },
];

const fruitsList = document.getElementById("fruits-list");

fruits.forEach((fruit) => {
  const listItem = document.createElement("li");
  const fruitImg = document.createElement("img");
  fruitImg.src = fruit.image;
  fruitImg.alt = fruit.name;
  const fruitText = document.createTextNode(fruit.name);
  listItem.appendChild(fruitText);
  listItem.appendChild(fruitImg);
  fruitsList.appendChild(listItem);
});
