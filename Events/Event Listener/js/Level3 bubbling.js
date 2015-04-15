(function () {

    // event bubbling handling
    //eventUtility.addEvent(document, "click", function (evt) {
    //    alert("you clicked " + evt.target);
    //    evt.preventDefault();

    
    // filter  for flexibility and performance
    eventUtility.addEvent(document, "click", function (evt) {
        var target = eventUtility.getTarget(evt),
             tagName = target.tagName;

        // apply behavior dynamically
        if (tagName === "A"  || tagName === "Button") {
            // alert("you clicked on A element");
            document.body.bgColor = "yellow";
            eventUtility.preventDefault(evt);
        }
    });

    //custom attribute with truthy -  <!--custom attribute like HTML  5-->
    eventUtility.addEvent(document, "click", function (evt) {
        var target = eventUtility.getTarget(evt),
             tagName = target.tagName;
        classData = target.getAttribute("data-body-class");
        if (classData) {
            // truthy   i.e. if attribute is defined then returns true
            eventUtility.preventDefault(evt);
            document.body.className = classData;
        }       
    });

    //custom attribute with truthy -  <!--custom attribute like HTML  5-->
    eventUtility.addEvent(document, "mouseover", function (evt) {
        var target = eventUtility.getTarget(evt),
             tagName = target.tagName;
        classData = target.getAttribute("data-body-class");
        if (classData) {
            // truthy   i.e. if attribute is defined then returns true
            document.body.bgColor = "green";
        }
    });
    
}());