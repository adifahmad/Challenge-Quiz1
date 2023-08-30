import readline from 'readline';
import JurusanController from './Controllers/JurusanController.js';
import DosenController from './Controllers/DosenController.js';
import MatakuliahController from './Controllers/MatakuliahController.js';
import MahasiswaController from './Controllers/MahasiswaController.js';
import HasilbelajarController from './Controllers/HasilbelajarController.js';
import User from './Models/User.js';

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log(`
=====================================================================================================

Welcome to Universitas Pendidikan Indonesia
Jl. Setiabudi No. 255    


=====================================================================================================
    `
    )

export function login() {
    rl.question('username :', async (answer) => {
        rl.question('password :', async (answer2) => {
            try {
            const datauser = await User.searchAccount(answer)
            if(answer === datauser.username && answer2 === datauser.pass){
            console.log(`welcome ${answer}, Your Access level is Admin`)
            menuUtama()
            }else{
                console.log('password tidak sesuai')
                login()
            }
            } catch (err) {
                console.log(`username tidak terdaftar`)
                login()
            }
        })
    })
}

export function menuUtama() {
    console.log(`
silahkan pilih opsi dibawah ini :
[1] Mahasiswa
[2] Jurusan
[3] Dosen
[4] Mata Kuliah
[5] Kontrak
[6] Keluar`)

    rl.question('masukkan salah satu no. opsi dari diatas :', (answer) => {
        switch (answer) {
            case '1':
                MahasiswaController.menu();
                break;
            case '2':
                JurusanController.menu();
                break;
            case '3':
                DosenController.menu();
                break;
            case '4':
                MatakuliahController.menu();
                break;
            case '5':
                HasilbelajarController.menu();
                break;
            case '6':
                console.log(`Anda telah keluar`)
                console.log(`
=====================================================================================================

Welcome to Universitas Pendidikan Indonesia
Jl. Setiabudi No. 255    


=====================================================================================================
    `
    )
                process.exit(0);
            default:
                console.log('anda salah memasukkan opsi')
                menuUtama();
                break;
        }
    })
}

login()