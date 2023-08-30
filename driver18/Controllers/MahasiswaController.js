import Mahasiswa from '../Models/Mahasiswa.js'
import { rl, menuUtama } from '../main.js'
import { showDetail, showMenu, showTableMahasiswa } from '../Views/mahasiswaView.js'
import Jurusan from '../Models/Jurusan.js'
import { showTableJurusan } from '../Views/jurusanView.js'

export default class MahasiswaController {
    static menu() {
        showMenu()
        rl.question('masukkan salah satu no. opsi dari diatas :', (answer) => {
            switch (answer) {
                case '1':
                    MahasiswaController.daftar();
                    break;
                case '2':
                    MahasiswaController.cari();
                    break;
                case '3':
                    MahasiswaController.tambah();
                    break;
                case '4':
                    MahasiswaController.hapus();
                    break;
                case '5':
                    menuUtama()
                    break;

            }
        })
    }

    static daftar() {
        Mahasiswa.find(function (data) {
            showTableMahasiswa(data)
            MahasiswaController.menu();
        })
    }
    static cari() {
        rl.question('Masukan NIM : ', async (answer) => {
            try {
                const data = await Mahasiswa.search(answer)
                showDetail(data)
                MahasiswaController.menu()
            } catch (err) {
                console.log(`Data gagal tertangkap, silahkan ulangi lagi!`)
                MahasiswaController.cari()
            }
        })
    }
    static tambah() {
        Mahasiswa.find(function (data) {
            showTableMahasiswa(data)
            rl.question('Nim : ', (answer1) => {
                rl.question('Nama : ', (answer2) => {
                    rl.question('Tanggal Lahir : ', (answer3) => {
                        rl.question('Alamat : ', (answer4) => {
                            Jurusan.find(function (data) {
                                showTableJurusan(data)
                                rl.question('Kode Jurusan : ', (answer5) => {
                                    const mahasiswa = new Mahasiswa({ nim: answer1, nama: answer2, Birthdate: answer3, alamat: answer4, idJurusan: answer5})
                                    mahasiswa.save(function () {
                                        Mahasiswa.find(function (data) {
                                            showTableMahasiswa(data)
                                            MahasiswaController.menu();
                                    })
                                })
                            })
                        })
                        })
                    })
                })
            })
        })
    }
    static hapus() {
        rl.question('Masukan NIM : ', (answer) => {
            Mahasiswa.remove(answer).then(() => {
                console.log(`Data jurusan ${answer}, telah dihapus.`)
                MahasiswaController.menu()
            }).catch((err) => {
                console.log(`Data ${answer}, gagal terhapus. `)
            })
        })
    }
}