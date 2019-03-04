// Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/google-collage.jpg') {
      myImage.setAttribute ('src','images/google-collage.jpg');
	} else {
	  myImage.setAttribute ('src','images/google-collage.jpg');
	}
}

// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Royce');
  localStorage.setItem('Royce', myName);
  myHeading.textContext = 'My Travels, ' + myName;
}

if(!localStorage.getItem('Royce')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('Royce');
  myHeading.innerHTML = 'My Travels, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}