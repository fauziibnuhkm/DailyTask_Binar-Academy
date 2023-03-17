const person = [
    
    {
      "_id": "640b3d98dddf80a942fe2608",
      "isActive": false,
      "age": 34,
      "eyeColor": "blue",
      "name": "Webster Romero",
      "gender": "male",
      "favoriteFruit": "banana"
    },
    {
      "_id": "640b3d98abc5209f4f502d2d",
      "isActive": true,
      "age": 26,
      "eyeColor": "blue",
      "name": "Greer Webster",
      "gender": "male",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640b3d98d208eb85cbe6ad06",
      "isActive": true,
      "age": 26,
      "eyeColor": "brown",
      "name": "Angel Gordon",
      "gender": "female",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3d988df5e70d2845266c",
      "isActive": true,
      "age": 38,
      "eyeColor": "blue",
      "name": "Evans Henry",
      "gender": "male",
      "favoriteFruit": "banana"
    },
    {
      "_id": "640b3d989f809a4e34cfe446",
      "isActive": false,
      "age": 40,
      "eyeColor": "blue",
      "name": "Eliza Barnes",
      "gender": "female",
      "favoriteFruit": "banana"
    },
    {
      "_id": "640b3d989c22d40377b2fb9f",
      "isActive": false,
      "age": 22,
      "eyeColor": "brown",
      "name": "Ada Lambert",
      "gender": "female",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3d98f96a759c7204cbf0",
      "isActive": true,
      "age": 22,
      "eyeColor": "brown",
      "name": "Kristy Blackburn",
      "gender": "female",
      "favoriteFruit": "banana"
    },
    {
      "_id": "640b3d98de0b15c4387baa02",
      "isActive": false,
      "age": 34,
      "eyeColor": "brown",
      "name": "Katina Barnett",
      "gender": "female",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3d9890fc1131997c18a1",
      "isActive": false,
      "age": 31,
      "eyeColor": "brown",
      "name": "Blevins Little",
      "gender": "male",
      "favoriteFruit": "banana"
    },
    {
      "_id": "640b3d988646656f94121f20",
      "isActive": false,
      "age": 27,
      "eyeColor": "blue",
      "name": "Yvette Marks",
      "gender": "female",
      "favoriteFruit": "apple"
    }
  ]

  console.log("==================== Soal No 1 ====================")
  console.log("PRINT PERSON YANG SUKA BUAH APPLE DAN WARNA MATA NYA BLUE")
  console.log(" ")
  for (i = 0; i < person.length; i++) {
          if (person[i].favoriteFruit === "apple" && person[i].eyeColor === "blue")
          console.log(person[i].name)        
  }
  
  console.log("==================== Soal No 2 ====================")
  console.log("PRINT BEBERAPAN PERSON YANG AGE NYA LEBIH DARI 30!")
  console.log(" ")
  for (i = 0; i < person.length; i++) {
    if (person[i].age > 30 )
    console.log(person[i].name)        
  }
  
  console.log("==================== Soal No 3 ====================")
  console.log("PRIN PERSON YANG isActive : true and gender : female")
  console.log(" ")
  for (i = 0; i < person.length; i++) {
    if (person[i].isActive == true && person[i].gender == "female")
    console.log(person[i].name)   
  }
  
  console.log("==================== Soal No 4 ====================")
  console.log("PRINT YANG AGE NYA DIATAS 30 ATAU DIBAWAH 25 DAN eyeColor : blue!")
  console.log(" ")
  for (i = 0; i < person.length; i++) {
    if (person[i].age > 30 || person[i].age < 25 && person[i].eyeColor === "blue")
    console.log(person[i])
  }
  
  
  
  console.log("==================== Soal No 5 ====================")
  console.log("PRINT PERSON YANG MENGANDUNG HURUF 'W' DI NAMA NYA!")
  console.log(" ")
  for (i = 0; i < person.length; i++){
    if (person[i].name.includes('w') || person[i].name.includes('W')){
      console.table(person[i].name);
    }
  }
  
  console.log("==================== Soal No 6 ====================")
  console.log("PRINT PERSON isActive false and gender : male dan age : diatas 25")
  console.log(" ")
  for(let i = 0; i < person.length; i++){
    if (person[i].isActive === false && person[i].gender === "male" && person[i].age > 25 ){
        console.log(person[i])
    }
  }
  
  console.log("==================== Soal No 7 ====================")
  /console.log("PRINT PERSON AGE NYA DIBAWAH 30 ATAU eyeColor : brown and favoritFruit : banana")
  console.log(" ")
  for(let i = 0; i < person.length; i++){
    if ((person[i].age < 30 || person[i].eyeColor === "brown") && person[i].favoriteFruit === "banana" ){
        console.log(person[i])
    }
  }
  
  console.log("==================== Soal No 8 ====================")
  console.log("PRINT PERSON GENDER MALE!")
  console.log(" ")
  for(let i = 0; i < person.length; i++){
    if (person[i].gender === "male" ){
        console.log(person[i])
    }
  }
  
  console.log("==================== Soal No 9 ====================")
  console.log("PRINT PERSON eyeColor BLUE")
  console.log(" ")
  for(let i = 0; i < person.length; i++){
    if (person[i].eyeColor === "blue" ){
        console.log(person[i])
    }
  }
  
  console.log("==================== Soal No 10 ====================")
  console.log("PRINT PERSON AGE DIATAS 30!")
  console.log(" ")
  for(let i = 0; i < person.length; i++){
    if (person[i].age > 30 ){
        console.log(person[i])
    }
  }