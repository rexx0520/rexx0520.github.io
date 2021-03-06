window.addEventListener("load", function(){
    $("#contents").fadeIn("normal");
    const observer = lozad(); // lazy loads elements with default selector as '.lozad'
    observer.observe();
});

/*====================
     Ripple
====================*/
$.ripple("skill,.card", {
    debug: false, // Turn Ripple.js logging on/off
    on: 'mousedown', // The event to trigger a ripple effect
    opacity: 0.4, // The opacity of the ripple
    color: "auto", // Set the background color. If set to "auto", it will use the text color
    multi: true, // Allow multiple ripples per element
    duration: 0.4, // The duration of the ripple
    // Filter function for modifying the speed of the ripple
    rate: function(pxPerSecond) {
        return pxPerSecond;
    },
    easing: 'linear' // The CSS3 easing function of the ripple
    }); 

