document.getElementById("imag").src= "bulb.png";
document.getElementById("text").innerHTML="Off"
document.getElementById("off").style.backgroundColor = "orange"


function btnOn(){
    document.getElementById("imag").src="bon.png"
    document.getElementById("text").innerHTML="On"
    document.getElementById("on").style.backgroundColor = "orange"
    document.getElementById("off").style.backgroundColor = "white"
}

function btnOff(){
    document.getElementById("imag").src="bulb.png"
    document.getElementById("text").innerHTML="Off"
    document.getElementById("off").style.backgroundColor = "orange"
    document.getElementById("on").style.backgroundColor = "white"
}
