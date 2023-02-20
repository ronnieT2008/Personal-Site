// on scroll change navbar bg color
$(window).scroll(function(){
    let scroll = $(window).scrollTop();
    if (scroll > 100) {
        $(".navbar").css("background" , "#343a40");
        $(".nav-link").css("color" , "#fff");
        $(".active").css("color" , "#ffc107");
        $(".bi").css("color" , "#fff");
    }
    else{
        $(".navbar").css("background" , "transparent");  
        $(".nav-link").css("color" , "#000");
        $(".active").css("color" , "#fff");	
        $(".bi").css("color" , "#000");
    }
})