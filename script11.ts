// fibonacci series
let n: number = 10;
let a: number = 0;
let b: number = 1;

for (let i: number = 1; i <= n; i++) {
    console.log(a);

    let next: number = a + b;
    a = b;
    b = next;
}