// логические операторы или и не- || &&(амперсант) !
let by =  1||0
alert(by)
let byl = 1||1
alert(byl)
let bool = 0||1
alert(bool)
let bol = 0||0
alert(bol)
//у нас магазин работает с 10 до 18, когда человек спрашивает время работы магазина. 
let x = prompt("сколько сейчас времени,магазин работает?")
// if (x<10){
//     alert("магазин закрыт")
// }
// else if (x>18){
//     alert("магазин закрыт 2")
// }
// else if (x<18){
//     alert("магазин открыт")
// }
if (x<10||x>18)
alert ("магазин не работает")
else{
    alert("работает")
}

let bo = 1 && 0
    boo = 0 && 1
    bool = 0 && 0
    booll = 1 && 1
alert(bo)
alert(boo)
alert(bool)
alert(booll)
alert (1 && 0)
alert (1 && 5)
alert (null && 5)
alert(1 && "slovo")
alert(1 && 2 && null && 3)
let x = !1
alert(x)
let y = !0
alert(y)
alert(!!0)
alert(alert(1)||2||alert(3))
alert(alert(1)&&2&&alert(3))
alert(null || 2 && 3 || 4)
let bool =  prompt("вы кто?")
if (bool == 1){
    alert ("ваши действия не зарегистрированы на этом сайте")
}
else if (bool == 2){
    alert("я вас не знаю")
}
else if (bool == 3){
    password=prompt("введите пароль")
}
if (password == password){
    alert("приветствую вас")
}
else if (password != password){
    alert("я вас не знаю")
}




