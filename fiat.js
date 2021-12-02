let fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Blue",
  passengers: 2,
  mileage: 88000,
  started: false,
  fuel: 0,
  start: function () {
    this.started = true;
  },
  stop: function () {
    this.started = false;
  },
  drive: function () {
    if (this.started) {
      alert("Бип!");
    } else {
      alert("Сначала запустите двигатель!");
    }
  },
  showFuel: function () {
    alert("У меня в баке " + this.fuel + " литров бензина!");
  },
  toString: function () {
    return "Автомобиль " + this.make + this.year;
  },
};

alert(fiat.make);
fiat.start();
fiat.drive();
fiat.showFuel();

alert(fiat);
