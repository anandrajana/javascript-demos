// Cross browser utility
// if IE 9 , supports std event model
// if IE 8, no std. event model    (Legacy event model)


// instead of adding to window object , i am writing to my own object called event utility
var eventUtility = {   
 addEvent : function (el, type, fn) {
    // feature detection
    // IE9 supports both std and legacy
    if (typeof window.addEventListener !== "undefined") {
        el.addEventListener(type, fn, false);// bubble
    }
        // legacy code IE 8
    else if (typeof attachEvent !== "undefined") {
        el.attachEvent("on" + type, fn);    // onclick
    }
        // DOM level 0
    else {
        el["on" + type] = fn;  //  obj["property"]
    }
},
    // to invoke IE 8 , Open IE, press F12 for developer tools, select Browser mode IE8


    // to remove event

    removeEvent : function (el, type, fn) {
        // feature detection
        // IE9 supports both std and legacy
        if (typeof window.removeEventListener !== "undefined") {
            el.removeEventListener(type, fn, false);// bubble
        }
            // legacy code IE 8
        else if (typeof detachEvent !== "undefined") {
            el.detachEvent("on" + type, fn);    // onclick
        }
            // DOM level 0
        else {
            el["on" + type] = null;  //  obj["property"]
        }
},

    getTarget:function(event){
        if(typeof event.target !== "undefined"){
            return event.target;
        }
        else{
            return event.srcElement;
        }
    },    
    getCharCode: function (event) {       
    	if(typeof event.charCode === 'number')
    	{// other than IE
    	    return event.charCode;
    	}
    	   else
    	{
            //IE
    	    return event.keyCode;
    	}    	  
    },

    preventDefault : function (event) {
    	
        if (typeof event.preventDefault !== "undefined") {
            event.preventDefault();
        }
        else {
            //IE 8
            event.returnValue = false;
        }
    },
    // stop event propagation
    stopPropagation:function  (event) {
        if (event.stopPropagation) {
                event.stopPropagation();
        } else {
             event.cancelBubble = true;
                }
        }
    };