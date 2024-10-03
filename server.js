const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'img')));
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'html')));
app.use(express.static(path.join(__dirname, 'js')));

// Middleware для парсинга тела запроса
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// главная страница
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// остальные страницы
app.get('/:page', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', `${req.params.page}.html`));
});

// POST-запросы для регистрации
app.post('/register', (req, res) => {
    const { user_name, user_phone, password, repass } = req.body;

    // Проверка паролей
    // if (password !== repass) {
    //     return res.status(400).json({ message: "Пароли не совпадают", redirectUrl: "/registration" });
    // }

    // Создание объекта пользователя
    const user = {
        userName: user_name,
        userPhone: user_phone,
        password: password
    };

    // console.log('User registered:', user);
    return res.status(200).json({ message: "Регистрация успешна", redirectUrl: "/avtorization" });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
