const scrollElementsLeft = document.querySelectorAll('.slideanim-left')
const scrollElementsRight = document.querySelectorAll('.slideanim-right')
const scrollElementsUp = document.querySelectorAll('.slideanim-up')

$(document).ready(function() {
    //scroll event listener
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky")
        }

        handleScrollAnimation();
    })

    // typing animation
    var typed = new Typed(".typing", {
        strings: ["Student", "Developer", "Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var typed = new Typed(".typing-2", {
        strings: ["code", "design", "draw", "eat", "travel", "learn"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })


    // toggle menu/navbar script
    $(`.menu-btn`).click(function() {
        $(`.navbar .menu`).toggleClass("active");
        $(`.menu-btn i`).toggleClass("active");
    })

    //check if element is in view
    const elementInView = (el, offset = 0) => {
        //element's distance from top of page
        const elementTop = el.getBoundingClientRect().top;
    
        //check if distance is less than height of visible part of page
        return (
            elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset)
        );
    };
    //add/remove classes
    const displayScrollElementLeft = (element) => {
        element.classList.add('scrolled-left');
    };
    const displayScrollElementRight = (element) => {
        element.classList.add('scrolled-right');
    };
    const displayScrollElementUp = (element) => {
        element.classList.add('scrolled-up');
    };
    const hideScrollElementLeft = (element) => {
        element.classList.remove("scrolled-left");
    };
    const hideScrollElementRight = (element) => {
        element.classList.remove("scrolled-right");
    };
    const hideScrollElementUp = (element) => {
        element.classList.remove("scrolled-up");
    };


    //set up element to hide
    scrollElementsUp.forEach((el) => {
        el.style.opacity = '0';
    })

    //function to animate on scroll
    const handleScrollAnimation = () => {
        scrollElementsLeft.forEach((el) => {
            if (elementInView(el, 100)) {
                displayScrollElementLeft(el);
            } 
            else {
                hideScrollElementLeft(el);
            }
        })

        scrollElementsRight.forEach((el) => {
            if (elementInView(el, 100)) {
                displayScrollElementRight(el);
            } else {
                hideScrollElementRight(el);
            }
        })

        scrollElementsUp.forEach((el) => {
            if (elementInView(el, 100)) {
                displayScrollElementUp(el);
            } else {
                hideScrollElementUp(el);
            }
        })
    }
})