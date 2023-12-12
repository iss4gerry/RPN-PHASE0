//soal 3
/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/


function groupAnimals(animals) {
  let hasil = [];
  let hurufAwal = [];

  for (let i = 0; i < animals.length; i++) {
    if (!hurufAwal.includes(animals[i][0])) {
      hurufAwal.push(animals[i][0]);
      hasil.push([animals[i]]);
    } else {
      let index = hurufAwal.indexOf(animals[i][0]);
      hasil[index].push(animals[i]);
    }
  }

  return hasil;
}
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak', ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]