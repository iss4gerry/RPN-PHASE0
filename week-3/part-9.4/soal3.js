//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
    let string = kalimat.split('');
    let hasil = [];
    let arrHuruf = [];
    for(let i = 0;i< kalimat.length;i++){
        if(string[i] === string[i].toUpperCase()){
            hasil.push(string[i].toLowerCase());
        }else{
            hasil.push(string[i].toUpperCase());
        }
    }

    arrHuruf = hasil.join('')
    return arrHuruf;

  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"