let sv=document.getElementById("display");
function display(value){
    sv.value += value;
}
function clearvalue(){
    sv.value = "";
}
function calculate(){
    sv.value=eval(sv.value);
}
function backspace(){
    
}
let nothing=document.getElementById("clear");
nothing.addEventListener("click",clearvalue);
