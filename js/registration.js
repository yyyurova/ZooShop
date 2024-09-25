import {User} from './User.js';

export var usersList = [];

function registerUser(username, phone, password) {
    // let newUser = {
    //     username: username,
    //     phone: phone,
    //     password: password
    //     // registrationDate: new Date()
    // };
    let newUser = new User(username, phone, password)
    usersList.push(newUser);
    console.log("Пользователь успешно зарегистрирован:", newUser);
    console.log("Обновленный список пользователей:", usersList);
}

// document.getElementById('registration-form').addEventListener("submit", checkForm);
// var counter = 0;
// const users = [];
// function addUser(username, password, phone) {
//     counter++;
//     let newUser = {
//         name: username,
//         pass: password,
//         phone: phone,
//         id: counter
//     };
//     users.push(newUser);
// }
// Изначально имеющийся список пользователей

// Функция для регистрации пользователя

// Обработчик события отправки формы
document.getElementById('registration-form').addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем отправку формы

    //     // Получаем данные из формы
    //     let username = document.getElementById('user_name').value;
    //     let password = document.getElementById('password').value;
    //     let phone = document.getElementById('user_phone').value;

    //     // Регистрируем пользователя
    //     registerUser(username, email);

    //     // Очищаем форму
    //     event.target.reset();
    // });

    // function checkForm(event) {

    //     event.preventDefault();
    let form = document.getElementById('registration-form');

    let name = form.user_name.value;
    let pass = form.password.value;
    let repass = form.repass.value;
    let phone = form.user_phone.value;

    let fail = "";
    if (name.length <= 1 || name.length > 50)
        fail = "Введите корректное имя!!!";
    else if (phone[0] != "+" || /[a-zA-Z]/.test(phone) || /[а-яА-Я]/.test(phone)) {
        fail = "Проверьте правильность ввода номера телефона";
    }
    else if (pass != repass)
        fail = "Пароли должны совпадать!!!";
    else if (pass.split("&").length > 1 || pass.split("$").length > 1 || pass.split("#").length > 1 || pass.length < 6)
        fail = "Некорректный пароль";

    if (fail != "") {
        document.getElementById('error').innerHTML = fail;
        document.getElementById('error').style.cssText = "margin-bottom: 5px; color: white; background-color:red; font-size:14px;";
    } else {
        fail = "";
        // counter++;
        // const obj = { user_name: name, user_phone: phone, user_password: pass, user_id: counter };
        // users.push(obj);
        // console.log(obj);
        // registerUser(name, phone, pass);
        // alert("Все данные корректно заполнены");
        // window.location = 'avtorization.html';
        // // console.log(users);
        // event.target.reset();

        registerUser(name, phone, pass);
        alert("Все данные корректно заполнены");
        window.location = 'avtorization.html';
        // Очищаем форму
        // event.target.reset();
    }
});
// console.log(users);
// module.exports = { users, addUser };