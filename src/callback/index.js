//Ejemplo 1

function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(2, 2, sum));

//Ejemplo 2

setTimeout(function() {
    console.log('Hola Javascript');
}, 5000);

//Ejemplo 3

function saludo(name) {
    console.log(`Hola ${name}`);
}

setTimeout(saludo, 2000, 'Oscar');