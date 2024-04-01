let count = 0;
document.getElementById("displayNumber").innerHTML = count;

function decreaseButton(){
    
    if(count>0){
        count -=1;
    document.getElementById("displayNumber").innerHTML = count;
    }
}
function increaseButton(){
    count+=1;
    document.getElementById("displayNumber").innerHTML = count;
}

function resetButton(){
    if(count!=0){
    alert("Reset the Counting?")
    count = 0;
    document.getElementById("displayNumber").innerHTML = count;
    }

}