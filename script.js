'use strict';

alert ('(Кто не успел на занятии) Написать ф-ю, реализующую возведение числа в произвольную степень, используя циклы') ;

let numberDegree = () => {
    let result ;
    do {
        result = Number (prompt ('Введите число, которое будет возводится в произвольную степень: '));
    } while (!result) ;
    return result ;
};
let resultNumberDegree = numberDegree() ;

let quantity = Math.floor (Math.random() * 5) ;

let result = (resultNumberDegree, quantity) => {
    let factory = resultNumberDegree ;
    for (let n = 1 ; n !== quantity ; ++n) {
        resultNumberDegree *= factory ;
    }
    return resultNumberDegree ;
}

alert ('Введённое число - ' + resultNumberDegree + 
        `\n` + 'Случайная степень числа - ' + quantity + 
        `\n` + 'Результат - ' + result (resultNumberDegree, quantity)) ;