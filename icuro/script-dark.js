// Executes the JavaScript once the html document is loaded
document.addEventListener('DOMContentLoaded', function() {
    /**********************************************************
    * Materializecss components
    **********************************************************/
    
    // Select in the contact form
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
    
    // Dropdown elements in the menu
    var elems = document.querySelectorAll('.dropdown-trigger');
    var options = {
        coverTrigger: false
    }
    var instances = M.Dropdown.init(elems, options);
    
    
    /**********************************************************
     * Gif carousel
     **********************************************************/

    let autoplayId, autostopId;
    let videos = document.getElementsByClassName('zoom'); // Get all Gif elements
    
    /**
    * Add an event listener on each element when the mouse is over or out
    */
    for (let i = 0; i < videos.length; i++) {
        const element = videos[i];
        element.onmouseover = function(){
            element.src = element.src.replace(/\.png$/i, ".gif");
            element.classList.add('zoom-hover');
            clearTimeout(autoplayId); // Stop the infinite play loop
            clearTimeout(autostopId); // Stop the infinite stop loop
            stopGif(element); // Stop all gif animations in progress except the current mouse over element
        };
        
        element.onmouseout = function(){
            element.src = element.src.replace(/\.gif$/i, ".png");
            element.classList.remove('zoom-hover');
            playGif(); // Start the infinite play and stop loop
        };
    }
    
    
    /**
    * Play all gif function
    */
    function playGif() {
        let i = 0; // Set the index starts to 0
        let timeout = 2000;
        autoplayId = setTimeout(function autoplay() {
            let element = videos[i]; // Get the current Gif element to play
            // Play script
            element.src = element.src.replace(/\.png$/i, ".gif");
            element.classList.add('zoom-hover');
            
            // Stop script
            autostopId = setTimeout(function () {
                element.src = element.src.replace(/\.gif$/i, ".png");
                element.classList.remove('zoom-hover');
            }, timeout);
            i = (i + 1) % videos.length; // Go to the next Gif element to play
            autoplayId = setTimeout(autoplay, timeout); // (*) Recursive function: infinite loop
        }, timeout);
    }
    
    /**
    * Stop all gif function
    */
    function stopGif(currentElement) {
        for (let i = 0; i < videos.length; i++) {
            const element = videos[i];
            if (element != currentElement) {
                const element = videos[i];
                element.src = element.src.replace(/\.gif$/i, ".png");
                element.classList.remove('zoom-hover');
            }
        }
    }
    playGif(); // Start the infinite gif play and stop loop    


    /**********************************************************
     * Search menu bar
     **********************************************************/
    
    const navElements = document.getElementsByClassName('nav-elements');
    const searchNavElements = document.getElementById('searchNavElement');
    const searchInput = document.getElementById('search');
    
    document.getElementById('searchButton').onclick = function(){
        for (let i = 0; i < navElements.length; i++) {
            const navElement = navElements[i];
            navElement.classList.add('hide');   
        }
        searchNavElements.classList.remove('hide');
        searchInput.focus();
    };
    
    // onfocusout doesn't work on Chrome, Safari so we need yo use addEventListener
    searchInput.addEventListener("focusout", function(){ 
        for (let i = 0; i < navElements.length; i++) {
            const navElement = navElements[i];
            navElement.classList.remove('hide');   
        }
        searchNavElements.classList.add('hide');
    });
    

    /**********************************************************
     * Menu bar is turning white when you scroll down the page
     **********************************************************/

   /*  let nav = document.getElementsByTagName('nav');
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
    }; */
});