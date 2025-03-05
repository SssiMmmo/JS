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


