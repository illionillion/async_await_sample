const timecode=[1000,2000,1000,2500,4000,1500,5000];


$(window).on("load",function(){
        (async function(){
            
            for (const iterator of timecode) {

                console.log(iterator+"m秒後");
                await timer(iterator);
                // console.log("pon");
    
            }
            console.log("終了");
        })();
})
