const x = [3, 5 ,12];
let hasil = 0;

// menggunakan for
for(let i = 0;i < x.length;i++){
    hasil += x[i];
}
console.log('Menggunakan For');
console.log(hasil);

//menggunakan while
hasil = 0;
let i = 0;
while( i < x.length){
    hasil += x[i];
    i++; 
}

console.log('Menggunakan While');
console.log(hasil);

//menggunakan do
hasil = 0;
i = 0;

do{
    hasil += x[i];
    i++;
}while(i < x.length);

console.log('Menggunakan Do While');
console.log(hasil);
