/******************************************************************************\
	#PROBLEM-01
\******************************************************************************/

function outer() {
  var name = 'Tyler';
  return function() {
    return 'The original name was ' + name;
  }
}

/****** INSTRUCTIONS PROBLEM 1 ******/
/* Above you're given a function that returns another function which has a
closure over the name variable. Invoke outer saving the return value into
another variable called 'inner'. */

// Code Here
var inner = outer();
//Once you do that, invoke inner.
var temp = inner();
console.log(temp);
//Code Here


/******************************************************************************\
	#PROBLEM-02
\******************************************************************************/


function callFriend(name) {
  function dial(number) {
    return 'Calling ' + name + ' at ' + number;
  }
  return dial;
}



/****** INSTRUCTIONS PROBLEM 2 ******/
/* Above you're given a callFriend function that returns the dial function.
Create a callJake function that when invoked with '435-555-9248' returns 'Calling Jake at 435-555-9248'
in your console. */
  //Code Here

function callJake (numString) {
  var name1 = 'Jake';
  var dialFn = callFriend(name1);
  return dialFn(numString);
}

var temp = callJake('435-555-9248');
console.log('Showing return val of callJake: ', temp);



/******************************************************************************\
	#PROBLEM-03
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 3 ******/
/* Write a function called makeCounter that makes the following code work
properly. */

//Code Here
function makeCounter () {
  var counter = 0;
  return (function increment() {
    counter++;
    console.log('Showing counter num: ', counter);
    return counter;

  });
}

//Uncomment this once you make your function
   var count = makeCounter();
   count(); // 1
   count(); // 2
   count(); // 3
   count(); // 4





/******************************************************************************\
	#PROBLEM-04
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 4 ******/
/* Inside the function called counterFactory return two functions that implement
up/down counter. The first function is called inc, this function is responsible
for incrementing the value once. The second function is called dec, this
function is responsible for decrementing the value by one. You will need to use
the module pattern to achieve this. 
Information on the module pattern available here: 
http://stackoverflow.com/questions/17776940/javascript-module-pattern-with-example?answertab=votes#tab-top
*/

function counterFactory(value) {

  // Code here.
  var counter = value;

  return {
    inc : function() {
      counter++;
      console.log('Value up: ', counter);
      return counter;
    },
    dec : function() {
      counter--;
      console.log('Value down: ', counter);
      return counter;
    }
  };
}


counter = counterFactory(10);
var temp = counter.inc(); // 11
counter.inc();// 12
counter.inc();// 13
counter.dec();// 12



/******************************************************************************\
	#PROBLEM-05
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 5 ******/
/* Inside the motivation function create another function called message that
will return 'You're doing awesome, keep it up firstname lastname.' */

function motivation(firstname, lastname) {

  var welcomeText = 'You\'re doing awesome, keep it up ';

  // code message function here.
function message() {
  return welcomeText + firstname +' '+ lastname + '.';
}

  //Uncommment this to return the value of your invoked message function
  return message();

}

var temp = motivation('Billy', 'Bob'); // 'You're doing awesome keep it up Billy Bob.
//temp




/******************************************************************************\
	#PROBLEM-06
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 6 ******/
/* Inside the module's return object create a publicMethod function that
invokes privateMethod. Invoke this by calling module.publicMethod(); outside
the module scope */

var module = (function() {
  var person = {
    name: "phillip",
    age: 29,
    location: "Utah"
  };

  function privateMethod(){
   return "Hi, I'm " + person.name + ", age " + person.age + " from " + person.location;
  }

  // Anything that is being returned is made public and can be invoked from
  // outside our lexical scope
  return {
    // Code here.
    publicMethod : function () {
        console.log('public method is executing');
        console.log('showing object: ', person.name);
        return privateMethod();
    }
  };

}());

var temp = module.publicMethod();
console.log('Showing return val for PublicMethod: ', temp);


//YUI Library Testing Method
var TYPES = {
    'undefined': 'undefined',
    'number': 'number',
    'boolean': 'boolean',
    'string': 'string',
    '[object Function]': 'function',
    '[object RegExp]': 'regexp',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object Error]': 'error'
},
    TOSTRING = Object.prototype.toString;

function type(o) {
    return TYPES[typeof o] || TYPES[TOSTRING.call(o)] || (o ? 'object' : 'null');
};


//YUI Library Testing Method
var TYPES = {
    'undefined': 'undefined',
    'number': 'number',
    'boolean': 'boolean',
    'string': 'string',
    '[object Function]': 'function',
    '[object RegExp]': 'regexp',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object Error]': 'error'
},
    TOSTRING = Object.prototype.toString;

function type(o) {
    return TYPES[typeof o] || TYPES[TOSTRING.call(o)] || (o ? 'object' : 'null');
};


/******************************************************************************\
 #PROBLEM-07
 \******************************************************************************/
/****** INSTRUCTIONS PROBLEM 7 ******/
/* Here we are given three arrays: an array of friends, an array of second-level
friends (friends of friends), and an array of all users. These arrays may share
users. Write a function that takes in our existing friends and returns
a function that will tell us if a given user is not already a friend. */
var friends = ["Tom", "Dick", "Harry"];
var secondLevelFriends = ["Anne", "Harry", "Quinton"];
var allUsers = ["Tom", "Dick", "Harry", "Anne", "Quinton", "Katie", "Mary"];

function findPotentialFriends(existingFriends) {
  var tempArr = existingFriends;

  function comparison (val) {
    return (tempArr.indexOf(val) === -1);
  }

  return (
    function tester(input) {
      console.log('Show me the input type: ' + type(input));
      
      if(type(input) === 'array') {
        var tempReturnArr = input.filter(comparison);
        tempReturnArr;
        return tempReturnArr;
      }

      for(var i = 0; i < tempArr.length; i++){
        if(tempArr[i] === input) {
          return false;
        } else {
          return true;
        }
      }
    }
  );
}

var isNotAFriend = findPotentialFriends( friends );
var temp = isNotAFriend(allUsers[0]); // false
temp
temp = isNotAFriend(secondLevelFriends[2]); // true
temp

/******************************************************************************\
 #PROBLEM-07 -- BLACK DIAMOND
 \******************************************************************************/
/* Using your findPotentialFriends function from above and the Array.filter
method, find all potential second level friends as well as potential friends
from allUsers. */

var potentialSecondLevelFriends = findPotentialFriends( friends ); 
var temp = potentialSecondLevelFriends(secondLevelFriends);
console.log('Showing return val: ', temp);

//I see so what they are asking to do is. filter secondLevel array to alluser and bring out the list.
// var allPotentialFriends = findPotentialFriends( friends );
// var temp = allPotentialFriends(secondLevelFriends.concat(allUsers));
// temp
//Filter out first and second from all user list and show last two.

/******************************************************************************\
	#PROBLEM-08
\******************************************************************************/

/****** INSTRUCTIONS PROBLEM 8 ******/
/* Here we have a for loop that will iterate as long as i is less than or equal
to 5. What we need to do is console.log(i) so that it logs like so:
 0 second after call - log 0
 1 seconds after call - log 1
 2 seconds after call - log 2
 3 seconds after call - log 3
 4 seconds after call - log 4
 5 seconds after call - log 5
 However, because each call to console.log occurs after the loop has finished,
 the value of i has changed before the console.log executes. We'll need to use
 a closure to preserve a reference to i at the time of execution.

 Fix the code below to log the desired output.
 */

function timeOutCounter() {
  for (var i = 0; i <= 5; i++) {
    setTimeout(function() {
    	console.log(i)
	}, i * 1000)
  }
}
timeOutCounter();
