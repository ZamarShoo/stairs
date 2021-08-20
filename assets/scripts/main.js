$(window).scroll(function(){
    $('header').toggleClass('headerScroll', $(this).scrollTop() > 400);
});


$('#toTop').click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
})


$(function() {
    $('.burger').click(function() {
        $('.header__bottom').toggleClass('activeNav')
        $('header').toggleClass('headerActive')
    })
    if($(document).width() < 1050){
        $('.header__bottom nav:first-child > ul > li:first-child a').click(function(e) {
            e.preventDefault()
            $(this).parent().toggleClass('activeLi')
            $('ul.children').toggleClass('active')
        })
    }
})
if($(document).width() > 650){
    var i = 0;
    checkClasses(0)
}
$( window ).resize(function() {
    if($(document).width() > 650){
        var i = 0;
        checkClasses(0)
    }
})
function counter(i, total) {
    if(i > 9) {
        if(i > 9) {
            $("#counter").html(`<p>${i}<i>/</i><span>${total}</span></p>`) 
        } else {
            $("#counter").html(`<p>0${i}<i>/</i><span>${total}</span></p>`) 
        }
    } else {
        $("#counter").html(`<p>0${i}<i>/</i><span>0${total}</span></p>`) 
    }
}
function checkClasses(event){
    if ($('.first-slider') && $(document).width() > 650) {
        var total = $('.first-slider > div').length
        $('.first-slider > div').removeClass('firstActiveItem lastActiveItem');
        if(event > 0) {i++}
        if(event < 0) {i--}
        if (event === 0) {i = 0}
        if (i >= total) {i = 0}
        if (i < 0) {i = total - 1}
        var j = i+1
        if (j >= total) {j = 0}
        if (j < 0) {j = total - 1}
        counter(i+1, total)
        $('.first-slider > div').each(function(index){
            if(index === i) {
                $(this).addClass('firstActiveItem');
            }
            if(index === j) {
                $(this).addClass('lastActiveItem');
                return 0
            }
        })
    } else {i = 0}
}
$('.navigation-arrows-first>img:first-child').click(function() {
    checkClasses(-1)
})
$('.navigation-arrows-first>img:last-child').click(function() {
    checkClasses(1)
})
if($(document).width() < 650){
    addOwlToFirstSlider() 
}
$( window ).resize(function() {
if($(document).width() < 650){
    addOwlToFirstSlider() 
}
})
function addOwlToFirstSlider() {
        $('.first-slider > div').show()
        $('.first-slider').addClass('owl-carousel owl-theme')
        $('.first-slider').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots:false,
            items:1,
            autoplay:true,
            autoplayTimeout:4000,
            onInitialized: counters,
		    onTranslated: counters,
        })
        function counters(event) {
            var items = event.item.count; // Number of items
            var item = event.item.index + 1; // Position of the current item
        
            // it loop is true then reset counter from 1
            if (item > items) {
              item = item - items
            }
            if(items > 9) {
                if(item > 9) {
                    $("#counter").html(`<p>${item}<i>/</i><span>${items}</span></p>`) 
                } else {
                    $("#counter").html(`<p>0${item}<i>/</i><span>${items}</span></p>`) 
                }
            } else {
                $("#counter").html(`<p>0${item}<i>/</i><span>0${items}</span></p>`) 
            }
            event.preventDefault();
        }
        $('.navigation-arrows-first>img:first-child').click(function() {
            $('.first-slider').trigger('prev.owl.carousel');
        })
        $('.navigation-arrows-first>img:last-child').click(function() {
            $('.first-slider').trigger('next.owl.carousel'); 
        })
}


$(function() {
    if ($('article.service-item')) {
        
        $('article.service-item ul li').click(function() {

            var len = $(this).parent().children().length
            $(this).parent().children().removeClass('active');
            $(this).addClass('active')
            var active = $(this).index()
            var slider = $(this).parents('article').children('.l-col').children('.slider-article')
            slider.children().removeClass('active');
            slider.children().each(function(index){
                if(index === active) {
                    $(this).addClass('active');
                }
            })
        })

        $('.server-item--navigation--desktop img:nth-child(1)').click(function() {

            var article = $(this).parents('article')
            var slider = article.children('.l-col').children('.slider-article')
            var len = slider.children().length
            var active = slider.find(".active").index() - 1
            if (active === -1) {active = len - 1}
            slider.children().removeClass('active');
            slider.children().each(function(index){
                if(index === active) {
                    $(this).addClass('active');
                }
            })

            var categories = article.children('.r-col').children('.categories').children('ul')
            categories.children().removeClass('active');
            categories.children().each(function(index){
                if(index === active) {
                    $(this).addClass('active');
                }
            })
        })
        $('.server-item--navigation--desktop img:nth-child(2)').click(function() {

            var article = $(this).parents('article')
            var slider = article.children('.l-col').children('.slider-article')
            var len = slider.children().length
            var active = slider.find(".active").index() + 1
            if (active === len) {active = 0}
            slider.children().removeClass('active');
            slider.children().each(function(index){
                if(index === active) {
                    $(this).addClass('active');
                }
            })

            var categories = article.children('.r-col').children('.categories').children('ul')
            categories.children().removeClass('active');
            categories.children().each(function(index){
                if(index === active) {
                    $(this).addClass('active');
                }
            })

        })

        $('.server-item--navigation--mobile img:nth-child(1)').click(function() {
            let parent = $(this).parents('.mobile-article--slider')
            let slider = parent.children('.slider-article--mobile')
            let len = slider.children().length
            var active = slider.find(".active").index() - 1
            if (active < 0) {active = len - 1}

            slider.children().removeClass('active');
            slider.children().each(function(index){
                if(index === active) {
                    $(this).addClass('active');
                }
            })

            var categories = parent.children('.server-item--navigation').children('.categories').children('ul')
            categories.children().removeClass('active');
            categories.children().show()
            categories.children().each(function(index){
                if(index <= active) {
                    if(index === active) {
                        $(this).addClass('active');
                    }
                    if(index < active) {
                        $(this).hide();
                    }
                }
                
            })
        })
        $('.server-item--navigation--mobile img:nth-child(2)').click(function() {
            let parent = $(this).parents('.mobile-article--slider')
            let slider = parent.children('.slider-article--mobile')
            let len = slider.children().length
            var active = slider.find(".active").index() + 1
            if (active === len) {active = 0}

            slider.children().removeClass('active');
            slider.children().each(function(index){
                if(index === active) {
                    $(this).addClass('active');
                }
            })

            var categories = parent.children('.server-item--navigation').children('.categories').children('ul')
            categories.children().removeClass('active');
            categories.children().show()
            categories.children().each(function(index){
                if(index <= active) {
                    if(index === active) {
                        $(this).addClass('active');
                    }
                    if(index < active) {
                        $(this).hide();
                    }
                }
                
            })
        })
    }
})



    function initComparisons() {
        var x, i;
        /*find all elements with an "overlay" class:*/
        x = document.getElementsByClassName("img-comp-overlay");
        for (i = 0; i < x.length; i++) {
          /*once for each "overlay" element:
          pass the "overlay" element as a parameter when executing the compareImages function:*/
          compareImages(x[i]);
        }
        function compareImages(img) {
          var slider, img, clicked = 0, w, h;
          /*get the width and height of the img element*/
          w = img.offsetWidth;
          h = img.offsetHeight;
          /*set the width of the img element to 50%:*/
          img.style.width = (w / 2) + "px";
          /*create slider:*/
          slider = document.createElement("DIV");
          slider.setAttribute("class", "img-comp-slider");
          /*insert slider*/
          img.parentElement.insertBefore(slider, img);
          /*position the slider in the middle:*/
          slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
          slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
          /*execute a function when the mouse button is pressed:*/
          slider.addEventListener("mousedown", slideReady);
          /*and another function when the mouse button is released:*/
          window.addEventListener("mouseup", slideFinish);
          /*or touched (for touch screens:*/
          slider.addEventListener("touchstart", slideReady);
           /*and released (for touch screens:*/
          window.addEventListener("touchstop", slideFinish);
          function slideReady(e) {
            /*prevent any other actions that may occur when moving over the image:*/
            e.preventDefault();
            /*the slider is now clicked and ready to move:*/
            clicked = 1;
            /*execute a function when the slider is moved:*/
            window.addEventListener("mousemove", slideMove);
            window.addEventListener("touchmove", slideMove);
          }
          function slideFinish() {
            /*the slider is no longer clicked:*/
            clicked = 0;
          }
          function slideMove(e) {
            var pos;
            /*if the slider is no longer clicked, exit this function:*/
            if (clicked == 0) return false;
            /*get the cursor's x position:*/
            pos = getCursorPos(e)
            /*prevent the slider from being positioned outside the image:*/
            if (pos < 0) pos = 0;
            if (pos > w) pos = w;
            /*execute a function that will resize the overlay image according to the cursor:*/
            slide(pos);
          }
          function getCursorPos(e) {
            var a, x = 0;
            e = e || window.event;
            /*get the x positions of the image:*/
            a = img.getBoundingClientRect();
            /*calculate the cursor's x coordinate, relative to the image:*/
            x = e.pageX - a.left;
            /*consider any page scrolling:*/
            x = x - window.pageXOffset;
            return x;
          }
          function slide(x) {
            /*resize the image:*/
            img.style.width = x + "px";
            /*position the slider:*/
            slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
          }
        }
      } 

      initComparisons();


    if($('.slider-second-body')) {
        $('.slider-second-body').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            items:1,
            dots:false,
            onInitialized: count,
		    onTranslated: count,
        })
    
        $('.second-slider-nav > div > img:first-child').click(function() {
            $('.slider-second-body').trigger('prev.owl.carousel'); 
        })
        $('.second-slider-nav > div > img:last-child').click(function() {
            $('.slider-second-body').trigger('next.owl.carousel'); 
        })
        function count(event) {
            var items = event.item.count; // Number of items
            var item = event.item.index + 1; // Position of the current item
        
            // it loop is true then reset counter from 1
            if (item > items) {
              item = item - items
            }
            if(items > 9) {
                if(item > 9) {
                    $(".secondSliderCounter, .secondSliderCounter-m").html(`<p>${item}<i>/</i><span>${items}</span></p>`) 
                } else {
                    $(".secondSliderCounter, .secondSliderCounter-m").html(`<p>0${item}<i>/</i><span>${items}</span></p>`) 
                }
            } else {
                $(".secondSliderCounter, .secondSliderCounter-m").html(`<p>0${item}<i>/</i><span>0${items}</span></p>`) 
            }
            event.preventDefault();
        }
    }



$('.checkbox').click(function() {
    if ($(this).is(':checked')) {
        $(this).parent().addClass('checkedLabel-active')
        $(this).parent().parent().parent().children('.submit').attr("disabled", false);
    } else {
        $(this).parent().removeClass('checkedLabel-active')
        $(this).parent().parent().parent().children('.submit').attr("disabled", true);
    }
})


$('.close-modal').click(function() {
    $(this).parent().hide()
    $(this).parent().parent().hide()
})