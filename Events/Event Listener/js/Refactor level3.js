(function () {

    // in level3 code , we are repeating same code in many places. Solution is write reusable function

    var mouseHandler = function (evt) {
        var target = eventUtility.getTarget(evt),
            tagName = target.tagName;
    }

    // filter  for flexibility and performance
    eventUtility.addEvent(document, "click", function (evt) {
        var target = eventUtility.getTarget(evt),
            classData = target.getAttribute("data-body-class");

        if (classData) {
            // truthy   i.e. if attribute is defined then returns true
            eventUtility.preventDefault(evt);
            if (evt.type === "click") {
                document.body.className = "";
            }
            else
                document.body.className = classdata;
        }              

    });
    eventUtility.addEvent(document, "click", mouseHandler);
    eventUtility.addEvent(document, "mouseover", mouseHandler);

   
}());