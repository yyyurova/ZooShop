// UserManager.js
import {User} from './User.js';

export class UserManager {
    constructor() {
        this.users = [];
    }

    addUser(username, password) {
        const user = new User(username, password);
        this.users.push(user);
    }

    findUser(username) {
        return this.users.find(user => user.username === username);
    }
}
