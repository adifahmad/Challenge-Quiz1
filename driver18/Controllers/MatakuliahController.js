import Matakuliah from '../Models/Matakuliah.js'
import { rl, menuUtama } from '../main.js'
import { showDetail, showMenu, showTableMatkul } from '../Views/matakuliahView.js'

export default class MatakuliahController {
    static menu() {
        showMenu()
        rl.question('masukkan salah satu no. opsi dari diatas :', (answer) => {
            switch (answer) {
                case '1':
                    MatakuliahController.daftar();
                    break;
                case '2':
                    MatakuliahController.cari();
                    break;
                case '3':
                    MatakuliahController.tambah();
                    break;
                case '4':
                    MatakuliahController.hapus();
                    break;
                case '5':
                    menuUtama()
                    break;

            }
        })
    }

    static daftar() {
        Matakuliah.find(function (data) {
            showTableMatkul(data)
            MatakuliahController.menu();
        })
    }
    static cari() {
        rl.question('Masukan ID Matakuliah : ', async (answer) => {
            try {
                const data = await Matakuliah.search(answer)
                showDetail(data)
                MatakuliahController.menu()
            } catch (err) {
                console.log(`Data gagal tertangkap, silahkan ulangi lagi!`)
                MatakuliahController.cari()
            }
        })
    }
    static tambah() {
        Matakuliah.find(function (data) {
            console.log('Lengkapi Tabel dibawah ini : ')
            showTableMatkul(data)
            rl.question('Kode Matakuliah : ', (answer1) => {
                rl.question('Nama Matakuliah : ', (answer2) => {
                    rl.question('Berapa SKS : ', (answer3) => {
                        const matakuliah = new Matakuliah({ idMatakuliah: answer1, namaMataKuliah: answer2, sks: answer3 })
                        matakuliah.save(function () {
                            MatakuliahController.menu()
                        })
                    })

                })
            })
        })
    }
    static hapus() {
        rl.question('Masukan ID Matakuliah : ', (answer) => {
            Matakuliah.remove(answer).then(() => {
                console.log(`Data Matakuliah ${answer}, telah dihapus.`)
                MatakuliahController.menu()
            }).catch((err) => {
                console.log(`Data ${answer}, gagal terhapus. `)
            })
        })
    }
}