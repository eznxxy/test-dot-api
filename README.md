# API Automation using webdriverio

Disclaimer Proyek ini dibuat hanya untuk memenuhi test online DOT Indonesia dan sejauh yang saya tau untuk saat ini [webdriver.io](https://webdriver.io/) tidak diperuntukan untuk API automation [(reference)](https://github.com/webdriverio/webdriverio/discussions/7187) karena dia membutuhkan capabilities agar bisa berjalan tapi karena di soal diminta untuk menggunakan webdriver.io jadi saya akali dengan menambahkan option headless pada capabilities yang dibutuhkan oleh webdriverio

## Prerequisite

Nodejs stable version

Latest chrome version

## Installation

Use the package manager [npm](https://nodejs.org/en/download) to install the library.

```bash
npm install
```

## Usage

```bash
import foobar

# run all specs
npm run wdio

#run spesific spec file
npx wdio run ./wdio.conf.js --spec ./test/specs/scenarios/book_list.spec.js

#run spesific suite
npx wdio run ./wdio.conf.js --suite examplesuitename
```

## Report

Untuk report menggunakan bawaan dari webdriver.io itu sendiri

## Flow testing

Alur dari automation api ini adalah mulai dari register kemudian login dan dilanjutkan dengan mulai testing pada endpoint berikut

```
POST /BookStore/v1/Books
DELETE /BookStore/v1/Books
```

User digenerate secara otomatis dan disimpan ke dalam log/registeredUser.txt setelah testing selesai.

## Help

Bisa hubungi saya via whatsapp maupun email jika terjadi kendala dalam instalasi / menjalankan programnya, Terimakasih ^^
