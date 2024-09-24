const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

// Указываем директорию для статических файлов
app.use(express.static(path.join(__dirname, 'img')));
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'html')));
app.use(express.static(path.join(__dirname, 'js')));

// Обслуживаем главную страницу
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


// Обслуживаем остальные страницы
app.get('/:page', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', `${req.params.page}.html`));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
