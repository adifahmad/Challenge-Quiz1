import Table from "cli-table";

export function showTableMahasiswa(data = []){
    var table = new Table({
        head: ['NIM', 'Nama','Tanggal Lahir', 'Alamat',  'Kode Jurusan', 'Nama Jurusan']
      , colWidths: [5, 20, 20, 20, 15, 20]
    });
    data.forEach((item)=>{
        table.push(
            [item.nim, item.nama, item.Birthdate, item.alamat, item.idJurusan, item.namajurusan]
        );
    })
    console.log(table.toString());
}

export function showMenu(){
    console.log(`
Silahkan pilih opsi dibawah ini :
[1] Daftar Mahasiswa
[2] Cari Mahasiswa
[3] Tambah Mahasiswa
[4] Hapus Mahasiswa
[5] Kembali
   `)
}

export function showDetail(data){
    console.log(`
======================================================

    Detail Mahasiswa dengan NIM '${data.nim}' :
    NIM : ${data.nim}
    Nama : ${data.nama}
    Alamat : ${data.alamat}
    Jurusan: ${data.idJurusan}

    `)

}