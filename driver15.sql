SELECT nim, nama, alamat, Mahasiswa.idJurusan AS idJurusan, Jurusan.namajurusan AS namaJurusan
FROM Mahasiswa
LEFT JOIN Jurusan
ON Mahasiswa.idJurusan = Jurusan.idJurusan;

ALTER TABLE Mahasiswa
ADD Birthdate DATE;

UPDATE Mahasiswa SET Birthdate = "2003-10-02" WHERE nim = "p01";
UPDATE Mahasiswa SET Birthdate = "1996-02-15" WHERE nim = "p02";
UPDATE Mahasiswa SET Birthdate = "2001-05-21" WHERE nim = "p03";
UPDATE Mahasiswa SET Birthdate = "1999-08-05" WHERE nim = "p04";

SELECT nim, nama,(strftime('%Y', 'now') - strftime('%Y', Birthdate)) - (strftime('%m-%d', 'now') < strftime('%m-%d', Birthdate)) AS Age FROM Mahasiswa WHERE Age < 20;

SELECT nama, Mahasiswa.nim AS Nim, HasilBelajar.nilai AS Grade
FROM Mahasiswa
JOIN HasilBelajar
ON Mahasiswa.nim = HasilBelajar.nim
WHERE Grade <= "B"; 

SELECT Mahasiswa.Nim AS Nim, Mahasiswa.nama AS NamaMahasiswa, SUM (sks) AS JumlahSKS 
FROM HasilBelajar 
JOIN Mahasiswa ON HasilBelajar.Nim = Mahasiswa.Nim JOIN Matakuliah ON HasilBelajar.idMatakuliah = Matakuliah.idMatakuliah
GROUP BY Mahasiswa.Nim
HAVING JumlahSKS >= 10;

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

SELECT *,(SELECT COUNT(DISTINCT nim) FROM HasilBelajar WHERE HasilBelajar.idDosen = Dosen.idDosen) AS JumlahMahasiswa FROM Dosen;

SELECT nim, nama,(strftime('%Y', 'now') - strftime('%Y', Birthdate)) - (strftime('%m-%d', 'now') < strftime('%m-%d', Birthdate)) AS Age FROM Mahasiswa
ORDER BY Age ASC;


UPDATE HasilBelajar SET nilai = "D" WHERE idHasil = "3";
UPDATE HasilBelajar SET nilai = "E" WHERE idHasil = "4";

SELECT Mahasiswa.nim AS Nim, nama, HasilBelajar.idMatakuliah AS IDMatakuliah, namaMataKuliah, Mahasiswa.idJurusan AS IDJurusan, namaJurusan, HasilBelajar.idDosen AS IDDosen, namaDosen, nilai
FROM HasilBelajar
JOIN Mahasiswa ON HasilBelajar.Nim = Mahasiswa.nim JOIN Jurusan ON Mahasiswa.idJurusan = Jurusan.idJurusan JOIN Matakuliah ON HasilBelajar.idMatakuliah = Matakuliah.idMatakuliah JOIN Dosen ON HasilBelajar.idDosen = Dosen.idDosen 
WHERE nilai >= "D";






