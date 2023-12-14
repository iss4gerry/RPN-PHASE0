/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    let hasil = 0;
    let myObj= [];
    for(let i = 0;i < arrPenumpang.length;i++){
        let nama = arrPenumpang[i][0];
        let start = arrPenumpang[i][1];
        let sampai = arrPenumpang[i][2];

        let indexStart = rute.indexOf(start);
        let indexSampai = rute.indexOf(sampai);

        hasil = (indexSampai - indexStart);
        biaya = hasil * 2000;

        myObj.push({
            penumpang: nama,
            naikDari: start,
            tujuan: sampai,
            bayar:biaya
        })

    }

    return myObj;

  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]