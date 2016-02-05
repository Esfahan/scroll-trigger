# scroll_trigger
It triggers event after scrolling to specific element and passing specific element.  

## Usage
You need to make function for callback, and it need to have `on` and `off`.  
`on` is for triggering event, `off` is for stopping event.
It is run after scrolling to specific element.  
  
**For example**   

if you want to play and pause video with scroll_trigger,  
you have to make function like below.  

```
/*
* video switcher
*/
var video = {
    // play video
    on : function( element ) {
        $(element).get(0).play();
    },

    // stop video
    off : function( element ) {
        $(element).get(0).pause();
    }
};

// call scroll_trigger
$(function() {
    scroll_trigger.action('.element_name', video);
});
```

and more...  
You can make any callback functions as you like.

## Examples
- see [examples](https://github.com/Esfahan/scroll_trigger/tree/master/examples)

## License
- see [LICENSE file](https://github.com/Esfahan/scroll_trigger/blob/master/LICENSE)
