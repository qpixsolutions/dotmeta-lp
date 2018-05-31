var a = $(".nav").offset().top;

$(document).scroll(function(){
    if($(this).scrollTop() > a)
    {
       $('.nav').css({"background":"black"});
       $('.nav').css({"color":"white"});

    } else {
       $('.nav').css({"background":"transparent"});
    }
});
