// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
    let jam = Math.floor(menit/60)

    let sisaMenit = menit % 60;
    if(sisaMenit < 10){
        angka = 0;
    }else{
        angka = '';
    }
    return jam + ':' + angka + sisaMenit;
}
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00

// ------------------------------------
console.log(konversiMenit(90));
// ------------------------------------

//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    let strArray = str.split('');
    let filterX = strArray.filter((x) => x === 'x');
    let filterO = strArray.filter((o) => o === 'o');
    let oJoin = filterO.join('');
    let xjoin = filterX.join('');

    if(oJoin.length === xjoin.length){
        return true;
    }else{
        return false;
    }

}
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true