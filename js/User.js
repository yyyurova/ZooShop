// User.js
export class User {
    constructor(username, phone, password) {
        this.username = username;
        this.phone = phone;
        this.password = password;
    }

    saveToLocalStorage() {
        localStorage.setItem('user', JSON.stringify(this));
    }

    static loadFromLocalStorage() {
        const data = localStorage.getItem('user');
        if (data) {
            const obj = JSON.parse(data);
            return new User(obj.username, obj.email);
        }
        return null;
    }
}
