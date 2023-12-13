//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {

    let hasil;

    if(angka < 2){
        hasil =  false;
    } 

    for(let i = 2;i < angka;i++){

        if(angka === 3){
            hasil = true;
        }else if(angka % i === 0 || angka % 3 === 0){
            hasil =  false;
        }else{
            hasil =  true;
        }

        
    }

    return hasil;

  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false