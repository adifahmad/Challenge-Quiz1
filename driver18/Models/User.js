import { db } from './connect.js'

export default class User {
    constructor(obj) {
        this.username = obj.username
        this.password = obj.password
    }

static searchAccount(username) {
    return new Promise(function (resolve, reject) {
        db.get('SELECT * FROM user WHERE username = ?', [username], (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

static searchPass(password){
    return new Promise(function (resolve, reject) {
        db.get('SELECT * FROM user WHERE password = ?', [password], (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}
}