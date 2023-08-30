import Table from 'cli-table'

export function showTableJurusan(data = []){
    var table = new Table({
        head: ['ID Jurusan', 'Nama Jurusan']
      , colWidths: [5, 100]
    });
    data.forEach((item)=>{
        table.push(
            [item.idJurusan, item.namajurusan]
        );
    })
    console.log(table.toString());
}

export function showMenu(){
    console.log(`
Silahkan pilih opsi dibawah ini :
[1] Daftar Jurusan
[2] Cari Jurusan
[3] Tambah Jurusan
[4] Hapus Jurusan
[5] Kembali
   `)
}

export function showDetail(data){
    console.log(`
======================================================

    Detail Jurusan dengan kode : '${data.idJurusan}' :
    Kode Jurusan : ${data.idJurusan}
    Nama Jurusan : ${data.namajurusan}
    `)

}
