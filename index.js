let nvbdr=document.getElementById("nvbdr");
window.addEventListener("scroll",function(e){
if(window.scrollY>3){
    nvbdr.style.borderBottomColor="white";
}
else{
    nvbdr.style.borderBottomColor="transparent";
}
})
let btn=document.querySelector(".navbar-collapse");
let navbar=document.querySelector(".navbar-nav");
navbar.addEventListener("click",function(){
if(btn.classList.contains("show")){
    btn.classList.remove("show");
}else{
    btn.classList.add("show");
}
})