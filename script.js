document.addEventListener("DOMContentLoaded", function () {


    const colors = [
        "rgb(255, 0, 0)",
        "rgb(255, 255, 0)",
        "rgb(0, 255, 0)",
        "rgb(0, 255, 255)",
        "rgb(0, 0, 255)",
        "rgb(255, 0, 255)",
    ]
    //variables
    const pickedColor = colors[3];
    const squares = document.querySelectorAll('.square');
    const titleColor = document.querySelector('h1 span');

    titleColor.textContent = pickedColor;



    for (var i = 0; i < squares.length; i++) {
        // add init color
        squares[i].style.backgroundColor = colors[i]
        //add events for all squares
        squares[i].addEventListener('click', function () {
            if (this.style.backgroundColor === pickedColor) {
                console.log("win")
            } else {
                this.style.backgroundColor = "rgb(35, 35, 35)"
            }
        })
    }









})
