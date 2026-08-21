for (let i = 1; i <= 5; i++) {
    let pattern: string = "";

    for (let j = 1; j <= i; j++) {
        if ((i + j) % 2 == 0) {
            pattern += "1 ";
        } else {
            pattern += "0 ";
        }
    }

    console.log(pattern);
}