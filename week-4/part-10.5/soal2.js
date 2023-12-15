/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals (str) {
    let hasil = str.split('').map((char) => {
        if(['a', 'i', 'u', 'e', 'o', 'A', 'I', 'U', 'E', 'O'].includes(char)){
            return String.fromCharCode(char.charCodeAt() + 1)
        }else{
            return char;
        }
    }).join('')

    return hasil;
  }
  
  
  function reverseWord (str) {
    const hasil = str.split('').reverse().join('');
    return hasil
  }
  
  function setLowerUpperCase (str) {
    const hasil = str.split('').map((char)=>{
        if(char === char.toUpperCase()){
            return char.toLowerCase();
        }
        if(char === char.toLowerCase()){
            return char.toUpperCase()
        }else{
            return char
        }
    }).join('')
    return hasil;
  }
  
  function removeSpaces (str) {
    //code di sini
    const hasil = str.split('').map((char)=>{
        if(char !== ' '){
            return char;
        }else{
            return char;
        }
    }).join('')
    return hasil;
  }
  
  function passwordGenerator (name) {
    const hilangkanSpasi = removeSpaces(name);
    const setLowerUpper = setLowerUpperCase(hilangkanSpasi);
    const balikanHuruf = reverseWord(setLowerUpper);
    const ubahVocal = changeVocals(balikanHuruf);

    return ubahVocal
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'