const hoursOpen = 14;

// Location: Seattle
var locationSeattle = {
  locationName : 'Seattle',
  minCustomers : 23,
  maxCustomers : 65,
  avgCookiePerSale : 6.3
}

// Seattle: Generate random customers function
locationSeattle.generateRandCustomers = function() {
  return Math.round(this.minCustomers + (Math.random() 
    * Math.floor(this.maxCustomers - this.minCustomers)));
};

// Seattle: Generate array for number of cookies sold by hour
locationSeattle.calculateTotalCookiesSoldByHour = function() {
  var cookiesSoldThisHour;
  var totalCookiesArray = [];

  for(let i = 0; i < hoursOpen; i++) {
    cookiesSoldThisHour = Math.round(locationSeattle.generateRandCustomers() * locationSeattle.avgCookiePerSale);
    totalCookiesArray.push(cookiesSoldThisHour);
  }

  return totalCookiesArray;
};

// Seattle: Generate total number of cookies sold in a day
locationSeattle.calculateTotalCookiesSold = function(cookiesSoldArray) {
  var total = 0;

  for(let i = 0; i < cookiesSoldArray.length; i++) {
    total += cookiesSoldArray[i];
  }

  return total;
};

// Seattle: Call functions for populating list values
locationSeattle.totalCookiesSoldByHour = locationSeattle.calculateTotalCookiesSoldByHour();
locationSeattle.totalCookiesSold = locationSeattle.calculateTotalCookiesSold(locationSeattle.totalCookiesSoldByHour);

// Seattle: Get and set HTML elements
var hoursList = document.getElementById('salesdata_list_Seattle');
var currentHour = 6;

var newLiElement, newTextNode, hourText;

for(let i = 0; i < hoursOpen; i++) {
  if(currentHour > 11) {
    if(currentHour === 12) hourText = '12pm: ' + locationSeattle.totalCookiesSoldByHour[i];
    else hourText = (currentHour - 12) + 'pm: ' + locationSeattle.totalCookiesSoldByHour[i];
  }
  else hourText = currentHour + 'am: ' + locationSeattle.totalCookiesSoldByHour[i];

  newLiElement = document.createElement('li');
  newTextNode = document.createTextNode(hourText);
  newLiElement.appendChild(newTextNode);
  hoursList.appendChild(newLiElement);

  currentHour++;
}

hourText = 'Total: ' + locationSeattle.totalCookiesSold;

newLiElement = document.createElement('li');
newTextNode = document.createTextNode(hourText);
newLiElement.appendChild(newTextNode);
hoursList.appendChild(newLiElement);

// =============================================================================================

// Location: Tokyo
var locationTokyo = {
  locationName : 'Tokyo',
  minCustomers : 3,
  maxCustomers : 24,
  avgCookiePerSale : 1.2
}

// Tokyo: Generate random customers function
locationTokyo.generateRandCustomers = function() {
  return Math.round(this.minCustomers + (Math.random() 
    * Math.floor(this.maxCustomers - this.minCustomers)));
};

// Tokyo: Generate array for number of cookies sold by hour
locationTokyo.calculateTotalCookiesSoldByHour = function() {
  var cookiesSoldThisHour;
  var totalCookiesArray = [];

  for(let i = 0; i < hoursOpen; i++) {
    cookiesSoldThisHour = Math.round(locationTokyo.generateRandCustomers() * locationTokyo.avgCookiePerSale);
    totalCookiesArray.push(cookiesSoldThisHour);
  }

  return totalCookiesArray;
};

// Tokyo: Generate total number of cookies sold in a day
locationTokyo.calculateTotalCookiesSold = function(cookiesSoldArray) {
  var total = 0;

  for(let i = 0; i < cookiesSoldArray.length; i++) {
    total += cookiesSoldArray[i];
  }

  return total;
};

// Tokyo: Call functions for populating list values
locationTokyo.totalCookiesSoldByHour = locationTokyo.calculateTotalCookiesSoldByHour();
locationTokyo.totalCookiesSold = locationTokyo.calculateTotalCookiesSold(locationTokyo.totalCookiesSoldByHour);

// Tokyo: Get and set HTML elements
hoursList = document.getElementById('salesdata_list_Tokyo');
currentHour = 6;

for(let i = 0; i < hoursOpen; i++) {
  if(currentHour > 11) {
    if(currentHour === 12) hourText = '12pm: ' + locationTokyo.totalCookiesSoldByHour[i];
    else hourText = (currentHour - 12) + 'pm: ' + locationTokyo.totalCookiesSoldByHour[i];
  }
  else hourText = currentHour + 'am: ' + locationTokyo.totalCookiesSoldByHour[i];

  newLiElement = document.createElement('li');
  newTextNode = document.createTextNode(hourText);
  newLiElement.appendChild(newTextNode);
  hoursList.appendChild(newLiElement);

  currentHour++;
}

hourText = 'Total: ' + locationTokyo.totalCookiesSold;

newLiElement = document.createElement('li');
newTextNode = document.createTextNode(hourText);
newLiElement.appendChild(newTextNode);
hoursList.appendChild(newLiElement);

// =============================================================================================

// Location: Dubai
var locationDubai = {
  locationName : 'Dubai',
  minCustomers : 11,
  maxCustomers : 38,
  avgCookiePerSale : 3.7
}

// Dubai: Generate random customers function
locationDubai.generateRandCustomers = function() {
  return Math.round(this.minCustomers + (Math.random() 
    * Math.floor(this.maxCustomers - this.minCustomers)));
};

// Dubai: Generate array for number of cookies sold by hour
locationDubai.calculateTotalCookiesSoldByHour = function() {
  var cookiesSoldThisHour;
  var totalCookiesArray = [];

  for(let i = 0; i < hoursOpen; i++) {
    cookiesSoldThisHour = Math.round(locationDubai.generateRandCustomers() * locationDubai.avgCookiePerSale);
    totalCookiesArray.push(cookiesSoldThisHour);
  }

  return totalCookiesArray;
};

// Dubai: Generate total number of cookies sold in a day
locationDubai.calculateTotalCookiesSold = function(cookiesSoldArray) {
  var total = 0;

  for(let i = 0; i < cookiesSoldArray.length; i++) {
    total += cookiesSoldArray[i];
  }

  return total;
};

// Dubai: Call functions for populating list values
locationDubai.totalCookiesSoldByHour = locationDubai.calculateTotalCookiesSoldByHour();
locationDubai.totalCookiesSold = locationDubai.calculateTotalCookiesSold(locationDubai.totalCookiesSoldByHour);

// Dubai: Get and set HTML elements
hoursList = document.getElementById('salesdata_list_Dubai');
currentHour = 6;

for(let i = 0; i < hoursOpen; i++) {
  if(currentHour > 11) {
    if(currentHour === 12) hourText = '12pm: ' + locationDubai.totalCookiesSoldByHour[i];
    else hourText = (currentHour - 12) + 'pm: ' + locationDubai.totalCookiesSoldByHour[i];
  }
  else hourText = currentHour + 'am: ' + locationDubai.totalCookiesSoldByHour[i];

  newLiElement = document.createElement('li');
  newTextNode = document.createTextNode(hourText);
  newLiElement.appendChild(newTextNode);
  hoursList.appendChild(newLiElement);

  currentHour++;
}

hourText = 'Total: ' + locationDubai.totalCookiesSold;

newLiElement = document.createElement('li');
newTextNode = document.createTextNode(hourText);
newLiElement.appendChild(newTextNode);
hoursList.appendChild(newLiElement);

// =============================================================================================

// Location: Paris
var locationParis = {
  locationName : 'Paris',
  minCustomers : 20,
  maxCustomers : 38,
  avgCookiePerSale : 2.3
}

// Paris: Generate random customers function
locationParis.generateRandCustomers = function() {
  return Math.round(this.minCustomers + (Math.random() 
    * Math.floor(this.maxCustomers - this.minCustomers)));
};

// Paris: Generate array for number of cookies sold by hour
locationParis.calculateTotalCookiesSoldByHour = function() {
  var cookiesSoldThisHour;
  var totalCookiesArray = [];

  for(let i = 0; i < hoursOpen; i++) {
    cookiesSoldThisHour = Math.round(locationParis.generateRandCustomers() * locationParis.avgCookiePerSale);
    totalCookiesArray.push(cookiesSoldThisHour);
  }

  return totalCookiesArray;
};

// Paris: Generate total number of cookies sold in a day
locationParis.calculateTotalCookiesSold = function(cookiesSoldArray) {
  var total = 0;

  for(let i = 0; i < cookiesSoldArray.length; i++) {
    total += cookiesSoldArray[i];
  }

  return total;
};

// Paris: Call functions for populating list values
locationParis.totalCookiesSoldByHour = locationParis.calculateTotalCookiesSoldByHour();
locationParis.totalCookiesSold = locationParis.calculateTotalCookiesSold(locationParis.totalCookiesSoldByHour);

// Paris: Get and set HTML elements
hoursList = document.getElementById('salesdata_list_Paris');
currentHour = 6;

for(let i = 0; i < hoursOpen; i++) {
  if(currentHour > 11) {
    if(currentHour === 12) hourText = '12pm: ' + locationParis.totalCookiesSoldByHour[i];
    else hourText = (currentHour - 12) + 'pm: ' + locationParis.totalCookiesSoldByHour[i];
  }
  else hourText = currentHour + 'am: ' + locationParis.totalCookiesSoldByHour[i];

  newLiElement = document.createElement('li');
  newTextNode = document.createTextNode(hourText);
  newLiElement.appendChild(newTextNode);
  hoursList.appendChild(newLiElement);

  currentHour++;
}

hourText = 'Total: ' + locationParis.totalCookiesSold;

newLiElement = document.createElement('li');
newTextNode = document.createTextNode(hourText);
newLiElement.appendChild(newTextNode);
hoursList.appendChild(newLiElement);

// =============================================================================================

// Location: Lima
var locationLima = {
  locationName : 'Paris',
  minCustomers : 20,
  maxCustomers : 38,
  avgCookiePerSale : 2.3
}

// Lima: Generate random customers function
locationLima.generateRandCustomers = function() {
  return Math.round(this.minCustomers + (Math.random() 
    * Math.floor(this.maxCustomers - this.minCustomers)));
};

// Lima: Generate array for number of cookies sold by hour
locationLima.calculateTotalCookiesSoldByHour = function() {
  var cookiesSoldThisHour;
  var totalCookiesArray = [];

  for(let i = 0; i < hoursOpen; i++) {
    cookiesSoldThisHour = Math.round(locationLima.generateRandCustomers() * locationLima.avgCookiePerSale);
    totalCookiesArray.push(cookiesSoldThisHour);
  }

  return totalCookiesArray;
};

// Lima: Generate total number of cookies sold in a day
locationLima.calculateTotalCookiesSold = function(cookiesSoldArray) {
  var total = 0;

  for(let i = 0; i < cookiesSoldArray.length; i++) {
    total += cookiesSoldArray[i];
  }

  return total;
};

// Lima: Call functions for populating list values
locationLima.totalCookiesSoldByHour = locationLima.calculateTotalCookiesSoldByHour();
locationLima.totalCookiesSold = locationLima.calculateTotalCookiesSold(locationLima.totalCookiesSoldByHour);

// Lima: Get and set HTML elements
hoursList = document.getElementById('salesdata_list_Lima');
currentHour = 6;

for(let i = 0; i < hoursOpen; i++) {
  if(currentHour > 11) {
    if(currentHour === 12) hourText = '12pm: ' + locationLima.totalCookiesSoldByHour[i];
    else hourText = (currentHour - 12) + 'pm: ' + locationLima.totalCookiesSoldByHour[i];
  }
  else hourText = currentHour + 'am: ' + locationLima.totalCookiesSoldByHour[i];

  newLiElement = document.createElement('li');
  newTextNode = document.createTextNode(hourText);
  newLiElement.appendChild(newTextNode);
  hoursList.appendChild(newLiElement);

  currentHour++;
}

hourText = 'Total: ' + locationLima.totalCookiesSold;

newLiElement = document.createElement('li');
newTextNode = document.createTextNode(hourText);
newLiElement.appendChild(newTextNode);
hoursList.appendChild(newLiElement);