for (let i = 5; i >= 1; i--) {
    let pattern: string = "";

    for (let j = 1; j <= i; j++) {
        pattern += j + " ";
    }

    console.log(pattern);
}