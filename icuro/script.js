
$(".dropdown-trigger").dropdown({
    coverTrigger:false
});


$(document).ready(function(){
    $('select').formSelect();
});

let pngToGif,
gifToPng,
autoplay;

$(".zoom").hover(
    function() {
        clearInterval(autoplay);
        clearTimeout(pngToGif);
        clearTimeout(gifToPng);
        const src = $(this).attr("src");
        $(this).attr("src", src.replace(/\.png$/i, ".gif"));
        $(this).addClass('zoom-hover');
    }, function() {
        const src = $(this).attr("src");
        $(this).attr("src", src.replace(/\.gif$/i, ".png"));
        $(this).removeClass('zoom-hover');
    });
    
    
    let time = 0;
    autoplay = setInterval(function(){
        $('.zoom').each(function(index, element){
            
            pngToGif = setTimeout(function() {
                element.src = element.src.replace(/\.png$/i, ".gif");
                element.classList.add('zoom-hover');
            }, time);
            time += 3000;
            
            gifToPng = setTimeout(function() {
                element.src = element.src.replace(/\.gif$/i, ".png");
                element.classList.remove('zoom-hover');
            }, time);
        });
    },1000);
    
    $("#searchButton").click(function() {
        $("li.nav-elements").addClass('hide');
        $("#searchNavElement").removeClass('hide');
        $("#search").focus();
    });
    
    $("#search").focusout(function() {
        $("li.nav-elements").removeClass('hide');
        $("#searchNavElement").addClass('hide');
    });
    
    let nav = document.getElementsByTagName('nav');
    var all = document.getElementsByClassName('dropdown-trigger');

    window.onscroll = function(){
        if (window.pageYOffset > 600) {
            // Main
            nav[0].classList.remove('black');
            nav[0].classList.add('white');
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = 'black';
            }
        }
        else {
            // Hero
            nav[0].classList.remove('white');
            nav[0].classList.add('black');
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = 'white';
            }
        }
    };