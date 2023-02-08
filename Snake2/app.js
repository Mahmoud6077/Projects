// let canvas = document.getElementById('canvas')
// let ctx = canvas.getContext('2d')

// let grid = 16
// let count = 0
// let snake = {
//     x: 150,
//     y: 150,
//     dx: grid,
//     dy: 0,
//     cells:[],
//     maxCell: 4,

// }

// let apple = {
//     x: 200,
//     y: 200
// }

// const gulpSound = new Audio('gulp.mp3')

// function getRandomInt(min,max){
//     return Math.floor(Math.random() * (max-min)) + min
// }

// function loop(){
//     requestAnimationFrame(loop)
//     if (count < 4){return}

//     count = 0
//     context.clearRect(0,0, canvas.width, canvas.height)
//     snake.x +=snake.dx
//     snake.y += snake.dy

//     if (snake.x < 0){snake.x = canvas.width - grid}
//     else if (snake.x >= canvas.width){snake.x = 0}
//     else if (snake.y < 0){snake.y >= canvas.height}

//     snake.cells.unshift({x:snake.x, y: snake.y})

//     if (snake.cells.length > snake.maxCell){snake.cells.pop()}

//     context.fillStyle = 'red'
//     context.fillRect(apple.x, apple.y, grid - 1, grid - 1)

//     context.fillStyle = 'blue'
//     snake.cells.forEach(function(cell,index) {
//         context.fillRect(cell.x, cell.y, grid - 1, grid - 1)
//         if(cell.x === apple.x && cell.y === apple.y){
//             snake.maxCell++
//             apple.x = getRandomInt(0,25) * grid
//             apple.y = getRandomInt(0,25) * grid
//             gulpSound.play
//         }

//         for(let i = index + 1; i<snake.cells.length; i++){
//             if(cell.x === snake.cells[i].x && cell.y === snake.cells[i].y){
//                 snake.x = 160
//                 snake.y = 160
//                 snake.cells = []
//                 snake.maxCell = 4
//                 snake.dx = grid
//                 snake.dy = 0

//                 apple.x = getRandomInt(0,25) * grid
//                 apple.y = getRandomInt(0,25) * grid
//             }
//         }
//     });
// }

// document.addEventListener('keydown',function(e){

// if (e.which === 37 && snake.dx === 0){
//     snake.dx = -grid
//     snake.dy = 0
// }
// else if (e.which === 38 && snake.dy === 0){
//     snake.dy = -grid
//     snake.dx = 0
// }
// else if (e.which === 39 && snake.dx === 0){
//     snake.dx = grid
//     snake.y = 0
// }
// else if (e.which === 40 && snake.dy === 0){
//     snake.dy = grid
//     snake.dx = 0
// }
// })

// requestAnimationFrame(loop)

// *********************************************************************************
// *********************************************************************************
// *********************************************************************************

//canvs

// console.log("gweag")
// let blockSize = 25
// let rows = 20
// let cols = 20

// //snake head
// let snakeX = blockSize * 5
// let snakeY = blockSize * 5

// //snake body
// let snakeBody = []

// //snake move
// let velocityX = 0
// let velocityY = 0

// //food
// let foodX = blockSize * 10
// let foodY = blockSize * 10

// //game Over
// let gameOver = false


// window.onload() = function(){
//     let canvas = document.getElementById('canvas')
//     let context = canvas.getContext('2d')
//     canvas.height = rows * blockSize
//     canvas.width = cols * blockSize

//     PlaceFood()
//     document.addEventListener('keyup', changeDirection)
//     // to update the movement
//     setInterval(update, 100) //100millisecond is the speed of the movement
// }

// function update(){

//     if(gameOver){return}


//     //canvs
//     context.fillStyle = 'black'
//     context.fillRect(0, 0, canvas.width, canvas.height)
//     //snake head
//     if(snakeX === foodX && snakeY === foodY){
//         PlaceFood()
//         snakeBody.push([foodX, foodY])
//     }
//     // to move the hall snake square after square
//     for(let i = snakeBody.length-1; i > 0; i--){
//         snakeBody[i] = snakeBody[i-1]
//     }
//     if(snakeBody.length){ //means is there is a body length(the array is not empty)
//         snakeBody[0] = [snakeX, snakeY]
//     } 
//     context.fillStyle='lime'
//     snakeX += velocityX * blockSize
//     snakeY += velocityY * blockSize
//     context.fillRect(snakeX, snakeY, blockSize, blockSize)
//     for(let i = 0; i<snakeBody.length; i++){
//         context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize)
//     }

//     //food
//     context.fillStyle = 'black'
//     context.fillRect(foodX, foodY, blockSize, blockSize)



// }

// function PlaceFood(){
//     foodX = Math.floor(Math.random() * cols) * blockSize
//     foodY = Math.floor(Math.random() * rows) * blockSize

// }

// //game over condition and movement conditions
//     if(snakeX > cols * blockSize){
//         snakeX = 1*blockSize
//     }
//     if(snakeX < 0 ){
//         snakeX = 20*blockSize
//     }
//     if( snakeY > rows * blockSize){
//         snakeY = 20*blockSize
//     }
//     if(snakeY < 0 ){
//         snakeY = 1*blockSize
//     }

//     for(let i = 0; i < snakeBody.length; i++){
//         if(snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]){
//             gameOver = true
//             //alert("Game Over")
//         }
//     }


// function changeDirection(e){
//     if(e.code == 'ArrowUp' && velocityY != 1){
//         velocityX = 0
//         velocityY = -1
//     }
//     if(e.code == 'ArrowDown' && velocityY != -1){
//         velocityX = 0
//         velocityY = 1
//     }
//     if(e.code == 'ArrowRight' && velocityX != -1){
//         velocityX = 1
//         velocityY = 0
//     }
//     if(e.code == 'ArrowLeft' && velocityY != 1){
//         velocityX = -1
//         velocityY = 0
//     }


// }



//*************************************************************************************************
//*************************************************************************************************
//*************************************************************************************************

function init(){

    let blockSize = 25
    let rows = 20
    let cols = 20

    //snake head
    let snakeX = blockSize * 5
    let snakeY = blockSize * 5

    //snake body
    let snakeBody = []

    //snake move
    let velocityX = 0
    let velocityY = 0

    //food
    let foodX = blockSize * 10
    let foodY = blockSize * 10

    //score
    let score1 = 0
    score1.se

    //game Over
    let gameOver = false

    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')
    canvas.height = rows * blockSize
    canvas.width = cols * blockSize

    PlaceFood()
    document.addEventListener('keyup', changeDirection)
    // to update the movement
    setInterval(update, 100) //100millisecond is the speed of the movement


    function update(){

        if(gameOver){return}

        //canvs
        context.fillStyle = 'black'
        context.fillRect(0, 0, canvas.width, canvas.height)
        //snake head
        if(snakeX === foodX && snakeY === foodY){
            PlaceFood()
            snakeBody.push([foodX, foodY])
            document.getElementById("score1").innerHTML = ++score1
        }
        // to move the hall snake square after square
        for(let i = snakeBody.length-1; i > 0; i--){
            snakeBody[i] = snakeBody[i-1]
        }
        if(snakeBody.length){ //means is there is a body length(the array is not empty)
            snakeBody[0] = [snakeX, snakeY]
        } 
        context.fillStyle='lime'
        snakeX += velocityX * blockSize
        snakeY += velocityY * blockSize
        context.fillRect(snakeX, snakeY, blockSize, blockSize)
        for(let i = 0; i<snakeBody.length; i++){
            context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize)
        }

        //food
        context.fillStyle = 'red'
        context.fillRect(foodX, foodY, blockSize, blockSize)

    }

    function PlaceFood(){
        foodX = Math.floor(Math.random() * cols) * blockSize
        foodY = Math.floor(Math.random() * rows) * blockSize
    }

//game over condition and movement conditions
function boundreis(){
    if(snakeX > 19 * blockSize){
        snakeX = 0
    }
    if(snakeX < 0 ){
        snakeX = 19*blockSize
    }
    if( snakeY > 19 * blockSize){
        snakeY = 0
    }
    if(snakeY < 0 ){
        snakeY = 19*blockSize
    }
}

    function eatTail(){
    for(let i = 0; i < snakeBody.length; i++){
        //console.log('game over')
        if(snakeX === snakeBody[i][0] && snakeY === snakeBody[i][1]){
            console.log('game over')
            gameOver = true
            score1 = 0
            document.getElementById("demo").innerHTML = score1
            //alert("Game Over")
            stop()

        }
    }
}
//if(snakeX === snakeBody[i][0] && snakeY === snakeBody[i][1]){}

    function changeDirection(e){
        if(e.code == 'ArrowUp' && velocityY != 1){
            velocityX = 0
            velocityY = -1
            eatTail()
            boundreis()
        }
        if(e.code == 'ArrowDown' && velocityY != -1){
            velocityX = 0
            velocityY = 1
            eatTail()
            boundreis()
        }
        if(e.code == 'ArrowRight' && velocityX != -1){
            velocityX = 1
            velocityY = 0
            eatTail()
            boundreis()
        }
        if(e.code == 'ArrowLeft' && velocityX != 1){
            velocityX = -1
            velocityY = 0
            eatTail()
            boundreis()
        }



    }
}


window.addEventListener('DOMContentLoaded', init)

