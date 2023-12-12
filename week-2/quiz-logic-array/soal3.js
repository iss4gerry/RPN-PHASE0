//soal 3
/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/


function groupAnimals(animals) {
    let hasilA = [];
    let hasilB = [];
    let hasilC = [];
    let hasilD = [];
    let hasil = [];
  for(let i = 0;i<animals.length;i++){
    if(animals[i][0] === 'a'){
        hasilA.push(animals[i]);
    }if(animals[i][0] === 'c'){
        hasilB.push(animals[i]);
    }if(animals[i][0] === 'k'){
        hasilC.push(animals[i]);
    }
    if(animals[i][0] === 'u'){
        hasilD.push(animals[i]);
    }
  }

 

  hasil.push(hasilA, hasilB, hasilC)
  if(hasilD.length > 0){
    hasil.push(hasilD);
  }
  return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]