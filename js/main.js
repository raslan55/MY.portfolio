$(window).on('load', function () {

    $('.preloader').fadeOut(2000);

});

// When the user scrolls the page, execute myFunction 
window.onscroll = function() { myFunction() };

// Get the navbar
var navbar = document.getElementById("scrol");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}


// Navbar collapse on click
$('.nav-link').on('click', function() {
    $('.navbar-collapse').collapse('hide');
});


////
$(document).ready(function () {
    $('.nav-toggle').click(function () {
        var collapse_content_selector = $(this).attr('href');
        var toggle_switch = $(this);
        $(collapse_content_selector).toggle(function () {
            if ($(this).css('display') == 'none') {
                toggle_switch.html('see More');
            } else  {
                toggle_switch.html('see Less');
            }
        });
    });

});
// Slide Up Slide Down

window.addEventListener('scroll', function(e) {

    if ($(window).scrollTop() <= 50) {
        $('.wow').removeClass('animated');
        $('.wow').removeAttr('style');
        new WOW().init();
    }

});


$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready

    // breakpoint and up  
    $(window).resize(function() {
        if ($(window).width() >= 980) {

            // when you hover a toggle show its dropdown menu
            $(".navbar .dropdown-toggle").hover(function() {
                $(this).parent().toggleClass("show");
                $(this).parent().find(".dropdown-menu").toggleClass("show");
            });

            // hide the menu when the mouse leaves the dropdown
            $(".navbar .dropdown-menu").mouseleave(function() {
                $(this).removeClass("show");
            });

            // do something here
        }
    });



});


// add active class 

$('.navbar li a ').click (function () {

$(this).addClass ('active').parent().siblings().find('a'). removeClass('active') ;
} );


//check section on scroll 

//


//// send email 
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "mahmoudraslan15@gmail.com",
        Password : "MIR15111511",
        To : 'mahmoudraslan180@gmail.com',
        From : Document.getElementById("Email").value,
        Subject : "This is the new",
        Body : "Name"  + document.getElementById("Name").value
        +"<br> Email : " + document.getElementById("Email").value
        +"<br> massage : "+ document.getElementById("massage").value
    }).then(
      message => alert(message)
    );
}

