function piramid2(num) {
    let hasil = '';
    //code here

    for(let i = num; i >= 1;i--){
        let baris = '';

        for(let j = 1;j <= i;j++){
            baris += i
        }

        hasil += baris + ' \n'
    }



    for(let i = 2;i <= num;i++){
        let baris = ''

        for(let j = 1;j <= i;j++){
            baris += i;
        }

        hasil += baris + '\n'
    }

    return hasil
  }
  
  console.log(piramid2(10))
  
  /*
  55555
  4444
  333
  22
  1
  22
  333
  4444
  55555
  */