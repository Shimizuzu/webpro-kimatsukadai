'use strict';

var img = new Array("images/DSC00977.JPG",
										"images/IMG_7239.jpg",
										"images/DSC00328.JPG",
										"images/DSC00340.JPG",
										"images/IMG_7222.jpeg"
										);
var element = document.getElementById("slideshow");
var count = -1;
imgTimer();

function imgTimer() {
	count++;
	if (count == img.length) count = 0;
	element.src = img[count];
	setTimeout("imgTimer()",2000);
}
