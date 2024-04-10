const http = require('http');

let homePageViews = 0;
let aboutPageViews = 0;
let notFoundViews = 0;

const server = http.createServer((req, res) => {
    // Устанавливаем заголовок Content-Type для всех ответов
    res.setHeader('Content-Type', 'text/html');

    // Определяем URL запроса
    const url = req.url;

    // Обрабатываем главную страницу
    if (url === '/') {
        homePageViews++;
        res.statusCode = 200;
        res.end(`
            <h1>Главная страница</h1>
            <p>Количество просмотров: ${homePageViews}</p>
            <a href="/about">О сайте</a>
        `);
    // Обрабатываем страницу "О сайте"
    } else if (url === '/about') {
        aboutPageViews++;
        res.statusCode = 200;
        res.end(`
            <h1>О сайте</h1>
            <p>Количество просмотров: ${aboutPageViews}</p>
            <a href="/">Главная страница</a>
        `);
    // Обрабатываем несуществующие роуты
    } else {
        notFoundViews++;
        res.statusCode = 404;
        res.end(`
            <h1>404 Not Found</h1>
            <p>Количество просмотров: ${notFoundViews}</p>
        `);
    }
});

// Запускаем сервер на порту 3000
server.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});
