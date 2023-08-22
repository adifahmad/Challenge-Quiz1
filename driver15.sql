SELECT nim, nama, alamat, Mahasiswa.idJurusan AS idJurusan, Jurusan.namajurusan AS namaJurusan
FROM Mahasiswa
LEFT JOIN Jurusan
ON Mahasiswa.idJurusan = Jurusan.idJurusan;

ALTER TABLE Mahasiswa
ADD umur integer(5);

SELECT * FROM Mahasiswa;

UPDATE Mahasiswa SET umur = "19" WHERE nim = "p01";
UPDATE Mahasiswa SET umur = "30" WHERE nim = "p02";
UPDATE Mahasiswa SET umur = "18" WHERE nim = "p03";

SELECT nama, umur AS umurdibawah20 FROM Mahasiswa WHERE umur < 20;

SELECT nama, Mahasiswa.nim AS Nim, HasilBelajar.nilai AS Grade
FROM Mahasiswa
JOIN HasilBelajar
ON Mahasiswa.nim = HasilBelajar.nim
WHERE Grade <= "B"; 

SELECT nama, Mahasiswa.nim AS Nim, HasilBelajar.nilai AS Grade
FROM Mahasiswa
JOIN HasilBelajar
ON Mahasiswa.nim = HasilBelajar.nim
WHERE Grade <= "B";

SELECT nama, Mahasiswa.nim AS Nim, HasilBelajar.idMatakuliah AS IDMatakuliah, sks
FROM HasilBelajar
JOIN Mahasiswa ON HasilBelajar.Nim = Mahasiswa.nim JOIN Matakuliah ON HasilBelajar.idMatakuliah = Matakuliah.idMatakuliah 
WHERE sks >= 10;

INSERT INTO Matakuliah(idMatakuliah, namaMataKuliah, sks) values
("m05","data mining","8");

INSERT INTO Dosen(idDosen, namaDosen) values
("d05","malia");

INSERT INTO HasilBelajar(Nim,idDosen,idMatakuliah,nilai)values
("p03","d05","m05","B+");

SELECT * FROM HasilBelajar;

SELECT nama, Mahasiswa.nim AS Nim, HasilBelajar.idMatakuliah AS IDMatakuliah, namaMataKuliah
FROM HasilBelajar
JOIN Mahasiswa ON HasilBelajar.Nim = Mahasiswa.nim JOIN Matakuliah ON HasilBelajar.idMatakuliah = Matakuliah.idMatakuliah 
WHERE namaMataKuliah LIKE "data mining";

INSERT INTO Mahasiswa(nim, nama, alamat, idJurusan)values
("p04","Rizki","Tasik","j02");

UPDATE Mahasiswa SET umur = "17" WHERE nim = "p04";


SELECT *,(SELECT COUNT(DISTINCT nim) FROM HasilBelajar WHERE HasilBelajar.idDosen = Dosen.idDosen) AS JumlahMahasiswa FROM Dosen;

SELECT *
FROM Mahasiswa
ORDER BY umur ASC;


UPDATE HasilBelajar SET nilai = "D" WHERE idHasil = "3";
UPDATE HasilBelajar SET nilai = "E" WHERE idHasil = "4";

SELECT Mahasiswa.nim AS Nim, nama, HasilBelajar.idMatakuliah AS IDMatakuliah, namaMataKuliah, Mahasiswa.idJurusan AS IDJurusan, namaJurusan, HasilBelajar.idDosen AS IDDosen, namaDosen, nilai
FROM HasilBelajar
JOIN Mahasiswa ON HasilBelajar.Nim = Mahasiswa.nim JOIN Jurusan ON Mahasiswa.idJurusan = Jurusan.idJurusan JOIN Matakuliah ON HasilBelajar.idMatakuliah = Matakuliah.idMatakuliah JOIN Dosen ON HasilBelajar.idDosen = Dosen.idDosen 
WHERE nilai >= "D";






