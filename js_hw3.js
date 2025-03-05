function pow(x,y) {
    let yy = y
    let degree = 1;
    while (y > 0) {
        degree *=  x
        y -= 1
        console.log(degree);
    }
    console.log("When the number " + x + " is degree of " + yy + " the number " + degree + " is obtained.")
}

pow(12,2 );


function pow1(x,y) {
    let degree = 1;
    let yy = y;
    for (degree; y > 0; y--) {
        degree *= x
        console.log(degree)
    }
    console.log("When the number " + x + " is degree of " + yy + " the number " + degree + " is obtained.")
}

pow1(3,3)