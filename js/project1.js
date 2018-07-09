$(document).ready(function(){
    $(window).on("scroll",function(){
        if($(this).scrollTop()>80){
            $(".intro").fadeOut(500)
        }else{
            $(".intro").fadeIn(500)
        }
    })
    $(".loading").fadeOut(5000)
    
    
    //start arrow
      var _scrollTop  = $("#scrollToTop");
       $(window).on('scroll', function () {
        console.log($(this).scrollTop())
        if ($(this).scrollTop() > 500) {
            _scrollTop.show(300);
        } else {
            _scrollTop.hide(300);
        }
    })
      _scrollTop.on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1200);
    })
    new WOW().init();
    
 
});