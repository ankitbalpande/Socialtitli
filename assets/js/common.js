
// sidebar javasript
function openNav() {
    document.getElementById("mySidebar").style.width = "35%";
    document.getElementById("main").style.marginLeft = "25%";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0px";
    document.getElementById("main").style.marginLeft= "100px";
    
  }
$(document).ready(function(){
  
  $('.closebtn').click(function(){
    $('#mainBox .box').toggle('hide');
  })
 
})
var links = document.querySelectorAll('.sidebar a');
var boxes = document.querySelectorAll('.box');

links.forEach(function(link, index) {
  link.addEventListener('mouseover', function() {
    // Hide all boxes with a slide-out animation
    boxes.forEach(function(box) {
      box.style.width = '0px';
      box.style.transition = 'transform 0.3s esey-out';
      box.style.left = '-10000px';
      box.style.display = 'block';

    });

    // Show the corresponding box for the current link with a slide-in animation
    boxes[index].style.width = '75%';
    boxes[index].style.left = '0px';
    boxes[index].style.transition = 'width 0.3s esey-out';
    box.style.display = 'block';
  });
});


//--pointer

let curs = document.querySelectorAll('.gread-move');
let section = document.querySelectorAll('.industries-serve');

for(let i=0; i<section.length; i++){
  section[i].addEventListener('mousemove', (e) => {
    let x = e.pageX;
    let y = e.pageY;
    curs[i].style.left = (x - 20) + "px";
    curs[i].style.top = (y - 20) + "px";
    curs[i].style.opacity = "1"
  });
  
   section[i].addEventListener('mouseleave', (e) => {
    curs[i].style.opacity = "0"
  });
}


  
// on scroll javascript

/* === Shrink Header on Scroll === */

var header = $('header');
var shrinkIt = header.height();

$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if ( scroll >= shrinkIt ) {
    header.addClass('shrunk');
  }
  else {
    header.removeClass('shrunk');
  }
});


$(document).ready(function(){
  $('#btmSlide').owlCarousel({
    items:6,
    nav:false,
    loop:true,
    autoplay:true,
    dots:false,
    center:true,
    stagePadding: 50,
    slideTransition: 'linear',
    autoplayTimeout: 1000,
    autoplaySpeed: 10000,
    autoplayHoverPause:true,
    margin:20,
    responsive:{
        0:{
            items:2,
            
        },
        600:{
            items:3,
        
        },
        800:{
            items:4
        },
        1000:{
            items:7,
        }
    }
});

})


//scrolling top btn

//----------Get the button===============

const goTopBtn = document.querySelector('#go-to-top');

window.addEventListener('scroll', checkHeight)

function checkHeight(){
    if(window.scrollY > 200){
        goTopBtn.style.display = 'flex'
    }else{
        goTopBtn.style.display = 'none'
    }
}
goTopBtn.addEventListener('click', () =>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

//-----------modal==================
$(function(){
    $('.contact-btn').click(function(){
        $('#myModal').modal('show');
    })
    $('.close-button').click(function(){
        $('#myModal').modal('hide');
    })
})


///-------swiper-slider============================

  var swiper = new Swiper("#socialtitli-offering-poster",{
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".socialtitli-button-next",
      prevEl: ".socialtitli-button-prev",
    },
  });



///--------insights====================================
  var swiper = new Swiper("#insights",{
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".insights-button-next",
        prevEl: ".insights-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: { 
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
  });

    
    var items = $(".list-wrapper .list-item-work");
    var numItems = items.length;
    var perPage = 8;
    items.slice(perPage).hide();

    $('#pagination-container').pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: "&laquo;",
        nextText: "&raquo;",
        onPageClick: function (pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
            window.scrollTo({
              top: 1060,
              behavior: 'smooth'
            });
          }
    });