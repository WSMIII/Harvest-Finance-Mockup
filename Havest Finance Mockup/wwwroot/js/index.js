var curRot = 0;

setInterval(function () {
    var windmill_blades = document.getElementsByClassName("windmill-blades-img");
    var cloud_1 = document.getElementsByClassName("cloud-1");
    var cloud_2 = document.getElementsByClassName("cloud-2");
    var cloud_3 = document.getElementsByClassName("cloud-3");
    var cloud_4 = document.getElementsByClassName("cloud-4");
    var cloud_5 = document.getElementsByClassName("cloud-5");
    var coin_1 = document.getElementsByClassName("coin-9");
    var coin_2 = document.getElementsByClassName("coin-10");
    var coin_3 = document.getElementsByClassName("coin-11");
    var coin_4 = document.getElementsByClassName("coin-12");
    var coin_5 = document.getElementsByClassName("coin-13");

    curRot = curRot + 0.5;
    cloud_1[0].style.left = (cloud_1[0].getBoundingClientRect().x + 0.3) + "px";
    cloud_2[0].style.left = (cloud_2[0].getBoundingClientRect().x + 0.3) + "px"
    cloud_3[0].style.left = (cloud_3[0].getBoundingClientRect().x + 0.3) + "px";
    cloud_4[0].style.left = (cloud_4[0].getBoundingClientRect().x + 0.3) + "px";
    cloud_5[0].style.left = (cloud_5[0].getBoundingClientRect().x + 0.3) + "px";

    coin_1[0].style.left = (coin_1[0].getBoundingClientRect().x + 0.3) + "px";
    coin_2[0].style.left = (coin_2[0].getBoundingClientRect().x + 0.3) + "px";
    coin_3[0].style.left = (coin_3[0].getBoundingClientRect().x + 0.3) + "px";
    coin_4[0].style.left = (coin_4[0].getBoundingClientRect().x + 0.3) + "px";
    coin_5[0].style.left = (coin_5[0].getBoundingClientRect().x + 0.3) + "px";

    if (cloud_1[0].getBoundingClientRect().x > document.documentElement.clientWidth) {
        cloud_1[0].style.left = "-100px";
    }
    if (cloud_2[0].getBoundingClientRect().x > document.documentElement.clientWidth) {
        cloud_2[0].style.left = "-100px";
    }
    if (cloud_3[0].getBoundingClientRect().x > document.documentElement.clientWidth) {
        cloud_3[0].style.left = "-100px";
    }
    if (cloud_4[0].getBoundingClientRect().x > document.documentElement.clientWidth) {
        cloud_4[0].style.left = "-100px";
    }
    if (cloud_5[0].getBoundingClientRect().x > document.documentElement.clientWidth) {
        cloud_5[0].style.left = "-100px";
    }
    if (coin_1[0].getBoundingClientRect().x > document.documentElement.clientWidth) {
        coin_1[0].style.left = "-100px";
    }
    if (coin_2[0].getBoundingClientRect().x > document.documentElement.clientWidth) {
        coin_2[0].style.left = "-100px";
    }
    if (coin_3[0].getBoundingClientRect().x > document.documentElement.clientWidth) {
        coin_3[0].style.left = "-100px";
    }
    if (coin_4[0].getBoundingClientRect().x > document.documentElement.clientWidth) {
        coin_4[0].style.left = "-100px";
    }
    if (coin_5[0].getBoundingClientRect().x > document.documentElement.clientWidth) {
        coin_5[0].style.left = "-100px";
    }

    if (curRot > 360) {
        curRot = curRot % 360;
    }


    windmill_blades[0].style.transform = "translateX(-50%) rotate(" + curRot + "deg)";
}, 20);