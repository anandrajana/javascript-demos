/* Event-driven JavaScript */

function play() {

    // apply a class to the parent node of whatever was clicked
    this.parentNode.setAttribute("class", "playing");

}

function stop() {

    // apply a class to the parent node of whatever was clicked
    this.parentNode.setAttribute("class", "stopped");

}

(function(){

    // save the audio controls to variables
    var playButton = document.getElementById("play"),
        stopButton = document.getElementById("stop");

    // set up the play event listener
    playButton.addEventListener("click", play, false);
    
    // set up the stop event listener
    stopButton.addEventListener("click", stop, false);

})();