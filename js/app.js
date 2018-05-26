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
  //this.dayTotal = dayTotal;
  allStores.push(this);
}

// prototype random function
CookieStore.prototype.randomFunc = function(){
  return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + 1) + this.minCustomer;
};

// prototype function for Sales numbers by hour and
// reduce function for Day Totals
CookieStore.prototype.genSalesByHour = function(){
  for(var i = 0; i < storeHours.length; i++){
    var custPerHour = Math.round(this.randomFunc() * this.avgSales);
    this.hourlyTotal.push(custPerHour);
  }
  // use reduce to add each array position for total
  this.dayTotal = this.hourlyTotal.reduce((acc, val) => {
    return acc + val;
  });
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
  var headEl = document.createElement('th');
  headEl.textContent = ('Total');
  tableSale.appendChild(headEl);
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
  // add day totals to table and a new row to bottom
  dataEl = document.createElement('td');
  dataEl.textContent = this.dayTotal;
  rowEl.appendChild(dataEl);
  tableSale.appendChild(rowEl);
};

var pike = new CookieStore('1st and Pike', 23, 65, 6.3);
var seaTac = new CookieStore('Seatac Airport', 3, 24, 1.2);
var seaCenter = new CookieStore('Seattle Center', 11, 38, 3.7);
var capHill = new CookieStore('Capitol Hill', 20, 38, 2.7);
var alki = new CookieStore('Alki', 2, 16, 4.6);

pike.renderHours();

pike.genSalesByHour();
seaTac.genSalesByHour();
seaCenter.genSalesByHour();
capHill.genSalesByHour();
alki.genSalesByHour();

pike.renderSales();
seaTac.renderSales();
seaCenter.renderSales();
capHill.renderSales();
alki.renderSales();