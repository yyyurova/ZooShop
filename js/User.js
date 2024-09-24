// export default class User {
//     #name;
//     #phone;
//     #password;
//     static #id;
//     constructor(name, phone, password) {
//         this.#name = name;
//         this.#phone = phone;
//         this.#password = password;
//         // #id++;
//     }
// }

export class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
