// DROPDOWN CARA 2
// function togglePopup(){
//     document.getElementById("popup-1").classList.toggle("active");
// }

function openNav(){
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("myNav").style.opacity = "1";
    document.getElementById("myNav").style.transitionDuration = "1s";
    document.getElementById("myNav").style.display = "block";
}

function closeNav(){
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("myNav").style.opacity = "0";
}