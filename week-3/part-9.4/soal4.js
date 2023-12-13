/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

contoh:
barbarian kenapa bisa true?
karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a

Spasi juga dianggap sebagai karakter
*/

function checkAB(num) {
    let arrNum = num.split('');
    let indexA = [];
    let indexB = [];
    let hasil;
    let temp;

    for(let i = 0;i < num.length;i++){
        if(arrNum[i].includes('a')){
            indexA.push(i);
        }else if(arrNum[i].includes('b')){
            indexB.push(i);
        }
    }

    if(indexA.length === 0 || indexB === 0){
        return false;
    }


    for(let j = 0;j < indexA.length;j++){
        for(let z = 0;z < indexB.length;z++){
            if(indexA[j] < indexB[z]){
                hasil = indexB[z] - indexA[j] - 1;
                if(hasil === 3){
                    temp = true;
                }
                
            }else{
                hasil = indexA[j] - indexB[z] - 1;
                if(hasil === 3){
                    temp = true;
                }
            }
        }
    }
    if(temp ===  undefined){
        return false
    }
    return temp;
  }
  
  // TEST CASES
  console.log(checkAB('lane borroweda')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false