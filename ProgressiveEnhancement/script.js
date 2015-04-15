/*
The Function
define the thing you want to happen */
function doTheThing(){
    alert('This is the thing!');
}

/*
The Variable
get the element you want to do it on */
var elem = document.getElementById("about");

/* 
The Event Listener
set up something to listen for the event you want, then execute the function */
elem.addEventListener('click', doTheThing, false);

/*
Use the function again on another element */
var elem2 = document.getElementById("copy");

elem2.addEventListener('click', doTheThing, false);

/*
JavaScript for touch-only */
if('ontouchstart' in window){

    // do something only for touch devices
    alert('You have a touch device!');

}