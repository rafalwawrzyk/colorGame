document.addEventListener("DOMContentLoaded", function () {

    let numSquares = 6;
    let colors = generateColors(numSquares);
    //variables
    let pickedColor = pickColor(colors);
    const squares = document.querySelectorAll('.square');
    const titleColor = document.querySelector('h1 span');
    const header = document.querySelector('h1');
    let reset = document.querySelector('.btn-new-color');
    let message = document.querySelector('.winSpan');
    let easy = document.querySelector('.btn-easy');
    let hard = document.querySelector('.btn-hard');
    
    
    easy.addEventListener('click',function(){
        this.classList.add('selected');
        hard.classList.remove('selected');
        numSquares = 3;
        colors = generateColors(numSquares);
        pickedColor = pickColor(colors);
        titleColor.textContent = pickedColor;
        
        for(let i=0; i<squares.length; i++){
            if(colors[i]){
                squares[i].style.backgroundColor = colors[i]
            }else{
                squares[i].style.display = 'none'
            }
        }
        
    }) 
    hard.addEventListener('click',function(){
        this.classList.add('selected');
        easy.classList.remove('selected');
        numSquares = 6;
        colors = generateColors(numSquares);
        pickedColor = pickColor(colors);
        titleColor.textContent = pickedColor;
        
        for(let i=0; i<squares.length; i++){
                squares[i].style.backgroundColor = colors[i]        
                squares[i].style.display = 'block';
            
        }
    })

    titleColor.textContent = pickedColor;
    
    reset.addEventListener('click', function(e) {
        //generate all new colors
        colors = generateColors(numSquares)
        // pick new random color
        pickedColor = pickColor(colors);
        //change span to color text
        titleColor.textContent = pickedColor;
        // change colors of squares
        for(let i =0; i<squares.length;i++ ){
            squares[i].style.backgroundColor = colors[i];
            message.textContent = 'Pick correct';
            header.style.backgroundColor = '#3881c1'
        }
        reset.textContent = "New colors"
        
    });

   

    for (var i = 0; i < squares.length; i++) {
        // add init color
        squares[i].style.backgroundColor = colors[i]
        //add events for all squares
        squares[i].addEventListener('click', function () {
            //grab clicked color and compare to win color
            const clickedColor = this.style.backgroundColor
            if (clickedColor === pickedColor) {
                message.textContent = 'Correct'
                correctColors(pickedColor);
                header.style.backgroundColor = pickedColor;
                reset.textContent = "Play again?"
                
            } else {
                // add color of background to square
                this.style.backgroundColor = "rgb(35, 35, 35)"
                message.textContent = 'Try again'
            }
        })
    }


    function correctColors(color) {
        //loop through all sqaures
        squares.forEach(function (square) {
            // change all colors
            square.style.backgroundColor = color;
        })
    }

    function pickColor(colors) {
        // random color from array
        let randColor = colors[Math.floor(Math.random() * colors.length)]
        return randColor
    }

    function generateColors(items) {
        // empty arr
        let colorArr = [];
        // loop for how many items and add colors
        for (i = 0; i < items; i++) {
            colorArr[i] = randomColor()
        }
        return colorArr;
    }

    function randomColor(){
        let r = Math.floor(Math.random()*256)
        let g = Math.floor(Math.random()*256)
        let b = Math.floor(Math.random()*256)
        return `rgb(${r}, ${g}, ${b})`
    }


})
