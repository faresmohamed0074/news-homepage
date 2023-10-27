const vclose = document.getElementById("close-menu-img");
const vopene = document.getElementById("open-menu-img");
const opac = document.querySelector(".opac")
const ul = document.getElementById("list");
console.log("--------");


let check = () => {
    opac.classList.toggle("hide");
    console.log("444444");
}
    vclose.addEventListener("click", () => {
        ul.style.right = "-100%";
        check();
    });

vopene.addEventListener("click", () => {
    console.log("5555555555555");
    ul.style.right = "0%";
    check();
});

