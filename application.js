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
