$(document).ready(function(){
    $(".ti-heart").on("click", function(){
        const image=$(this).parent().parent().parent().siblings().find(".kool").children()
        console.log(image)
    });
});
