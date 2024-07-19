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
    sv.value=sv.value.substring(0,sv.value.length-1);
}
let nothing=document.getElementById("clear");
nothing.addEventListener("click",clearvalue);
