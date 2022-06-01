let color_cng_btn = document.querySelector(".color_cng");
var select_background_body = document.querySelectorAll("body")[0];
color_cng_btn.addEventListener("click", ()=>{

let hex = "#";
let hex_values = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']; 

for(let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random()*hex_values.length);
    hex += hex_values[random];
    select_background_body.style.backgroundColor = hex;

    let color_name_sec = document.querySelector(".color");
    color_name_sec.innerText = hex;
}

})