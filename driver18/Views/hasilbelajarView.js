import Table from "cli-table";

export function showTableKontrak(data = []){
    var table = new Table({
        head: ['ID', 'NIM', 'ID Dosen', 'ID Matakuliah', 'Nilai']
      , colWidths: [5, 5, 5, 5, 20]
    });
    data.forEach((item)=>{
        table.push(
            [item.idHasil, item.nim, item.idDosen, item.idMatakuliah, item.nilai]
        );
    })
    console.log(table.toString());
}

export function showMenu(){
    console.log(`
Silahkan pilih opsi dibawah ini :
[1] Daftar Kontrak
[2] Cari Kontrak
[3] Tambah Kontrak
[4] Hapus Kontrak
[5] Update Kontrak
[6] Kembali
   `)
}


export function showTableDaftar(data = []){
    var table = new Table({
        head: ['ID', 'NIM', 'Nama', 'Mata Kuliah', 'Dosen','Nilai']
      , colWidths: [5, 5, 20, 20, 20, 10]
    });
    data.forEach((item)=>{
        table.push(
            [item.idHasil, item.nim, item.nama , item.namaMataKuliah ? item.namaMataKuliah : '', item.namaDosen ? item.namaDosen : '', item.nilai]
        );
    })
    console.log(table.toString());
}

export function showDetailTable(data = []){
    var table = new Table({
        head: ['ID', 'Mata Kuliah','Nilai']
      , colWidths: [5, 20, 10]
    });
    data.forEach((item)=>{
        table.push(
            [item.idHasil, item.namaMataKuliah, item.nilai]
        );
    })
    console.log(table.toString());
}


