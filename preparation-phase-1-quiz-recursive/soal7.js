/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
    //code here
    if(equation <= 1){
        return ''
    }

    let pangkatSepuluh = 10 ** Math.floor(Math.log10(equation))
    let digitPertama = Math.floor(equation / pangkatSepuluh) * pangkatSepuluh
    let simbolTambah = equation - digitPertama > 0 ? ' + ' : ''

    return digitPertama + simbolTambah + parseNumber(equation - digitPertama)

    
};
  
  console.log(parseNumber(3333)) // 3000+300+30+3  // 3000 + 300 + 30 + 3
  console.log(parseNumber(90)) // 90
  console.log(parseNumber(2333)) // 2000+300+30+3