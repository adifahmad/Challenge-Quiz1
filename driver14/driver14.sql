create table Mahasiswa(
    nim varchar(5) primary key not null,
    nama varchar(100) not null,
    alamat varchar(100) not null,
    idJurusan varchar(5) not null,
    foreign key (idJurusan) references Jurusan (idJurusan)
);

insert into Mahasiswa(nim, nama, alamat, idJurusan) values
("p01","adif","bogor","j01"),
("p02","oki","medan","j01"),
("p03","ramdan","garut","j02");

select * from Mahasiswa;

create table Jurusan(
    idJurusan varchar(5) primary key not null,
    namajurusan varchar(100) not null
);

insert into Jurusan(idJurusan, namajurusan) values
("j01","Sistem informasi"),
("j02","Informasi Teknologi");

select * from Jurusan;

create table Matakuliah(
    idMatakuliah varchar(5) primary key not null,
    namaMataKuliah varchar(100) not null,
    sks integer(5) not null
);

insert into Matakuliah(idMatakuliah, namaMataKuliah, sks) values
("m01","sistem analisis","20"),
("m02","research IT","15"),
("m03","Introduction of programming","16"),
("m04","Mobile Programming","20");

select * from Matakuliah;

create table Dosen(
    idDosen varchar(5) primary key not null,
    namaDosen varchar(100) not null
);

insert into Dosen(idDosen, namaDosen) values
("d01","sarua"),
("d02","matt"),
("d03","apis"),
("d04","serlok");

select * from Dosen;

create table HasilBelajar(
    idHasil integer primary key autoincrement,
    nim varchar(5) not null,
    idDosen varchar(5) not null,
    idMatakuliah varchar (5) not null,
    nilai varchar(3) not null,
    foreign key (nim) references Mahasiswa (nim),
    foreign key (idDosen) references Dosen (idDosen),
    foreign key (idMatakuliah) references Matakuliah (idMatakuliah)
);

insert into HasilBelajar(nim, idDosen, idMatakuliah, nilai) values
("p01","d01","m01","A+"),
("p01","d02","m02","B-"),
("p02","d01","m01","A"),
("p02","d02","m02","C"),
("p03","d03","m03","A-"),
("p03","d04","m04","A+");

select * from HasilBelajar;
