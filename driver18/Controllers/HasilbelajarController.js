import Hasilbelajar from '../Models/Hasilbelajar.js'
import { rl, menuUtama } from '../main.js'
import { showMenu, showTableDaftar, showTableKontrak } from '../Views/hasilbelajarView.js'
import Matakuliah from '../Models/Matakuliah.js'
import { showTableMatkul } from '../Views/matakuliahView.js'
import Dosen from '../Models/Dosen.js'
import { showTableDosen } from '../Views/dosenView.js'
import { showDetailTable } from '../Views/hasilbelajarView.js'

export default class HasilbelajarController {
    static menu() {
        showMenu()
        rl.question('masukkan salah satu no. opsi dari diatas :', (answer) => {
            switch (answer) {
                case '1':
                    HasilbelajarController.daftar();
                    break;
                case '2':
                    HasilbelajarController.cari();
                    break;
                case '3':
                    HasilbelajarController.tambah();
                    break;
                case '4':
                    HasilbelajarController.hapus();
                    break;
                case '5':
                    HasilbelajarController.uptodate();
                    break;
                case '6':
                    menuUtama()
                    break;

            }
        })
    }

    static daftar() {
        Hasilbelajar.find(function (data) {
            console.log(data)
            showTableDaftar(data)
            HasilbelajarController.menu();
        })
    }
    static cari() {
        Hasilbelajar.find(function (data) {
            showTableDaftar(data)
            rl.question('Masukan NIM Mahasiswa : ', async (answer) => {
                try {
                    data = await Hasilbelajar.search(answer)
                    console.log(`Daftar Kontrak Mahasiswa dengan nim ${answer} adalah:`)
                    showTableKontrak(data)
                    HasilbelajarController.menu()
                } catch (err) {
                    console.log(`Data gagal tertangkap, silahkan ulangi lagi!`)
                    HasilbelajarController.cari()
                }
            })
        })
    }
    static tambah() {
        Hasilbelajar.find(function (data) {
            console.log('Lengkapi Table dibawah ini : ')
            showTableDaftar(data)
            rl.question('Masukkan NIM : ', (nim) => {
                Matakuliah.find(function (data) {
                    showTableMatkul(data)
                    rl.question('Masukkan Kode Mata Kuliah : ', (kode_mk) => {
                        Dosen.find(function (data) {
                            showTableDosen(data)
                            rl.question('Masukkan ID Dosen : ', (id_dosen) => {
                                const hasilBelajar = new Hasilbelajar({ nim: nim, idMatakuliah: kode_mk, idDosen: id_dosen, nilai: " " })
                                hasilBelajar.save(function () {
                                    Hasilbelajar.find(function (data) {
                                        showTableDaftar(data)
                                        HasilbelajarController.menu()
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
        rl.question('Masukan ID Kontrak : ', (answer) => {
            Hasilbelajar.remove(answer).then(() => {
                console.log(`Data jurusan ${answer}, telah dihapus.`)
                HasilbelajarController.menu()
            }).catch((err) => {
                console.log(`Data ${answer}, gagal terhapus. `)
            })
        })
    }

    static uptodate() {
        Hasilbelajar.find(function (data) {
            showTableDaftar(data)
            rl.question('Masukan NIM Mahasiswa : ', async (nim1) => {
                try {
                    data = await Hasilbelajar.searchUpdate(nim1)
                    console.log(`Detail Mahasiswa dengan nim ${nim1} :`)
                    showDetailTable(data)
                    rl.question('masukkan id yang akan dirubah nilainya : ', (idhasil) => {
                        rl.question('tulis nilai yang baru : ', (nilai) => {
                            Hasilbelajar.update(nilai, idhasil).then(() => {
                                console.log(`nilai telah diupdate`)
                                HasilbelajarController.menu()
                            }).catch((err) => {
                                console.log(`Data ${idhasil},${nim1} gagal terupdate. `)
                            })
                        })
                    })
                } catch (err) {
                    console.log(err)
                    console.log(`Data gagal tertangkap, silahkan ulangi lagi!`)
                    HasilbelajarController.uptodate()
                }
            })

        })
    }
}

