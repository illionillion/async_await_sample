"use strict";

$(window).on("load",function(){

    // before////////////////////////////
    $(".no1-1").fadeIn();
    setTimeout(() => {    
        $(".no1-2").fadeIn();
        setTimeout(() => {    
            $(".no1-3").fadeIn();
        }, 1000);    
    }, 1000);

})