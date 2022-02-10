
/*const btn = document.getElementById('btn')

console.log(btn)


btn.onclick =function () { 
  alert('Клик по кнопке')
 }

console.dir(btn)

//------------------------------------
*/
const square = document.getElementById('square')

console.log(square)

//const logger = function () {
 // alert('Клик по кнопке')
//}


/*console.dir(square);

const logger = function () {
  console.log('Клик по кнопке')// слева в консоле счётчик , сколько раз отработал Клик
}
/*const logger1 = function () {
  console.log('Клик по кнопке !!!!!!!!!!!')// слева в консоле счётчик , сколько раз отработал Клик
}

square.onclick = function(){
  logger1()
  logger()
}  // через функцию можно задавать две функциие, иначе последняя затирает предыдущую

square.onclick = null // зартереть функцию
*/

//square.addEventListener('click', logger) // добавляет функционал к объекту дополнительно

/*square.addEventListener('click', function () {
  console.log('Клик по кнопке !!!!!!!!!!')})

square.removeEventListener('click', logger) // удаляет функционал , анонимные функции не удаляются
*/

let counter = 0
const logger = function () {
  counter++
  if (counter===3) {
    square.removeEventListener('click', logger)
  }
  console.log('Клик по кнопке')
  console.log(counter)
}

square.addEventListener('click', logger)   // стирает функцию после третьего клика

