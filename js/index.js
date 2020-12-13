const fill = document.querySelector(".fill");
const boxes = document.querySelectorAll(".empty");

//Drag Functions
function drag_start (){
    this.classList.add("hold")
    setTimeout(() => (this.classList.add("invisible")), 0);
}
function drag_end(){
    this.className = 'fill';
}

function drag_over(e){
    e.preventDefault();

}
function drag_enter(e) {
    e.preventDefault();
    this.classList.add("hovered");
}
function drag_leave() {
    this.className = "empty";
}
function drag_drop() {
    this.className = "empty";
    this.append(fill);
}


//Fill  Event Listeners
fill.addEventListener("dragstart", drag_start);
fill.addEventListener("dragend", drag_end);


// Looping empties and listen to drag events

for (const empty of boxes) {
    empty.addEventListener("dragover", drag_over);
    empty.addEventListener("dragenter", drag_enter);
    empty.addEventListener("dragleave", drag_leave);
    empty.addEventListener("drop", drag_drop);
}