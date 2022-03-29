# Mini Wallet

## Deskripsi
Mini Wallet yang didalamnya memiliki 7 endpoint untuk pengoperasian sistem wallet itu sendiri dengan JWT(jsonWebToken) sebagai verifikasinya

1. Install NPM (Node Package Manager)
```
npm install
```
2. Install config
```
1. buka terminal di dalam folder miniWallet
2. didalam terminal masukan sequelize init
3. lalu masukan sequelize db:create untuk membuat database
4. dan masukan sequelize db:migrate untuk membuat tabel
```
3. Run Program
```
npm start
```

4. Test Program
```
Pakai postman untuk menjalankan program
```

## Stack
- Node.js (v16.14.2)
- Framework: Express.js
- ORM: Sequelize
- Database: PostgreSQL

## Fungsional

* Import Collections Postman yang ada didalam folder Postman

* akses `localhost:3000/` untuk mengakses halaman home

* akses `localhost:3000//api/v1/init` dengan method POST untuk mendaftarkan akun

* akses `localhost:3000/api/v1/login` dengan method POST untuk login dengan akun yang baru dibuat dan mendapatkan token untuk verifikasi

* akses `localhost:3000/api/v1/wallet` dengan method POST dan masukan token yang didapatkan ketika login kedalam header dengan Key Authorization dan Value token untuk mengaktifkan wallet agar dapat digunakan, karena apabila wallet belum diaktifkan maka wallet tidak dapat digunakan

* akses `localhost:3000/api/v1/wallet` dengan method GET dan masukan token yang didapatkan ketika login kedalam header dengan Key Authorization dan Value token untuk melihat keterangan dari wallet 

* akses `localhost:3000/api/v1/wallet/deposits` dengan method POST dan masukan token yang didapatkan ketika login kedalam header dengan Key Authorization dan Value token untuk menambahkan balance yang dimiliki dengan cara memasukan inptuBalance sesuai dengan angka yang di inginkan

* akses `localhost:3000/api/v1/wallet/withdrawals` dengan method POST dan masukan token yang didapatkan ketika login kedalam header dengan Key Authorization dan Value token untuk melakukan pembelian barang dengan cara memasukan items yang di inginkan dan harganya, apabila balance yang dimiliki 0 maka tidak dapat melakukan pembelian apapun

* akses `localhost:3000/api/v1/wallet` dengan method PATCH dan masukan token yang didapatkan ketika login kedalam header dengan Key Authorization dan Value token untuk mengnonaktifkan wallet sehingga wallet tidak dapat digunakan untuk apapun



