//Change color whit JQuery


$(document).ready(()=> {
    $("#btn-change").click(() =>{
        $(".container").css("background-color", "rgb(255,255, 243, 0.84)")
        $(".main-nav").css("color", "black")
        $(".get-started").css("color", "black")
        $(".footer").css("color", "black")
        $(".btn").css("background-color", "black")
        $(".btn").css("color", "white")
    })
})

$(".menu-toggle").click(() => {
    $(".main-nav-ul").toggleClass("alooooo", 500);
    $(".menu-toggle").toggleClass("no-hamburger",);
})
