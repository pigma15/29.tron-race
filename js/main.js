let state = true
let turnState = 0;

let columnLeft =  document.querySelector('div.left div.col')
let columnLeft2 =  document.querySelector('div.left div.col:nth-child(2)')
let columnLeft3 =  document.querySelector('div.left div.col:nth-child(3)')
let columnRight =  document.querySelector('div.right div.col')
let columnRight2 =  document.querySelector('div.right div.col:nth-child(2)')
let columnRight3 =  document.querySelector('div.right div.col:nth-child(3)')

let position = 0;
let speed = 0;
let turn = 0;
let rotate = 0;


let columnLeft2Pos = parseFloat(columnLeft2.style.right);
let columnLeft3Pos = parseFloat(columnLeft3.style.right);
let columnRight2Pos = parseFloat(columnRight2.style.left);
let columnRight3Pos = parseFloat(columnRight3.style.left);


let moto = document.querySelector('.moto > img');
let motoSize = parseFloat(moto.style.height);
let motoPosition = parseFloat(moto.style.left);



addEventListener('keydown', event => {
    if(event.key === 'w') {
        state = true;
        if (event.repeat === false) {
            let clock =
            setInterval(() => {
                if (event.repeat === false) {
                    speed++
                    position += (speed / 2);
                }
                moto.style.height = `${motoSize - (speed / 2)}%`
    
                columnLeft.style.right = `${position}%`;
                columnLeft2.style.right = `${columnLeft2Pos + position}%`;
                columnLeft3.style.right = `${columnLeft3Pos + position}%`;
                columnRight.style.left = `${position}%`;
                columnRight2.style.left = `${columnRight2Pos + position}%`;
                columnRight3.style.left = `${columnRight3Pos + position}%`;
                if (speed > 9) {
                    speed = 8
                };
                if (position >= 100) {
                    position = 0
                };
                if (position > 66) {
                    columnLeft2Pos = -66
                    columnRight2Pos = -66
                };
                if (position < 66) {
                    columnLeft2Pos = 33
                    columnRight2Pos = 33
                };
                if (position > 33) {
                    columnLeft3Pos = -33
                    columnRight3Pos = -33
                }
                if (position < 33) {
                    columnLeft3Pos = 66
                    columnRight3Pos = 66
                };
                if(state === false) {
                    clearInterval(clock)
                };
    
            }, 42);
        };
    }
});

addEventListener('keyup', event => {
    if(event.key === 'w') {
        state = false
        let clock =
        setInterval(() => {
            speed -= 1;
            position += speed;
            moto.style.height = `${motoSize - speed}%`

            columnLeft.style.right = `${position}%`;
            columnLeft2.style.right = `${columnLeft2Pos + position}%`;
            columnLeft3.style.right = `${columnLeft3Pos + position}%`;
            columnRight.style.left = `${position}%`;
            columnRight2.style.left = `${columnRight2Pos + position}%`;
            columnRight3.style.left = `${columnRight3Pos + position}%`;
            if (parseFloat(moto.style.height) >= 40) {
                moto.style.height = '40%';
            };
            if (speed <= 0 || state === true) {
                speed = 0;
                clearInterval(clock);
            }

        }, 84)
    };
})


addEventListener('keydown', event => {
    if (event.key === 'a' && state === true && event.repeat === false && turnState !== 1) {
        turnState = -1;
        let clock = 
        setInterval(() => {
            turn++
            rotate = turn * 4;
            moto.style.left = `${motoPosition - turn}%`;
            moto.style.transform = `translate(-50%, 50%) rotate(${-rotate}deg)`
            if (turn >= 22) {
                turn = 21
            }
            if (turnState !== -1 || state === false) {
                clearInterval(clock)
            };
        }, 42)
    }
})

addEventListener('keydown', event => {
    if (event.key === 'd' && state === true && event.repeat === false && turnState !== -1) {
        turnState = 1;
        let clock = 
        setInterval(() => {
            turn--
            rotate = turn * 4;
            moto.style.left = `${motoPosition - turn}%`;
            moto.style.transform = `translate(-50%, 50%) rotate(${-rotate}deg)`
            if (turn <= -22) {
                turn = -21
            }
            if (turnState !== 1 || state === false) {
                clearInterval(clock)
            };
        }, 42)
    }
})

addEventListener('keyup', event => {
    if(event.key === 'a' || event.key === 'd') {
        turnState = 0;
        turn = turn;
        let i = 0
            let vertical =
            setInterval (() => {
                moto.style.transform = `translate(-50%, 50%) rotate(${-rotate}deg)`;
                rotate -= turn
                console.log(rotate);
                console.log(i);
                i++
                if (i > 3 || turnState !== 0) {
                    clearInterval(vertical)
                    moto.style.transform = `translate(-50%, 50%) rotate(0deg)`
                }
            }, 42)
    };
})





