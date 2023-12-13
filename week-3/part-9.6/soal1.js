function changeMe(arr) {
    // you can only write your code here!
    let data = [];
    let age;

    for(let i = 0; i < arr.length;i++){
        let firstName = arr[i][0];
        let lastName = arr[i][1];
        let gender = arr[i][2];
        let birthYear = arr[i][3];

        if(birthYear !== undefined){
            age = 2023 - birthYear;
        }else{
            age = 'Invalid Birth Year';
        }

        let myObj = {
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            age: age
        }
        data.push(myObj);
        console.log(`${firstName}${lastName} `);
        console.log(data)
    }

    if(data.length === 0){
        console.log('" "')
    }
    
    
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // Christ Evans: { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 41 } 2023 - 1982 = 41 kan yak wkwk
  // Robert Downey: { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  
  changeMe([]); // ""