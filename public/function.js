var greet;
// greet = 'hello';
greet = function () {
    console.log('hello,again');
};
var add = function (a:number, b:number, c:number | string = 10): void {
    console.log(a + b);
    console.log(c); // optional
};
add(5, 10);


const minus = (a:number, b: number): number => {
  return = a + b;
}

let result = minus(10,7);
