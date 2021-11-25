$(document).ready(function(){
    
    /*TECH OWL CAROUSEL*/ 
    $('#tech .owl-carousel').owlCarousel({
        margin: 40,
        dots: false,
        nav: true,
        navText: ["<span><i class='fas fa-arrow-left'></i></span>", "<span><i class='fas fa-arrow-right'></i></span>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    /*END OF TECH OWL CAROUSEL*/ 

    /*SECURITY OWL CAROUSEL*/ 
    $('#security .owl-carousel').owlCarousel({
        loop: true,
        margin: 40,
        dots: false,
        nav: true,
        navText: ["<span><i class='fas fa-arrow-left'></i>Previous</span>", "<span>Next<i class='fas fa-arrow-right'></i></span>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    /*END OF TECH OWL CAROUSEL*/ 
    
    /*FAVOURITE OWL CAROUSEL*/ 
    $('#favourite .owl-carousel').owlCarousel({
        loop: true,
        margin: 40,
        dots: false,
        nav: true,
        navText: ["<span><i class='fas fa-arrow-left'></i></span>", "<span><i class='fas fa-arrow-right'></i></span>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    /*END OF FAVOURITE OWL CAROUSEL*/ 

});















