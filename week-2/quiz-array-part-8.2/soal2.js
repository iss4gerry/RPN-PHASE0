let input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];


function dataHandling(input) {
    
    let splitName = input[1].split(' ');
    splitName[2] = 'Elsharawy';
    input[1] = splitName.join(' ');
;
    input[2] = 'Provinsi ' + input[2];
    input.splice(4, 0, 'Pria');
    input.splice(5,1, 'SMA Internasional Metro');

    let splitTanggal = input[3].toString().split('/');
    let bulan;
    if(splitTanggal[1] === '05'){
        bulan = 'Mei';
    }

    let ubahTanggal = input[3].split('/');
    let temp = ubahTanggal[0];
    ubahTanggal[0] = ubahTanggal[2];
    ubahTanggal.splice(1, 0, temp);
    ubahTanggal.pop();

    let array15Character = input.map((huruf) => huruf.substr(0, 15));
    let nama15Character = array15Character[1];

    let tanggalString = input[3].split('/');
    let tanggal = tanggalString.join('-');
    

    console.log(input);
    console.log(bulan);
    console.log(ubahTanggal);
    console.log(tanggal);
    console.log(nama15Character);
}

dataHandling(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */