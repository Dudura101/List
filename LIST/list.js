let real = document.getElementById("real");
let item = real.querySelectorAll("li");
let stuffs = real.querySelectorAll("input")

for (let i = 0; i < item.length; i++) {
    item[i]. addEventListener("click", changeText)
    stuffs[i]. addEventListener("blur", changeItem)
}

function changeText() {
    this.className = "edit"
    let input = this.querySelector("input")
    input.focus();
    input.setSelectionRange(0, input.value.length)
}

function changeItem() {
    this.previousElementSibling.innerHTML = this.value;
    this.parentNode.className = "";
}



let firstFigure = document.getElementById("ones");
let secondFigure = document.getElementById("twos");
let toTal = document.getElementById("total")

firstFigure.addEventListener("input", toTals)
secondFigure.addEventListener("input", toTals)

function toTals() {
    let one = firstFigure.value;
    let two = secondFigure.value;
    toTal.innerHTML = one+two
}