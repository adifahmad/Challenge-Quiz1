import { db } from './connect.js'

export default class Jurusan {
    constructor(obj) {
        this.idJurusan = obj.idJurusan
        this.namajurusan = obj.namajurusan
    }

    save(next) {
        db.run('INSERT INTO Jurusan(idJurusan, namajurusan) VALUES(?,?)', [this.idJurusan, this.namajurusan], (err) => {
            if (err) {
                console.log(err)
            }else{
                console.log('Jurusan berhasil ditambahkan')
            }
            next();
        })
    }

    static find(next) {
        let sql = 'SELECT * FROM Jurusan'
        db.all(sql, (err, rows) => {
            if (err) {
                console.log(err)
            }
            next(rows);
        })
    }

    static remove(idJurusan) {
        return new Promise(function (resolve, reject) {
            db.run('DELETE FROM Jurusan WHERE idjurusan = ?', [idJurusan], (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        })
    }

    static search(idJurusan) {
        return new Promise(function (resolve, reject) {
            db.get('SELECT * FROM Jurusan WHERE idJurusan = ?', [idJurusan], (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }
}
