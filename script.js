//----------Commands------------
document.addEventListener("keydown",function(event) {
    switch (event.key) {
        case "l":
            event.preventDefault();
            document.getElementById("language").click();
            break;
        case "1":
            event.preventDefault();
            document.getElementById("intro").scrollIntoView();
            break;
        case "2":
            event.preventDefault();
            document.getElementById("services").scrollIntoView();
            break;
        case "3":
            event.preventDefault();
            document.getElementById("websites").scrollIntoView();
            break;
    }
});
//--------------------

//----------Active Page----------
document.addEventListener("DOMContentLoaded",function() {
    const sections=document.querySelectorAll("section");
    const navLinks=document.querySelectorAll("nav a");
    function changeNavOnScroll() {
        let index=sections.length;
        while(--index&&window.scrollY+100<sections[index].offsetTop) {}  //You may change scan line here.
        navLinks.forEach((link)=>link.classList.remove("active"));
        navLinks[index].classList.add("active");
    }
    changeNavOnScroll();
    window.addEventListener("scroll",changeNavOnScroll);
});
//--------------------

//----------Animation when Scrolled Past----------

//--------------------