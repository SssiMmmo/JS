'use strict'

var services = {
"стрижка": "60 грн",
"гоління": "80 грн",
"Миття голови": "100 грн"
};

services.price = function total() {
  let sum = 0;
  for (let key in services ) {
      if (typeof services[key] === "string") {
          sum += parseInt(services[key]);
      }
      else if (typeof services[key] === 'number') {
          sum += services[key];
      }
  }
  return sum + " грн";
}

console.log(services.price())

services['Розбити скло'] = "200 грн";
services['Манікюр'] = 300;
services['Алкогольні напої'] = null;

console.log(services.price());

//console.log(services);


services.minPrice = function minimum() {
    let price = 100000000;
    for (let key in services) {
        if (typeof services[key] === 'string') {
            //console.log(parseInt(services[key]) + ': ' + price)
            if (parseInt(services[key]) < price){
                price = parseInt(services[key]);
            }
        }
        else if (typeof services[key] === 'number') {
            //console.log(parseInt(services[key]) + ': ' + price)
            if (parseInt(services[key]) < price){
                price = parseInt(services[key]);
            }
        }
    }
    return price + " грн";
}

services["Підстригання вусів"] = "50 грн"

console.log(services.minPrice());