// ⭐️ Example Challenge START ⭐️


console.log('Hello world');

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// processFirstItem();

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * Counter1's variable count has block scope. The variable count is declared inside the block of code in the function counterMaker, and it cannot leave/be accessed outside because its inside the curly brackets. 
 * There is another function called "counter" inside the first function.  
 *
 * However, in counter2, the variable count is declared outisde the function, so it has global scope and can be accessed from anywhere in the program.
 * 
 *  2. Which of the two uses a closure? How can you tell?
 * counter1 uses a closure. I can tell because it is a function that returns a 2nd function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *counter1 would be preferable if you only need to access the variable count inside the function.
 counter2 would be better if you need to access count outside the function.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */



function inning(){
  let randomPoints = Math.round(Math.random() * 2);
  return (randomPoints);
}

inning();

let score = inning();
console.log(score);


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` 
(from above) and a number of innings and and returns the final score of the game 
in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, inningNumber){
  let homePoints = 0;
  let awayPoints = 0;
  for (let i = 0; i < inningNumber; i++){
    homePoints = homePoints + inning();
    awayPoints = awayPoints + inning();
  };

return {"home": homePoints, "away": awayPoints}
};

console.log(finalScore(inning,9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(getInningScore, inningNumber) { 
 let homePoints = 0;
 let awayPoints = 0;
  for (let inning = 1; inning <= inningNumber; inning++){
    homePoints = homePoints + getInningScore();
    awayPoints = awayPoints + getInningScore();
    console.log(`${inning} inning: ${homePoints} - ${awayPoints}`);

  }
  console.log(`Final Score: ${homePoints} - ${awayPoints}`)
}
scoreboard(inning, 9);

