function hover(x) {
    x.style.color = "red";
    x.style.backgroundColor = "#74564c";
    x.style.textDecoration = "underline";
    x.style.cursor = "pointer";
}

function noHover(x) {
    x.style.color = "#955d19";
    x.style.backgroundColor = "transparent";
    x.style.textDecoration = "none";
}

function myHome(x) {
    location.href = "#home"
}

function myAbout(x) {
    location.href = '#about';
}
function myContact(x) {
    location.href = "#contact";
}
// responsive
function closeNav() {
    document.getElementById("list").style.width = "0%";
}

function openNav() {
    document.getElementById("list").style.width = "100%";
}