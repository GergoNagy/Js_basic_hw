// will print out My name is Keith name
var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

// Going to print out score 3, first look at the function
score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

//Going to print out array from the function
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

//From the function going to print Harvey for number 3, the second log will be Keith
var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

//The detective name will be Poirot, detectiveInfo get the name from detectiveInfo function
var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

//Going to print out rick, log function is outside of the function methods
var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

//Mine
var homeWork = "No, no homework on Thu";

var weekDay = function (day) {
  if ("Thu" == day) {
    console.log(homeWork);
  } else {
    console.log(homeWork = "Yes, today is homework");
  }
}

weekDay("Thu");
