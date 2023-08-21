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
    sks integer(5) not null,
    idJurusan varchar(5) not null,
    foreign key (idJurusan) references Jurusan (idJurusan)
);

insert into Matakuliah(idMatakuliah, namaMataKuliah, sks, idJurusan) values
("m01","sistem analisis","20","j01"),
("m02","research IT","15","j01"),
("m03","Introduction of programming","16","j02"),
("m04","Mobile Programming","20","j02");

select * from Matakuliah;

create table Dosen(
    idDosen varchar(5) primary key not null,
    namaDosen varchar(100) not null,
    idMatakuliah varchar(5) not null,
    foreign key (idMatakuliah) references Matakuliah (idMatakuliah)
);

insert into Dosen(idDosen, namaDosen, idMatakuliah) values
("d01","sarua","m01"),
("d02","matt","m02"),
("d03","apis","m03"),
("d04","serlok","m04");

select * from Dosen;