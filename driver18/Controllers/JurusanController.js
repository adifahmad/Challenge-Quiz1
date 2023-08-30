import Jurusan from '../Models/Jurusan.js'
import { rl, menuUtama } from '../main.js'
import { showDetail, showMenu, showTableJurusan } from '../Views/jurusanView.js'


export default class JurusanController {
    static menu() {
        showMenu()
        rl.question('masukkan salah satu no. opsi dari diatas :', (answer) => {
            switch (answer) {
                case '1':
                    JurusanController.daftar();
                    break;
                case '2':
                    JurusanController.cari();
                    break;
                case '3':
                    JurusanController.tambah();
                    break;
                case '4':
                    JurusanController.hapus();
                    break;
                case '5':
                    menuUtama()
                    break;

            }
        })
    }

    static daftar() {
        Jurusan.find(function (data) {
            showTableJurusan(data)
            JurusanController.menu();
        })
    }
    static cari() {
        rl.question('Masukan ID Jurusan : ', async (answer) => {
            try {
                const data = await Jurusan.search(answer)
                showDetail(data)
                JurusanController.menu()
            } catch (err) {
                console.log(`Data gagal tertangkap, silahkan ulangi lagi!`)
                JurusanController.cari()
            }
        })
    }
    static tambah() {
        Jurusan.find(function (data) {
            console.log('Lengkapi Table dibawah ini : ')
            showTableJurusan(data)
            rl.question('Kode Jurusan : ', (answer1) => {
                rl.question('Nama Jurusan : ', (answer2) => {
                    const jurusan = new Jurusan({ idJurusan: answer1 , namajurusan: answer2 })
                    jurusan.save(function() {
                        JurusanController.menu() 
                    })
                })
            })
        })
       
    }
    static hapus() {
        rl.question('Masukan ID Jurusan : ', (answer) => {
            Jurusan.remove(answer).then(() => {
                console.log(`Data jurusan ${answer}, telah dihapus.`)
                JurusanController.menu()
            }).catch((err) => {
                console.log(`Data ${answer}, gagal terhapus. `)
            })
        })
    }
}