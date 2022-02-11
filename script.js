
const square = document.getElementById('square')



const logger = function (event) {
  console.log(event.type) // описание (type) - типа event - события

}

square.addEventListener('click', logger)   // стирает функцию после третьего клика

/*square.addEventListener('mouseup', logger)// отпустить мышку
square.addEventListener('mousedown', logger)// нажать мышкой
square.addEventListener('mousemove', logger)// провести курсором по объекту
*/

square.addEventListener('mouseenter', logger)// функция отрабатывает при входе на объект
square.addEventListener('mouseleave', logger)// при выходе с объекта 

square.addEventListener('mouseover', logger)// работает  только на самом объекте, если в объекте ещё один объект - переход в него реагирует как на выход с основного объекта, хотщ в нём и находится
square.addEventListener('mouseout', logger) 

//------------------------------------------------

const text = document.getElementById('text')



const logger2 = function (event) {
  console.log(event.type); // описание (type) - типа event - события
}
text.addEventListener('input', logger2)

const logger1 = function (event) {  
  console.dir(event.target);
 
}

const logger3 = function (event) {
  console.dir(event); // выводит в консоль значение импута
} 



text.addEventListener('input',logger1) // отрабатывает при вводе строки один или больше символов
text.addEventListener('focus', logger1) // отрабатывает при нажатии курсора в импуте
text.addEventListener('blur', logger1)// отрабатывает при выводе курсора из импута
text.addEventListener('change', logger1)// отрабатывает при вводе ,выводе курсора из импута и изменения импута

