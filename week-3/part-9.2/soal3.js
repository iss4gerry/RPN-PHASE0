function cariMedian(arr) {
    let angkaUrut = [...arr].sort((a, b) => a - b);
    let index;

    if(arr.length % 2 !== 0){
            index = (arr.length + 1)/2;
            return angkaUrut[index - 1];
        }else{
            let nilai1 = arr.length / 2 - 1;
            let nilai2 = arr.length / 2;
            return (angkaUrut[nilai1] + angkaUrut[nilai2]) / 2;
        }
    }

  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5