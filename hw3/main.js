// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100
let num = 0
let numArr = []

while (num <= 100) {
   if (num == 1) {
} else {
   let result = 2
   let i = 2
   while (num % i) {
   i++
   result++
   } 
   if (result == num) {
      numArr.push(result)
   }
}
num++
}
console.log(numArr)

// 2. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
/* Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины. */
function countBasketPrice(cart){
   let sum = 0

   for(let i = 0; i < cart.length; i++){
       sum = sum + cart[i][1]
   }
   return sum
}

cart = [['Shirt', 100], ['Pants', 150], ['Socks', 15]]
sum = countBasketPrice(cart)

console.log('Cart value: $' + sum)

// 3. Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так: //! for(…){// здесь пусто}
let nArr = []
for (let i = 0; i <= 9; nArr.push(i++)) {}
console.log(nArr)

// 4. Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
/* x
   xx
   xxx
   xxxx
   xxxxx */
let pyr = ''
for (let i = 0; i < 20; i++) {
   pyr = pyr + 'x'
   console.log(pyr)
}