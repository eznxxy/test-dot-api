# API Automation using webdriverio

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

