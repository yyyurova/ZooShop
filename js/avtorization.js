document.getElementById('avtorization-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let form = document.getElementById('avtorization-form');

    let name = form.user_name.value;
    let pass = form.password.value;


    let fail = "";
    if (name.length <= 1 || name.length > 50)
        fail = "Введите корректное имя!!!";
    else if (pass.split("&").length > 1 || pass.split("$").length > 1 || pass.split("#").length > 1 || pass.length < 6)
        fail = "Некорректный пароль";

    if (fail != "") {
        document.getElementById('error').innerHTML = fail;
        document.getElementById('error').style.cssText = "margin-bottom: 5px; color: white; background-color:red; font-size:14px;";
    } else {
        fail = "";

        const formData = new FormData(this);

        // Преобразуем FormData в объект для удобства
        const data = Object.fromEntries(formData.entries());

        // Отправляем данные на сервер
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                // console.log('Success:', result);
                // alert("User registered");
                alert("Добро пожаловать, " + name + ".");
                if (result.redirectUrl) {
                    window.location.href = "/"; // Перенаправление при успешной регистрации
                }
            })
            .catch(error => {
                alert(error);
                console.error('Error:', error);
            });
    }
})

document.addEventListener('DOMContentLoaded', function () {
    // const radioButtons = document.querySelectorAll('input[name="value-radio"]');
    // const dynamicLabel = document.getElementById('dynamicLabel');
    // const inputField = dynamicLabel.querySelector('input');
    // const spanField = dynamicLabel.querySelector('span');
    // radioButtons.forEach(radio => {
    //     radio.addEventListener('change', function() {
    //         console.log(`Selected value: ${this.value}`); // Добавлено для отладки
    //         if (this.value === 'value-1') {
    //             inputField.type = 'text';
    //             inputField.placeholder = '';
    //             spanField.textContent = 'Firstname';
    //         } else if (this.value === 'value-2') {
    //             inputField.type = 'email';
    //             inputField.placeholder = '';
    //             spanField.textContent = 'Email';
    //         }
    //     });
    // });
    const radios = document.querySelectorAll('input[name="radio"]');
    radios.forEach((radio) => {
        radio.addEventListener('change', (event) => {
            if (event.target.value == "2") { document.getElementById('choice').innerHTML = "Номер телефона"; }
            else if (event.target.value == "1") { document.getElementById('choice').innerHTML = "Имя пользователя"; }

        });
    });
});
