
//<!-- ----------JavaScript for toggle menu-------- -->

var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right="0";
}


function hideMenu(){
    navLinks.style.right = "-200px";
}


// owl carousel




$(document).ready(function(){
  
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    dots:true,
    responsive:{
        0:{
            items:1
        }, 
        544:{
            items:2
        }
    }

})
  });
