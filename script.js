function getPostById(id) {
  const endPoint = "https://jsonplaceholder.typicode.com";
  const result = {
    id: id,
    name: "",
    posts: [],
  };
  return new Promise((resolve, reject) => {
    fetch(`${endPoint}/users`)
      .then((data) => data.json())
      .then((users) => {
        const foundUser = users.find((user) => user.id === id);
        // console.log(foundUser);
        result.name = foundUser.name;
        // console.log(result);
        fetch(`${endPoint}/posts`)
          .then((data) => data.json())
          .then((posts) => {
            result.posts = posts.filter((post) => post.userId === id);
            // console.log(foundPosts);
            resolve(result);
          });
      });
  });
}
getPostById(2).then(data => console.log(data))

/*
Подробное объяснение
function getPostById(id) {

Определение функции getPostById, которая принимает аргумент id.
const endPoint = "https://jsonplaceholder.typicode.com";

Создание переменной endPoint, содержащей базовый URL для API.
const result = { id: id, name: "", posts: [] };

Создание объекта result, который будет содержать id, name и массив posts.
return new Promise((resolve, reject) => {

Возвращение нового промиса. Промис используется для выполнения асинхронных операций.
fetch(${endPoint}/users)

Выполнение запроса к https://jsonplaceholder.typicode.com/users.
.then((data) => data.json())

Преобразование ответа в JSON формат.
.then((users) => {

Обработка полученного массива пользователей.
const foundUser = users.find((user) => user.id === id);

Поиск пользователя с соответствующим id в массиве users.
result.name = foundUser.name;

Сохранение имени найденного пользователя в объект result.
fetch(${endPoint}/posts)

Выполнение запроса к https://jsonplaceholder.typicode.com/posts.
.then((data) => data.json())

Преобразование ответа в JSON формат.
.then((posts) => {

Обработка полученного массива постов.
result.posts = posts.filter((post) => post.userId === id);

Фильтрация постов, чтобы оставить только те, которые принадлежат пользователю с соответствующим id.
resolve(result);

Разрешение промиса с результатом result, содержащим ID, имя пользователя и его посты.
getPostById(2).then(data => console.log(data));

Вызов функции getPostById с ID 2 и вывод результата в консоль.
Итог
Код выполняет последовательные запросы к API для получения данных пользователя и его постов. Результаты собираются в объект result, который возвращается через промис.*/