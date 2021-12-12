$(document).ready(function(){
    $(".ti-heart").on("click", function(){
        const image=$(this).parent().parent().parent().siblings().find(".default-img").attr("src");

        const name=$(this).parent().parent().parent().parent().siblings().children("h3").text();
        
        const keyName=$(this).parent().parent().parent().parent().siblings().children().attr("id");

        console.log(name)

        const shoeData={
            shoeImage: image,
            shoeName: name
        }
        console.log(shoeData)
        console.log(keyName)
        localStorage.setItem(keyName,JSON.stringify(shoeData));
    }); 
});
