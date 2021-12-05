// promise////////////////////////////
function timer(time) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve();
        }, time);
    });
}

$(window).on("load",function(){

    new Promise((resolve,reject)=>{
        resolve();
    }).then(()=>{
        $(".no2-1").fadeIn();
        return timer(1000);
    }).then(()=>{
        $(".no2-2").fadeIn();
        return timer(1000);
    }).then(()=>{
        $(".no2-3").fadeIn();
        return timer(1000);
    });


    // async await
    (async function(){
        $(".no3-1").fadeIn();
        await timer(1000);
        $(".no3-2").fadeIn();
        await timer(1000);
        $(".no3-3").fadeIn();
        await timer(1000);
    })();

})