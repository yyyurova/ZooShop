

document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault();

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
                alert(result.message);
                if (result.redirectUrl) {
                    window.location.href = result.redirectUrl; // Перенаправление при успешной регистрации
                }
            })
            .catch(error => {
                alert(error);
                console.error('Error:', error);
            });
    }});
