(function () {
    
    var buttons = document.getElementsByTagName("a")
  
    
  
    var buttonClick = function (evt) {
        var target = eventUtility.getTarget(evt);
        eventUtility.preventDefault(evt);
         document.body.bgColor = "red";
    }

    // addEventListener("event name",callback,capture)
    // true = event capture, false= event bubbling
    for (var i = 0, len = buttons.length; i < len; i = i + 1) {

        eventUtility.addEvent(buttons[i], "click", buttonClick);
       // removeEvent(buttons[i], "click", buttonClick);
    }
})(window);