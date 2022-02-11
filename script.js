
/*
const text = document.getElementById('text')
const span = document.getElementById('text-span')





const logger1 = function (event) {  
  console.dir(event.target.value); // выводит в консоле значение импута
  span.textContent = event.target.value// передача вводимого текста в спан
 
}




text.addEventListener('input',logger1) // отрабатывает при вводе строки один или больше символов
text.addEventListener('focus', logger1) // отрабатывает при нажатии курсора в импуте
text.addEventListener('blur', logger1)// отрабатывает при выводе курсора из импута
text.addEventListener('change', logger1)// отрабатывает при вводе ,выводе курсора из импута и изменения импута

//------------------------------------------------

const logger = function (event) {
  console.dir(event.type); 
  span.textContent = event.target.value// передача вводимого текста в спан

}


text.addEventListener('keyup', logger) // работает при нажатии клавишы в импут
text.addEventListener('keydown', logger) // работает при отпуске клавишы в импут


//---------------------------------------------------

const range = document.getElementById('range')
const span1 = document.getElementById('range-span')


const logger4 = function (event) {
  console.dir(event.type);
  span1.textContent = event.target.value// передача вводимого текста в спан

}


range.addEventListener('input', logger4) // работает при нажатии клавишы в импут
range.addEventListener('change', logger4) // работает при отпуске клавишы в импут



//document.getElementById('range').addEventListener('change', logger4)

document.addEventListener('DOMContentLoaded', function() { console.log('Дом построен')})


window.onbeforeunload = function() {
  return "вы уверены , что хотите уйти со страницы?"
}


const link = document.querySelector('a')

link.addEventListener('click', function(event) {
  event.preventDefault() // блокирует выполнение перехода по ссылке а
  console.log(' klik po ssylke')
})

document.addEventListener('contextmenu', function(event) {
  event.preventDefault() // блокирует работу правой кнопки мышки
  console.log(' Blokirowka prawoj knopki my+ki na stranize')

})
*/


const btn = document.querySelector('#e_btn')
const circle = document.querySelector('#circle')
const square = document.querySelector('#square')

console.log(square)
console.log(btn)
console.log(circle)

const toggler = function(event) {

  // event.stopPropagation() // функция выполняется только на одном объекте ине переносится на родительские


  console.log(event.target);
  console.log(event.currentTarget);
  event.target.classList.toggle('green')
}

//btn.addEventListener('click', toggler)
//circle.addEventListener('click', toggler)
//square.addEventListener('click', toggler)

btn.addEventListener('click', toggler, true)
circle.addEventListener('click', toggler, true)
square.addEventListener('click', toggler, true)

// true  - меняет порядок выполнения функции от родителя к дочерненему элементу
