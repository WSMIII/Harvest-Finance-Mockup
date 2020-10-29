var yields = 420764858.13
var menuState = false;

document.addEventListener("scroll", function () {
    var header = document.getElementById("site-header");

    if (window.scrollY > 100) {
        header.style.opacity = "0.0";
    }
    else {
        header.style.opacity = "1.0";
    }
});

setInterval(function () {
    var footer_text = document.getElementsByClassName("footer-text");

    yields = yields + 1.1379;
    temp = yields.toFixed(2);

    footer_text[0].innerHTML = temp + " of deposits are auto harvesting yields."
}, 100);

function mobileMenuClick() {
    var header = document.getElementById("site-header");
    var home_link_1 = document.getElementsByClassName("home-link-1");
    var home_link_2 = document.getElementsByClassName("home-link-2");
    var stake_link = document.getElementsByClassName("stake-link");
    var faq_link = document.getElementsByClassName("faq-link");
    var dash_link = document.getElementsByClassName("dash-link");
    var wiki_link = document.getElementsByClassName("wiki-link");
    var out_link = document.getElementsByClassName("out-link");

    var body_box = document.getElementById("site-body");

    if (menuState) {
        header.style.height = "60px";
        home_link_1[0].style.display = "block";
        home_link_2[0].style.display = "none";
        stake_link[0].style.display = "none";
        faq_link[0].style.display = "none";
        dash_link[0].style.display = "none";
        wiki_link[0].style.display = "none";
        out_link[0].style.display = "none";
        body_box.style.overflowY = "visible";
        menuState = false;
    }
    else {
        header.style.height = "100%";
        home_link_1[0].style.display = "none";
        home_link_2[0].style.display = "block";
        stake_link[0].style.display = "block";
        faq_link[0].style.display = "block";
        dash_link[0].style.display = "block";
        wiki_link[0].style.display = "block";
        out_link[0].style.display = "block";
        body_box.style.overflowY = "hidden";
        menuState = true;
    }
}