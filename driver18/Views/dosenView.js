import Table from 'cli-table'

export function showTableDosen(data = []){
    var table = new Table({
        head: ['ID Dosen', 'Nama Dosen']
      , colWidths: [5, 100]
    });
    data.forEach((item)=>{
        table.push(
            [item.idDosen, item.namaDosen]
        );
    })
    console.log(table.toString());
}

export function showMenu(){
    console.log(`
Silahkan pilih opsi dibawah ini :
[1] Daftar Dosen
[2] Cari Dosen
[3] Tambah Dosen
[4] Hapus Dosen
[5] Kembali
   `)
}

export function showDetail(data){
    console.log(`
======================================================

    Detail Dosen dengan kode : '${data.idDosen}' :
    Kode Dosen : ${data.idDosen}
    Nama Dosen : ${data.namaDosen}
    `)

}