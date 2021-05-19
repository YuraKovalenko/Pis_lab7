const http = require('http'); //Забезпечення присутності класу http-сервер
const port = 8080; //Через цей порт дивимся відповідь сервера
//Створення сервера, який на звернення лише відповідає 'Hello world'
//Стрілочна функція описує потрібні дії сервера
const server = http.createServer((req, res) => {
 res.end('Hello, Volodymyr Popenko!');
});
// Запуск прослуховування заданого порту сервером
server.listen(port, () => {
 console.log('Server listens on: http://localhost:%s', port);
});
//Викликом сервера є звертання в вікні браузера по адресі http://localhost:8080