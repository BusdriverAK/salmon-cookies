'use strict';

var storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

//random function
/* function randomCustomers() {
  return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + 1) + this.minCustomer;
};
*/

// object literal for Pike Location
var pikeStore = {
  minCustomer: 23,
  maxCustomer: 65,
  avgSales: 6.3,
  hourlyTotal: [],
  getCustomers: function(){
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) +1) + this.minCustomer;
  },

  hourlySales: function(){
    for(var i = 0; i < storeHours.length; i++){
      var customersPerHour = this.getCustomers();
      var salesPerHour = Math.round(customersPerHour * this.avgSales);
      this.hourlyTotal.push(salesPerHour);
    }
  },
};
pikeStore.hourlySales();

var pikeSales = pikeStore.hourlyTotal.reduce((acc, val) => {
  return acc + val;
});

//CHANGING THE DOM WITH VALUES CALCULATED
// PROBABLY TRY MOVING THIS INTO A LOOP THAT EXISTS / a function
// function
for(var i = 0; i < storeHours.length; i++){
  var list = document.createElement('li');
  var content = document.createTextNode(storeHours[i] + ' : ' + pikeStore.hourlyTotal[i] + ' cookies');
  list.appendChild(content);
  document.getElementById('pike').appendChild(list);
}


console.log('total', pikeSales);

var seatacStore = {
  minCustomer: 3,
  maxCustomer: 24,
  avgSales: 1.23,
  totalSales: 0,
  hourlyTotal: [],
  getCustomers: function(){
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) +1) + this.minCustomer;
  },

  hourlySales: function(){
    for(var i = 0; i < storeHours.length; i++){
      var customersPerHour = this.getCustomers();
      var salesPerHour = Math.round(customersPerHour * this.avgSales);
      this.hourlyTotal.push(salesPerHour);
    }
  }
};
seatacStore.hourlySales();

var seatacSales = seatacStore.hourlyTotal.reduce((acc, val) => {
  return acc + val;
});
console.log(seatacStore.hourlyTotal);

var seattleCenterStore = {
  minCustomer: 11,
  maxCustomer: 38,
  avgSales: 3.7,
  totalSales: 0,
  hourlyTotal: [],
  getCustomers: function(){
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) +1) + this.minCustomer;
  },

  hourlySales: function(){
    for(var i = 0; i < storeHours.length; i++){
      var customersPerHour = this.getCustomers();
      var salesPerHour = Math.round(customersPerHour * this.avgSales);
      this.hourlyTotal.push(salesPerHour);
    }
  }
};
seattleCenterStore.hourlySales();

var seattleCenterSales = seattleCenterStore.hourlyTotal.reduce((acc, val) => {
  return acc + val;
});
console.log(seattleCenterStore.hourlyTotal);

var capHillStore = {
  minCustomer: 20,
  maxCustomer: 38,
  avgSales: 2.3,
  totalSales: 0,
  hourlyTotal: [],
  getCustomers: function(){
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) +1) + this.minCustomer;
  },

  hourlySales: function(){
    for(var i = 0; i < storeHours.length; i++){
      var customersPerHour = this.getCustomers();
      var salesPerHour = Math.round(customersPerHour * this.avgSales);
      this.hourlyTotal.push(salesPerHour);
    }
  }
};
capHillStore.hourlySales();

var capHillSales = capHillStore.hourlyTotal.reduce((acc, val) =>{
  return acc + val;
});
console.log(capHillStore.hourlyTotal);

var alkiStore = {
  minCustomer: 2,
  maxCustomer: 16,
  avgSales: 4.6,
  totalSales: 0,
  hourlyTotal: [],
  getCustomers: function(){
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) +1) + this.minCustomer;
  },

  hourlySales: function(){
    for(var i = 0; i < storeHours.length; i++){
      var customersPerHour = this.getCustomers();
      var salesPerHour = Math.round(customersPerHour * this.avgSales);
      this.hourlyTotal.push(salesPerHour);
    }
  }
};
alkiStore.hourlySales();
var alkiSales = alkiStore.hourlyTotal.reduce((acc, val) =>{
  return acc + val;
});
console.log(alkiStore.hourlyTotal);