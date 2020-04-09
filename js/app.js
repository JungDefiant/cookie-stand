const hoursOpen = 14;
var allLocations = [];

// Location
function Location(locationName, locationID, minCustomers, maxCustomers, avgCookiePerSale) {
  // Properties
  this.locationName = locationName;
  this.locationID = locationID;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiePerSale = avgCookiePerSale;
  this.totalCookiesSold = 0;
  this.totalCookiesSoldByHour = [];

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

    // TO CHANGE: Creates and adds its own rows, then populates with contents
    var currentHour = 6;
    var salesDataBody = document.getElementById('salesdata_Content');
    var salesDataRow = document.createElement('tr');
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

    salesDataBody.appendChild(salesDataRow);
  };
};

// allLocations
allLocations.deleteAllRows = function() {
  var salesDataBodyChildNodes = document.getElementById('salesdata_Content');
  console.log("BEFORE: " + salesDataBodyChildNodes);
  
  while(salesDataBodyChildNodes.firstChild){
    salesDataBodyChildNodes.removeChild(salesDataBodyChildNodes.firstChild);
  }

  console.log("AFTER: " + salesDataBodyChildNodes);
}

allLocations.renderAllLocations = function() {
  this.deleteAllRows();

  
  for(var i = 0; i < this.length; i++) {
    this[i].render();
  }
}

allLocations.push(new Location('seattle', 'Seattle', 23, 65, 6.3));
allLocations.push(new Location('tokyo', 'Tokyo', 3, 24, 1.2));
allLocations.push(new Location('dubai', 'Dubai', 11, 38, 3.7));
allLocations.push(new Location('paris', 'Paris', 20, 38, 2.3));
allLocations.push(new Location('lima', 'Lima', 2, 16, 4.6));


// SALES DATA ROW: HEADER
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

// SALES DATA ROW: TOTALS
var salesDataTotalRow = document.getElementById('salesdata_Total');

salesDataTotalRow.addAllHourTotals = function (locationArray, hourIndex) {
  var total = 0;

  for(let i = 0; i < locationArray.length; i++) {
    total += locationArray[i].totalCookiesSoldByHour[hourIndex];
  }

  return total;
};

salesDataTotalRow.render = function () {
  var currentHour = 6;
  var totalCookiesOverall = 0;
  var salesDataRow = document.getElementById('salesdata_Total');
  var newElement, newTextNode, totalCookiesThisHour;

  // Removes all child elements
  while(salesDataRow.firstChild) {
    salesDataRow.removeChild(salesDataRow.firstChild);
  }

  // Adds header node
  newElement = document.createElement('th');
  newTextNode = document.createTextNode('Total');
  newElement.appendChild(newTextNode);
  salesDataRow.appendChild(newElement);

  // Sets the first row of tr with times
  for (let i = 0; i < hoursOpen; i++) {
    totalCookiesThisHour = salesDataTotalRow.addAllHourTotals(allLocations, i);
    totalCookiesOverall += totalCookiesThisHour;

    newElement = document.createElement('td');
    newTextNode = document.createTextNode(totalCookiesThisHour);
    newElement.appendChild(newTextNode);
    salesDataRow.appendChild(newElement);

    currentHour++;
  }

  newElement = document.createElement('td');
  newTextNode = document.createTextNode(totalCookiesOverall);
  newElement.appendChild(newTextNode);
  salesDataRow.appendChild(newElement);
};

// FORM: EVENT FUNCTIONS
var addLocationForm = document.getElementById('addNewLocation');

addLocationForm.addEventListener('submit', function(e) {
  e.preventDefault();

  var newLocationID = e.target.locationName.value.toLowerCase();
  var newLocationName = e.target.locationName.value;
  var newMinCust = parseInt(e.target.minCust.value);
  var newMaxCust = parseInt(e.target.maxCust.value);
  var newAvgCookiesPerSale = parseFloat(e.target.avgCookiesPerSale.value);

  if(newMinCust > newMaxCust) {
    alert('Minimum customers are greater than maximum customers! Enter different values.');
  } else {
    // addLocationForm.setCustomValidity('');
    
    var newLocation = new Location(newLocationID, newLocationName, newMinCust, newMaxCust, newAvgCookiesPerSale);

    allLocations.push(newLocation);
    allLocations.renderAllLocations();
    salesDataTotalRow.render();
  }
});

// addEventListener('submit', function(e) {})
// e.preventDefault()

// Render functions called
allLocations.renderAllLocations();
salesDataTotalRow.render();
