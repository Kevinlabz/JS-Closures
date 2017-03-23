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

function closure(num) {
  return function() {
    console.log(num);
  }
}

for (var i = 0; i <= 5; i++) {
  setTimeout(closure(i), i * 1000);
}
