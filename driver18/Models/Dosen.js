import { db } from './connect.js'

export default class Dosen {
    constructor(obj) {
        this.idDosen = obj.idDosen
        this.namaDosen = obj.namaDosen
    }

    save(next) {
        db.run('INSERT INTO Dosen(idDosen, namaDosen) VALUES(?,?)', [this.idDosen, this.namaDosen], (err) => {
            if (err) {
                console.log(err)
            }else{
                console.log('Dosen berhasil ditambahkan')
            }
            next();
        })
    }

    static find(next) {
        let sql = 'SELECT * FROM Dosen'
        db.all(sql, (err, rows) => {
            if (err) {
                console.log(err)
            }
            next(rows);
        })
    }

    static remove(idDosen) {
        return new Promise(function (resolve, reject) {
            db.run('DELETE FROM Dosen WHERE idDosen = ?', [idDosen], (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        })
    }

    static search(idDosen) {
        return new Promise(function (resolve, reject) {
            db.get('SELECT * FROM Dosen WHERE idDosen = ?', [idDosen], (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }
}