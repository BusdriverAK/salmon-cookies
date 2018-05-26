'use strict';

var allStores = [];
var storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var tableSale = document.getElementById('store');

// CONSTRUCTOR FUNCTION for cookie stores
function CookieStore(location, minCustomer, maxCustomer, avgSales){
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgSales = avgSales;
  this.hourlyTotal = [];
  this.dayTotal = dayTotal;
  allStores.push(this);
}

// prototype random function
CookieStore.prototype.randomFunc = function(){
  return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + 1) + this.minCustomer;
};

// prototype function for Sales numbers by hour
CookieStore.prototype.genSalesByHour = function(){
  for(var i = 0; i < storeHours.length; i++){
    var custPerHour = Math.round(this.randomFunc() * this.avgSales);
    this.hourlyTotal.push(custPerHour);
  }
};

// render Hours to header row of table
CookieStore.prototype.renderHours = function(){
  var blankEle = document.createElement('td');
  var rowTotal = document.createElement('td');
  tableSale.appendChild(blankEle);

  for(var i = 0; i < storeHours.length; i++){
    var headEl = document.createElement('th');
    headEl.textContent = storeHours[i];
    tableSale.appendChild(headEl);
  }
  tableSale.appendChild(rowTotal);
};

// render sales function
CookieStore.prototype.renderSales = function(){
  var rowEl = document.createElement('tr');
  var dataEl = document.createElement('td');
  dataEl.textContent = this.location;
  rowEl.appendChild(dataEl);

  for(var i = 0; i < this.hourlyTotal.length; i++){
    dataEl = document.createElement('td');
    dataEl.textContent = this.hourlyTotal[i];
    rowEl.appendChild(dataEl);
  }
  tableSale.appendChild(rowEl);
};



