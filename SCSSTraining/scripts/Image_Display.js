let i;
let Imagelist = document.getElementById("image-list");
let t = document.getElementById("pic1");
t.classList.toggle("keep");
for(i = 1; i < Imagelist.childElementCount + 1; i++){
    let p = "pic" + i;
    document.getElementById( p.toString()).addEventListener("mouseenter", function (){
        t.classList.toggle("keep");
        t = document.getElementById(p.toString());
        t.classList.toggle("keep");
    });
}