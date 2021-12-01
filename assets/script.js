$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky")
        }
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
})