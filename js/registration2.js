// main.js
import { UserManager } from './UserManager.js';

const userManager = new UserManager();

document.getElementById('registration-form').addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById('user_name').value;
    const password = document.getElementById('password').value;

    if (userManager.findUser(username)) {
        alert('Username already exists!');
    } else {
        userManager.addUser(username, password);
        alert('Registration successful!');
    }

    window.location = '/avtorization';
});
export { userManager };