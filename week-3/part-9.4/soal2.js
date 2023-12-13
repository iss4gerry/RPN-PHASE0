//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
  let string = str.split('');
  let hasil = [];
    for(let i = 0;i < str.length; i++){
      for (let j = 0; j < str.length - 1 - i; j++) {
      if(string[j] > string[j+1]){
        let temp = string[j];
        string[j] = string[j + 1];
        string[j + 1] = temp;
      }
    }
  }
    hasil = string.join('');
    return hasil;
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'
  