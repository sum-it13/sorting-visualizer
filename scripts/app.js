"use strict"; // enables strict mode, catches soft errors like Accidental Global Variable declaration
const start = async () => {
  document.querySelector(".footer > p:nth-child(1)").style.visibility = "hidden";
  let now = new Date();
  let algoValue = Number(document.querySelector(".algo-menu").value);
  let speedValue = Number(document.querySelector(".speed-menu").value);

  if (speedValue === 0) {
    speedValue = 1;
  }
  if (algoValue === 0) {
    alert("No Algorithm Selected");
    return;
  }

  let algorithm = new sortAlgorithms(speedValue);
  if (algoValue === 1) await algorithm.BubbleSort();
  if (algoValue === 2) await algorithm.SelectionSort();
  if (algoValue === 3) await algorithm.InsertionSort();
  if (algoValue === 4) await algorithm.MergeSort();
  if (algoValue === 5) await algorithm.QuickSort();
  let now1 = new Date();
  document.getElementById('Ttime').innerHTML = (now1 - now) / 1000;
};
let input;

const RenderScreen = async () => {
  let algoValue = Number(document.querySelector(".algo-menu").value);
  await RenderList();
};

const RenderInput = async () => {
  input = String(document.querySelector(".input").value);
  console.log(input);
  await RenderList();
};

const RenderList = async () => {
  let sizeValue = Number(document.querySelector(".size-menu").value);

  await clearScreen();
  

  let list = await randomList(sizeValue);
  const arrayNode = document.querySelector(".array");
  console.log(arrayNode);
  console.log(list);
  for (const element of list) {
    const node = document.createElement("div");
    node.className = "cell";
    node.setAttribute("value", String(element));
    node.style.height = `${3.8 * element}px`;
    arrayNode.appendChild(node);
  }
};


const randomList = async (Length) => {
  let list = new Array();
  let lowerBound = 1;
  let upperBound = 100;
  

  if (input == "Y") {
    for (let counter = 0; counter < Length; ++counter) {
      let randomNumber = prompt("Enter the no.");
      list.push(parseInt(randomNumber));
    }
  }
  else{
    for (let counter = 0; counter < Length; ++counter) {
      let randomNumber = Math.floor(
        Math.random() * (upperBound - lowerBound + 1) + lowerBound
      );
      list.push(parseInt(randomNumber));
    }
  }


  
  return list;
};

const clearScreen = async () => {
  document.querySelector(".array").innerHTML = "";
};


document.querySelector(".start").addEventListener("click", start);
document.querySelector(".size-menu").addEventListener("change", RenderList);
document.querySelector(".algo-menu").addEventListener("change", RenderScreen);
document.querySelector(".input").addEventListener("change", RenderInput);
window.onload = RenderScreen;
