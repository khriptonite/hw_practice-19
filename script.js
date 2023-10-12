// ================== HOMEWORK =====================

//  1. Creati un closure care sa aiba inauntru o variabila
// si sa returneze o lista sau obiect ce contine urmatoarele functii:

const closure2 = function () {
  let num = 0;

  //   o functie care arata variabila
  function displayNum() {
    return num;
  }

  //   o functie care adauga la variabila 1
  function plusOne() {
    num = num + 1;
  }

  //   o functie care inmulteste variabila cu 2
  function multiplyTwo() {
    num = num * 2;
  }

  //   o functie care scade din variabila 1
  function minusOne() {
    num = num - 1;
  }

  //   o functie care schimba variabila cu argumentul primit
  function changeNum(sum) {
    num = sum;
  }
  return [displayNum, plusOne, multiplyTwo, minusOne, changeNum];
};

const [displayNum, plusOne, multiplyTwo, minusOne, changeNum] = closure2();

changeNum(10); // 10
plusOne(); // 11
plusOne(); // 12
multiplyTwo(); // 24
minusOne(); // 23
console.log(displayNum()); // 23

// 2. Creati o IIFE care sa arate un text in consola.
const immediately = (function () {
  console.log("Amuiannî ni-ai arătat textu!!!!");
})();
