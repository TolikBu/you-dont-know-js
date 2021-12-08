const books = document.querySelectorAll(".books");
const book = document.querySelectorAll(".book");
const ul = document.querySelectorAll("ul");
const li = document.querySelectorAll("li");
const bodyImage = document.querySelector("body");
const adv = document.querySelectorAll(".adv");
const h2 = document.querySelectorAll("a");
const newElemLi = document.createElement('li');

//меняем местами блоки
books[0].prepend(book[1]);
books[0].append(book[2]);
book[2].before(book[3]);
adv[0].remove();

//меняем текст в элементе
h2[4].textContent = "Книга 3. this и Прототипы Объектов";

//меняем местами элементы
ul[0].children[3].after(ul[0].children[6]);
ul[0].children[5].before(ul[0].children[8]);
ul[0].children[10].before(ul[0].children[2]);
ul[5].children[1].after(ul[5].children[9]);
ul[5].children[7].before(ul[5].children[3]);
ul[5].children[9].before(ul[5].children[5]);

//добавляем элемент в блок
newElemLi.textContent = "Глава 8: За пределами ES6";
book[2].children[1].append(newElemLi);
ul[2].children[9].before(ul[2].children[10]);

// меняем картику body
bodyImage.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";




