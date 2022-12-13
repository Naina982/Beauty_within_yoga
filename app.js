// $('.menu-btn').click(function(){
//         $('.navbar .menu').toggleClass("active");

//         $('.menu-btn i').toggleClass("active");
//     });

$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
           [...$('.navbar .menu li a')].forEach(element => {
                // console.log(element)
                element.style.color='white'

            });
            // console.dir($('.navbar .menu li a'))
            // console.dir


        }else{
            $('.navbar').removeClass("sticky");
            [...$('.navbar .menu li a')].forEach(element => {
                element.style.color=null;

            });
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
   
    var navbar= document.getElementById("navbar")
    var sticky= navbar.offsetTop;
    
    window.onscroll= function(){
        myfunction();
    }

})
function myfunction(){
    // if(window.pageYOffset>= sticky)
    if(window.scrollY>10)
    {
       
        navbar.classList.add("sticky")
        navbar.style.background="#C71585";
  
    }
    else{
        navbar.classList.remove("sticky");
                navbar.style.background="none";
    }
}

// slide-up script
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
});

$('.navbar .menu li a').click(function(){
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
});

// toggle menu/navbar script
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});