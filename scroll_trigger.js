/*
* Trigger event after scrolling to specific element.
*
* version 1.0.0
*
* The MIT License (MIT)
* Copyright (c) 2016 Esfahan
*
*/
var scroll_trigger = {

    action : function( element, callback ) {
        scroll_trigger.initialize(element);
        scroll_trigger.scroll_event(callback);
    },

    // initialize
    initialize : function(element) {
        this.element = element;
    },

    scroll_event : function(callback) {

        $(window).scroll(function() {
            var self = this;

            // Get positions
            var positions = scroll_trigger.positions(self);

            // Get running and stopping position
            var range = scroll_trigger.range(positions);

            // Do the event while element is visible.
            if (
                positions.current > range.run && 
                positions.current <= range.stop
            ) {
                callback.on(scroll_trigger.element);

            // Stop the event while element is invisible.
            } else {
                callback.off(scroll_trigger.element);

            }

        });

    },

    // Set positions
    positions : function(self) {
        var positions = {};
        positions.height = {};

        // Get the current vertical position
        positions.current = $(self).scrollTop();

        // Get top position of element
        positions.top = $(scroll_trigger.element).offset().top;

        // Get height of element
        positions.height.element = $(scroll_trigger.element).outerHeight();


        return positions;
    },

    // Set range
    range : function(positions) {
        var range = {};
        
        // running position
        range.run = positions.top - (positions.height.element * 0.5);
        // stopping position
        range.stop = range.run + positions.height.element;

        return range;
    }

};
