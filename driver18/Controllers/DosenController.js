import Dosen from '../Models/Dosen.js'
import {rl, menuUtama} from '../main.js'
import { showDetail,showMenu, showTableDosen } from '../Views/dosenView.js'

export default class DosenController {
    static menu() {
        showMenu()
        rl.question('masukkan salah satu no. opsi dari diatas :', (answer) => {
            switch (answer) {
                case '1':
                    DosenController.daftar();
                    break;
                case '2':
                    DosenController.cari();
                    break;
                case '3':
                    DosenController.tambah();
                    break;
                case '4':
                    DosenController.hapus();
                    break;
                case '5':
                    menuUtama()
                    break;

            }
        })
    }

    static daftar() {
        Dosen.find(function (data) {
            showTableDosen(data)
            DosenController.menu();
        })
    }
    static cari() {
        rl.question('Masukan ID Dosen : ', async (answer) => {
            try {
                const data = await Dosen.search(answer)
                showDetail(data)
                DosenController.menu()
            } catch (err) {
                console.log(`Data gagal tertangkap, silahkan ulangi lagi!`)
                DosenController.cari()
            }
        })
    }
    static tambah() {
        Dosen.find(function (data) {
            showTableDosen(data)
            rl.question('Kode Dosen : ', (answer1) => {
                rl.question('Nama Dosen : ', (answer2) => {
                    const dosen = new Dosen({ idDosen: answer1 , namaDosen: answer2 })
                    dosen.save(function(){
                        DosenController.menu()
                    })
                })
            })
        })
        
    }
    static hapus() {
        rl.question('Masukan ID Dosen : ', (answer) => {
            Dosen.remove(answer).then(() => {
                console.log(`Data Dosen ${answer}, telah dihapus.`)
                DosenController.menu()
            }).catch((err) => {
                console.log(`Data ${answer}, gagal terhapus. `)
            })
        })
    }
}