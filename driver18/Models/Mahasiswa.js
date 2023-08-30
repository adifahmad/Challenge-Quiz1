import {db} from './connect.js'

export default class Mahasiswa {
    constructor(obj) {
        this.nim = obj.nim
        this.nama = obj.nama
        this.Birthdate = obj.Birthdate
        this.alamat = obj.alamat
        this.idJurusan = obj.idJurusan
    }

    save(next) {
        db.run('INSERT INTO Mahasiswa(nim, nama, alamat, idJurusan, Birthdate) VALUES(?,?,?,?,?)', [this.nim, this.nama, this.alamat, this.idJurusan, this.Birthdate], (err) => {
            if (err) {
                console.log(err)
            }else{
                console.log('Mahasiswa berhasil ditambahkan')
            }
            next();
        })
    }

    static find(next) {
        let sql = 'SELECT nim, nama, Birthdate, alamat, Mahasiswa.idJurusan, Jurusan.namajurusan FROM Mahasiswa LEFT JOIN Jurusan ON Mahasiswa.idJurusan = Jurusan.idJurusan'
        db.all(sql, (err, rows) => {
            if (err) {
                console.log(err)
            }
            next(rows);
        })
    }

    static remove(nim) {
        return new Promise(function (resolve, reject) {
            db.run('DELETE FROM Mahasiswa WHERE nim = ?', [nim], (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        })
    }

    static search(nim) {
        return new Promise(function (resolve, reject) {
            db.get('SELECT * FROM Mahasiswa WHERE nim = ?', [nim], (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }
}