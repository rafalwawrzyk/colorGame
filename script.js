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
    const pickedColor = pickColor(colors);
    const squares = document.querySelectorAll('.square');
    const titleColor = document.querySelector('h1 span');
    let message = document.querySelector('.winSpan');   

    
    
    titleColor.textContent = pickedColor;



    for (var i = 0; i < squares.length; i++) {
        // add init color
        squares[i].style.backgroundColor = colors[i]
        //add events for all squares
        squares[i].addEventListener('click', function () {
            //grab clicked color and compare to win color
            const clickedColor = this.style.backgroundColor
            if ( clickedColor === pickedColor) {
                message.textContent = 'Correct'
                correctColors(pickedColor);
            } else {
                // add color of background to square
                this.style.backgroundColor = "rgb(35, 35, 35)"
                message.textContent = 'Try again'
            }
        })
    }
    
    
    function correctColors(color){
        //loop through all sqaures
        squares.forEach(function(square){
            // change all colors
            square.style.backgroundColor = color;
        })
    }
    
    function pickColor(colors){
        let randColor = colors[Math.floor(Math.random() * colors.length)]
        return randColor
        }








})
