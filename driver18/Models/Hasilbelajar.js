import { db } from './connect.js'

export default class Hasilbelajar {
    constructor(obj) {
        this.nim = obj.nim
        this.nama = obj.nama
        this.idDosen = obj.idDosen
        this.namaDosen = obj.namaDosen
        this.idMatakuliah = obj.idMatakuliah
        this.namaMataKuliah = obj.namaMataKuliah
        this.nilai = obj.nilai
    }

    save(next) {
        db.run('INSERT INTO Hasilbelajar(nim, idDosen, idMatakuliah, nilai) VALUES(?,?,?,?)', [this.nim, this.idDosen, this.idMatakuliah, this.nilai], (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log('Kontrak berhasil ditambahkan')
            }
            next();
        })
    }

    static find(next) {
        let sql = 'SELECT idHasil, Hasilbelajar.nim, Mahasiswa.nama, Matakuliah.namaMataKuliah, Dosen.namaDosen, nilai FROM Hasilbelajar LEFT JOIN Mahasiswa ON Hasilbelajar.nim = Mahasiswa.nim LEFT JOIN Matakuliah ON Hasilbelajar.idMatakuliah = Matakuliah.idMatakuliah LEFT JOIN Dosen ON Hasilbelajar.idDosen = Dosen.idDosen'
        db.all(sql, (err, rows) => {
            if (err) {
                console.log(err)
            }
            next(rows);
        })
    }

    static remove(idHasil) {
        return new Promise(function (resolve, reject) {
            db.run('DELETE FROM Hasilbelajar WHERE idHasil = ?', [idHasil], (err) => {
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
            db.all('SELECT * FROM Hasilbelajar WHERE nim = ?', [nim], (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    static searchUpdate(nim){
        return new Promise(function (resolve, reject) {
            db.all('SELECT idHasil, Matakuliah.namaMataKuliah, nilai FROM Hasilbelajar LEFT JOIN Matakuliah ON Hasilbelajar.idMatakuliah = Matakuliah.idMatakuliah LEFT JOIN Mahasiswa ON Hasilbelajar.nim = Mahasiswa.nim WHERE Hasilbelajar.nim = ?', [nim], (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    static update(nilai, idHasil) {
        return new Promise(function (resolve, reject) {
            db.run('UPDATE Hasilbelajar SET nilai = ? WHERE idHasil = ?', [nilai, idHasil], (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        })
    }
}

