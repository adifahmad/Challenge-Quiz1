import Table from "cli-table";

export function showTableMatkul(data = []){
    var table = new Table({
        head: ['ID Matakuliah', 'Nama Matakuliah', 'Sks']
      , colWidths: [5, 90, 5]
    });
    data.forEach((item)=>{
        table.push(
            [item.idMatakuliah, item.namaMataKuliah, item.sks]
        );
    })
    console.log(table.toString());
}

export function showMenu(){
    console.log(`
Silahkan pilih opsi dibawah ini :
[1] Daftar Matakuliah
[2] Cari Matakuliah
[3] Tambah Matakuliah
[4] Hapus Matakuliah
[5] Kembali
   `)
}

export function showDetail(data){
    console.log(`
======================================================

    Detail Matakuliah dengan kode : '${data.idMatakuliah}' :
    Kode Matakuliah : ${data.idMatakuliah}
    Nama Matakuliah : ${data.namaMataKuliah}
    SKS             : ${data.sks}
    `)

}