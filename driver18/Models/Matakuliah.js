import { db } from './connect.js'

export default class Jurusan {
    constructor(obj) {
        this.idMatakuliah = obj.idMatakuliah
        this.namaMataKuliah = obj.namaMataKuliah
        this.sks = obj.sks
    }

    save(next) {
        db.run('INSERT INTO Matakuliah(idMatakuliah, namaMataKuliah, sks) VALUES(?,?,?)', [this.idMatakuliah, this.namaMataKuliah, this.sks], (err) => {
            if (err) {
                console.log(err)
            }else{
                console.log('Matakuliah berhasil ditambahkan')
            }
            next();
        })
    }

    static find(next) {
        let sql = 'SELECT * FROM Matakuliah'
        db.all(sql, (err, rows) => {
            if (err) {
                console.log(err)
            }
            next(rows);
        })
    }

    static remove(idMatakuliah) {
        return new Promise(function (resolve, reject) {
            db.run('DELETE FROM Matakuliah WHERE idMatakuliah = ?', [idMatakuliah], (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        })
    }

    static search(idMatakuliah) {
        return new Promise(function (resolve, reject) {
            db.get('SELECT * FROM Matakuliah WHERE idMatakuliah = ?', [idMatakuliah], (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }
}