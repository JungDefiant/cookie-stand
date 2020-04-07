const hoursOpen = 14;

// Location
function Location(locationName, locationID, minCustomers, maxCustomers, avgCookiePerSale) {
  // Properties
  this.locationName = locationName;
  this.locationID = locationID;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiePerSale = avgCookiePerSale;

  // Generate random customers function
  this.generateRandCustomers = function () {
    return Math.round(this.minCustomers + (Math.random()
      * Math.floor(this.maxCustomers - this.minCustomers)));
  };

  // Generate array for number of cookies sold by hour
  this.calculateTotalCookiesSoldByHour = function () {
    var cookiesSoldThisHour;
    var totalCookiesArray = [];

    for (let i = 0; i < hoursOpen; i++) {
      cookiesSoldThisHour = Math.round(this.generateRandCustomers() * this.avgCookiePerSale);
      totalCookiesArray.push(cookiesSoldThisHour);
    }

    return totalCookiesArray;
  };

  // Generate total number of cookies sold in a day
  this.calculateTotalCookiesSold = function (cookiesSoldArray) {
    var total = 0;

    for (let i = 0; i < cookiesSoldArray.length; i++) {
      total += cookiesSoldArray[i];
    }

    return total;
  };

  // Populate arrays, then create and set HTML elements
  this.render = function (tableToPopulate) {
    this.totalCookiesSoldByHour = this.calculateTotalCookiesSoldByHour();
    this.totalCookiesSold = this.calculateTotalCookiesSold(this.totalCookiesSoldByHour);

    var currentHour = 6;
    var salesDataRow = document.getElementById('salesdata_' + this.locationID);
    var newElement, newTextNode;

    newElement = document.createElement('th');
    newTextNode = document.createTextNode(this.locationID);
    newElement.appendChild(newTextNode);
    salesDataRow.appendChild(newElement);

    // Sets the first row of tr with times
    for (let i = 0; i < hoursOpen; i++) {

      newElement = document.createElement('td');
      newTextNode = document.createTextNode(this.totalCookiesSoldByHour[i]);
      newElement.appendChild(newTextNode);
      salesDataRow.appendChild(newElement);

      currentHour++;
    }

    newElement = document.createElement('td');
    newTextNode = document.createTextNode(this.totalCookiesSold);
    newElement.appendChild(newTextNode);
    salesDataRow.appendChild(newElement);

  };
};

var locationSeattle = new Location('seattle', 'Seattle', 23, 65, 6.3);
var locationTokyo = new Location('tokyo', 'Tokyo', 3, 24, 1.2);
var locationDubai = new Location('dubai', 'Dubai', 11, 38, 3.7);
var locationParis = new Location('paris', 'Paris', 20, 38, 2.3);
var locationLima = new Location('lima', 'Lima', 2, 16, 4.6);

var salesDataHeaderRow = document.getElementById('salesdata_headerRow');

salesDataHeaderRow.render = (function () {
  salesDataHeaderRow.appendChild(document.createElement('th'));

  var currentHour = 6;
  var newThElement, newTextNode, hourText;

  for (let i = 0; i < hoursOpen; i++) {
    if (currentHour > 11) {
      if (currentHour === 12) hourText = '12pm';
      else hourText = (currentHour - 12) + 'pm';
    }
    else hourText = currentHour + 'am';

    newThElement = document.createElement('th');
    newTextNode = document.createTextNode(hourText);
    newThElement.appendChild(newTextNode);
    salesDataHeaderRow.appendChild(newThElement);

    currentHour++;
  }

  newThElement = document.createElement('th');
  newTextNode = document.createTextNode('Daily Location Total');
  newThElement.appendChild(newTextNode);
  salesDataHeaderRow.appendChild(newThElement);

})();


locationSeattle.render();
locationTokyo.render();
locationDubai.render();
locationParis.render();
locationLima.render();
