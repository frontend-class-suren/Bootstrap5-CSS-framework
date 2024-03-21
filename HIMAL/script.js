const inputBox = document.getElementById("info-section");
const listContainer = document.getElementById("list-section");
function addTask(){
    if (inputBox.value === ''){
        alert("Whatever this '127.0.0.1:5500' says just be ok and press ok, okk !!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
}


listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }

    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        
    }

}, false);


