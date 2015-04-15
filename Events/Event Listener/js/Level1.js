(function () {
    
    var buttons= document.getElementsByTagName("button");
   
    // Event capturing means event starts firing from root node (HTML) to our target control
    // button for example. so if you attach click event at document object, it is also fired.

    //Reverse of this is event Bubbling propogates to root. start at target and go upto body
 buttonClick = function (evt) {
     document.body.bgColor = "yellow";
     
        // properties of event
       alert("Event Type : "+evt.type);// shows type of event raised- click
       alert("You clicked on " + evt.target);// button    is target 
       evt.target.disabled = true;

        // <a href="google.com">google</a>   
        // change buttons to <a href....> 
        // now because preventDefault is attached , navigation will not occur
       evt.preventDefault();// method        
       }

        // addEventListener("event name",callback,capture)
        // true = event capture, false= event bubbling

 document.onclick = function () {
     alert("document click event raised");
 }

    for (var i = 0, len = buttons.length; i < len; i = i + 1) {
        buttons[i].addEventListener("click", buttonClick, false);

        //Multiple Handlers
        buttons[i].addEventListener("click", function () { alert("hello") }, false);
    }
        // to Remove event handler
          buttons[i].removeEventListener("click", buttonClick, false);

       // observe hi alert . that is way we have to provide callback handler to add and remove events
        // and do not write anonymous function

        // if you do not need removeEventListener then below code is fine
        //buttons[i].addEventListener("click", function () {
        //    document.body.bgColor = "red";
        //}, false);           
    
        
    })(window);