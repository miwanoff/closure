function closure(n) {
  let localVar = n;
  return function () {
    return localVar;
  };
}
let one = closure(1); // передаем 1
console.log(one);
let x = one();
console.log(x);
let two = closure(2); // передаем 2
x = two();
console.log(x);
x = one();
console.log(x);
