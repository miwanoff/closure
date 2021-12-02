function initCounter(name) {
  let color = "red";
  let innerCounter = function () {
    //console.log(name + " " + color);
    if (color == "red") color = "yellow";
    else color = "red";
    return name + " " + color;
  };
  return innerCounter;
}

let counter1 = initCounter("first"); // первый счетчик
console.log(counter1()); // 1
console.log(counter1());
console.log(counter1());
console.log(counter1());
// alert(counter1()); // 2
// alert(counter1()); // 3

let counter2 = initCounter("second"); // второй счетчик
console.log(counter2()); // 1 - второй счетчик независим от первого
//alert(counter1()); // 4 - первый счетчик продолжает считать независимо от второго!
console.log(counter2());
console.log(counter2());
console.log(counter1());
console.log(counter2());
