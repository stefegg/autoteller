var myImages = ['bardock.jpg',
'black.jpg',
'goku.jpg',
'goten.jpg',
'turles.jpg'];

var gallery = document.getElementById('gallery');


/*for (thisItem in thisSet) {
    do this
  }
  */

// var count = 0;
// for (thisItem in myImages){
//   console.log(myImages[count]);
//   count = count + 1;
// };

var count = 0;
for (thisItem in myImages){
  // print img tag
  //set img src = "images/" + myImage[count]
  var newImage = document.createElement('img');
  newImage.src = "images/" + myImages[count];
  newImage.classList.add('responsive');
  // newImage.classList.add('image-container');
  gallery.appendChild(newImage);
  count = count + 1;
};

var count = 0;
var helloWorld = ["hello world!"]
for (thisItem in helloWorld) {
  console.log(helloWorld[count]);
  count = count +1;
}

function puts(str) {
  console.log(str);
}

function shred(paper) {
  var shreddedPaper = paper.split('');
  console.log(shreddedPaper);
}

// then do ssn = 123456789
//
// then shredder(ssn) and you'll see it in action

// write a function that takes a string and outputs it to the
// console

// myString = "Lalalalalalalal"
//
// function outPut() {
//   console.log("myString");
// }

// write a function that performs some type of math operation


// var number = [2]

function calculate(number) {
  return number * 3;
}

// local vs. global variables

var global = 100;

function calc(){
  var local = 50;
  console.log(global);
  console.log(local);
}

//local can not be used outside of the {} brackets!
