let rows = document.querySelector("tbody").children
let matrix = []
for (var i = 0; i < rows.length; i++) {
    matrix.push(rows[i].children)
}
function paintAll() {
    erase();
    for (let i = 0; i < rows.length; i++) { // afegir codi
        for (let j = 0; j < 5; j++) { // afegir codi
            matrix[i][j].style.backgroundColor = "red";
        }
    }
    console.log(matrix);
}

function erase() {
    for (let i = 0; i < rows.length; i++) { // afegir codi
        for (let j = 0; j < 5; j++) { // afegir codi
            matrix[i][j].style.backgroundColor = "white";
        }
    }
}

function paintRightHalf() {
    erase();
    for (let i = 0; i < rows.length; i++) { // afegir codi
        for (let j = 0; j < matrix[i].length; j++) { // afegir codi
            if(j == 3 || j == 4){
                matrix[i][j].style.backgroundColor = "red";
            }
        }
    }
}

function paintLeftHalf() {
    erase();

    for (let i = 0; i < rows.length; i++) { // afegir codi
        for (let j = 0; j < 3; j++) { // afegir codi
            matrix[i][j].style.backgroundColor = "red";
        }
    }

}

function paintUpperHalf() {
    erase();
    for (let i = 0; i < 3; i++) { // afegir codi
        for (let j = 0; j < 5; j++) { // afegir codi
            matrix[i][j].style.backgroundColor = "red";
        }
    }

}

function paintLowerTriangle() {
    erase();

    for (let i = 0; i < rows.length; i++) { // afegir codi
        for (let j = 0; j < matrix.length; j++) { // afegir codi
            if(i > j){
                matrix[i][j].style.backgroundColor = "red";
            }
        }
    }

}

function paintUpperTriangle() {
    erase();
    for (let i = 0; i < rows.length; i++) { // afegir codi
        for (let j = 0; j < matrix.length-1; j++) { // afegir codi
            if(i <= j){
                matrix[i][j].style.backgroundColor = "red";
            }
        }
    }
}

function paintPerimeter() {
    erase();
    for (let i = 0; i <  rows.length; i++) { // afegir codi
        for (let j = 0; j < matrix[i].length; j++) { // afegir codi
            if(i % 5 == 0 || j % 4 == 0){
                matrix[i][j].style.backgroundColor = "red";
            }
        }
    }
    console.log(matrix);
}

function paintCheckerboard() {
    erase();
    for (let i = 0; i < rows.length; i++) { // afegir codi
        for (let j = 0; j < matrix[i].length; j++) { // afegir codi
            if(i % 2 == 0 && j % 2 == 0 || i % 2 ==  1 && j % 2 == 1){
                matrix[i][j].style.backgroundColor = "red";
            }
        }
    }
}
function paintCheckerboard2() {
    erase();
    for (let i = 0; i < rows.length; i++) { // afegir codi
        for (let j = 0; j < matrix[i].length; j++) { // afegir codi
            if(!(i % 2 == 0 && j % 2 == 0 || i % 2 ==  1 && j % 2 == 1)){
                matrix[i][j].style.backgroundColor = "red";
            }
        }
    }
}
