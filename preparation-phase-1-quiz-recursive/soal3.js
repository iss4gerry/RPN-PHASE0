/**
  Vowels Counter Recursive
  Diberikan sebuah function consonantCounterRecursive(sentences) yang 
  menerima satu parameter berupa
  string. Function akan me-return jumlah huruf konsonan yang terdapat 
  di dalam parameter inputan.
  Jika ada karakter selain abjad/alphabet maka tidak akan dihitung.
- Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function vowelsCounterRecursive
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function vowelsCounterRecursive
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
*/

function consonantCounterRecursive(sentences){
    //code here

    if(sentences.length === 0){
        return 0;
    }

    const indexHuruf = sentences[0].toLowerCase();
    const isHuruf = (indexHuruf >= 'a' && indexHuruf <= 'z');
    const isKonsonan = (indexHuruf === 'a' || indexHuruf === 'e' || indexHuruf === 'i' || indexHuruf === 'o' || indexHuruf === 'u');

    if (isHuruf && !isKonsonan){
        return 1 + consonantCounterRecursive(sentences.slice(1));
    }

    return consonantCounterRecursive(sentences.slice(1));
  }
  
  console.log(consonantCounterRecursive('alDi Suka MakAn baksO')) //10
  console.log(consonantCounterRecursive('AziZy')) // 3
  console.log(consonantCounterRecursive('awt6an')) // 3