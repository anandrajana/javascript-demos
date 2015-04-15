(function () {
    var form = document.getElementById("theForm"),
    button = form.myButton,
    textbox = form.myTextBox,
    textarea = form.myTextArea;

    eventUtility.addEvent(form, "submit", function (evt) {

        eventUtility.preventDefault(evt);
        // target = evt.target        // get button 
        //target.disable=true;  // disable the button
        // target.type              // get type of event raised
    });

    eventUtility.addEvent(button, "click", function (evt) {
        var target = eventUtility.getTarget(evt);

        if (textbox.value === "") {
            alert("you must enter data ");
            txtbox.focus();// visual queue
            // textarea.select();
            // textrarea.disbaled=true;

        }
    });

})()