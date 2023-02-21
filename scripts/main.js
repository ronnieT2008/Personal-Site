// on scroll change navbar bg color
$(window).scroll(function(){
    let scroll = $(window).scrollTop();
    if (scroll > 100) {
        $(".navbar").addClass("scroll");
        // $(".navbar").css("background" , "#343a40");
        // $(".nav-link").css("color" , "#fff");
        // $(".active").css("color" , "#ffc107");
        // $(".bi").css("color" , "#fff");
    }
    else{
        $(".navbar").removeClass("scroll");
        // $(".navbar").css("background" , "");  
        // $(".nav-link").css("color" , "");
        // $(".active").css("color" , "");	
        // $(".bi").css("color" , "");
    }
})