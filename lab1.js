'use strict';

/* LAB 1: A Trip to Woodland Park Zoo

 Welcome to Lab 1 :)

 Be sure to read all the comments!

 All of the instructions are inline with the assignment below. Look for the
 word TODO in comments.  Each TODO will have a description of what is
 required.

 To run this file, type the following (in the terminal):

    node lab1.js

 and then press enter/return.

 Instructions for turning this lab in are in the assignment description in
 Canvas.

 I'm happy to answer any questions on Slack.

*/

/* ----------------- Helper ------------------------------------------------
 We've implemented a function that will help you sanity-check your code.
*/

function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

/*
 An assertion is something we expect to be true about the state of the
 program at the point where the assertion is made.

 Remember, state is all the variables that we've declared and their current
 values.

 Below are some examples for how to use the assert method. Tip: once you've run
 this file a couple times to see how they work, comment them out.
 That will help later when you run jscs.
*/

assert(1 === 1, '1 equals 1 - this assert will pass.');
assert(1 === 2, 'this is an example of a failing assertion. 1 does not equal 2.');

/* ===========================================================================
------------------Assertions (8 points total)---------------------------------
==============================================================================
 TODO: Invoke assert twice (4 points each).
 (In other words, create two assertions like the ones
 above.)
 Use any boolean expressions that you like, but preferably
 zoo-themed.  Make one pass and one fail. In the failure message, describe why
 it failed.
*/
assert('wolves' > 'cheetahs', 'Howl at the moon!');
assert('cats' < 'lions' && 'dogs' > 'wolves', 'Faster, wilder, stronger'); /*this code fails because 
of the AND logical operator. While cats are less than lions (alphebetically speaking), dogs are not 
greater than wolves, again aphebetically. Therefore the second operator is false and the assertion 
fails*/
//your code goes here

/* ========================================================================
----------------- Meerkats (20 points total)-------------------------------
===========================================================================
 Meerkats make a sort of chirping noise (according to my 30 seconds of
 research).  We're going to translate two sentences into meerkat speech.
*/

var sentence1 = 'More food please.';
var sentence2 = 'Come over here so you can scratch my belly.';

/*
 Your goal is to replace the words in the above sentences with 'chirp' The
 assertions at the end of this section should pass when you're done.
 HINT: the 'split' method on String will be useful.
*/

// TODO: part #1: use a for loop to replace the words in sentence 1 with
// 'chirp' (10 points)
var sentence1 = 'More food please.';
var splitString = sentence1.split(" ");
for (var i=0; i< splitString.length; i++){ 
  splitString[i]= "chirp";
}
sentence1 = splitString.join([separator = ' ']);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// TODO: part #2: use a while or do-while loop to replace the words in sentence 2
// with 'chirp' (10 points)

var sentence2 = 'Come over here so you can scratch my belly.';
var splitString2 = sentence2.split(' ');
var j = splitString2.length;
while (j--){
  splitString2[j] = "chirp";
}
sentence2 = splitString2.join([separator = ' ']);
// Leave these assertions as-is! If they pass, your code works.
assert(sentence1 === 'chirp chirp chirp.', 'sentence 1 should have 3 chirps');
assert(sentence2 === 'chirp chirp chirp chirp chirp chirp chirp chirp chirp.',
  'sentence 2 should have 9 chirps');

/* ========================================================================
----------------- Favorite Animals (10 points)-----------------------------
===========================================================================
 The zoo is closing in 20 minutes. You still haven't seen your four favorite
 animals. You only have time for one. Use Math.random() to pick which animal
 to see next.
 Hint: read the Math.random description on MDN.
*/

var favoriteAnimals = ['elephant', 'penguin', 'eagle', 'camel'];

var nextAnimal = Math.random();

if(nextAnimal<0.25) {
  nextAnimal = favoriteAnimals[0];
} else if (nextAnimal>0.25 && nextAnimal<0.5) {
  nextAnimal = favoriteAnimals[1];
} else if (nextAnimal>0.5 && nextAnimal<0.75) {
  nextAnimal = favoriteAnimals[2];
} else if (nextAnimal>0.75) {
  nextAnimal = favoriteAnimals[3];
}

console.log(nextAnimal);
// TODO: 10 points
// Assign one of your favorite animals to nextAnimal using Math.random() to pick

// your code goes here
//nextAnimal = //make a math random equation that goes 0-0.25, 0.25-0.5, 0.5-0.75, 0.75-1 correspond to array postions


assert(nextAnimal, 'assign something to nextAnimal');

/* =====================================================================
----------------- Survey Says... (12 points total) ---------------------
========================================================================
 Like any conscientious business, the Woodland Park Zoo collects statistics
 about its animal exhibits. The animalExhibitsStats object is a summary of what
 they found.
*/

// TODO: 4 points
// All of the property names below are surrounded by quotes. Some of the names
// don't require quotes for the code to work. Remove the unnecessary quotes.

var animalExhibitStats = {
  numberOpen: 13,
  'number closed': 2,
  'petting-zoo-open': true,
  mostPopular: 'Lucky the Emperor Penguin',
  '2ndMostPopular': 'Dumbo the Depressed Donkey'
};

/*
 TODO: 4 points
 The animalExhibitStats object is indexed four times below using bracket
 notation. WITHOUT changing any of the property names, replace the bracket
 notation with dot notation wherever possible.
*/

assert(animalExhibitStats.numberOpen === 13, 'there should be 13 open exhibits');
assert(animalExhibitStats['number closed'] === 2, 'there should be 2 closed exhibits');
assert(animalExhibitStats['petting-zoo-open'], 'hey! =( i was promised meerkats!');
assert(animalExhibitStats['2ndMostPopular'] === 'Dumbo the Depressed Donkey',
  'Dumbo is supposed to be second place, as usual');

// TODO: 4 points
// Write an assert about the 'mostPopular' property of animalExibitStats.
// Use the above examples to guide you.

assert(animalExhibitStats.mostPopular === "Lucky the Emperor Penguin", 'A regal eagle indeed');

/* ==================================================================
----------------- Code Style (10 points) ----------------------------
=====================================================================
 TODO: 10 points (5 points each for passing jshint and jscs)
 Now, we're going to use two tools: jshint and jscs, to check our code for
 best-practices and style consistency.

 If you haven't already, run this command in the terminal (inside of this
 directory): npm install

 Now, type
  grunt
   and it will run both jshint and jscs on your code.

 Error and warning descriptions will be printed in the terminal.
 To get full points, correct all of the errors/warnings.
*/
