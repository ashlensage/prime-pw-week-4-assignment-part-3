console.log('hello');


for(let i =0; i < 10; i++) {

}


function addIt(param1, param2) {
return param1 + param2;
//do the thing
}

let newNumber = addIt(2, 5);

console.log(addIt(2, 5));
console.log(newNumber);

console.log("new number plus one", newNumber + 1);


let secondNumber;

function doubleIt(param1) {
    secondNumber = param1 * 2
    return secondNumber;
}

doubleIt(0);

console.log(doubleIt(10));


// objects



// Strings, Numbers, Booleans, Array, Objects

let make = "Honda"
let model = "element"
let color = "black"

// object
let casieCar = {
    make: "honda", //property
    model: "element"
    color: "black",
    years: 2007,
    awesome:true,
    owners: ('someone', 'casie'),
};

console.log(casieCar);

let studentCar = {
    make : "Nissan",
    model: "Rouge",
    color: "white",
    years: 2016,
    awesome: true,
    owners: ('ariana grande', 'ashlen')
};

console.log(studentCar);

array[0];

function findNewCar(objectParam) {
    if(objectParam.owners.length === 0){
        return "this car has been driven";
    } else {
        return "this is not a new car";
    }    
}

console.log('casies car: ', findNewCar(casieCar));
console.log('student car: ', findNewCar(studentCar);


// property is made up of...
// key: value

function findAwesomeCar(carObject){
    if (carObject.awesome === true){ 
    return "this car is awesome";
    } else {
    return " this car is not awesome";
    }
//return "this car is awesome" if the car is awesome
// return "this car is not awesome"
}

console.log('casie car: 'findAwesomeCar(casiecar));
console.log('student car: 'findAwesomeCar(studentCar));



let penguins = [
    {
      name: 'Emperor',
      colors: ['Black', 'White', 'Yellow'],
      size: 1.0,
      isCute: true
    },
    {
      name: 'Little',
      colors: ['Slate-blue', 'White'],
      size: 0.5,
      isCute: true
    },
    {
      name: 'Rockhopper',
      colors: ['Black', 'White', 'Yellow'],
      size: 0.75,
      isCute: true
    },
    {
      name: 'African',
      colors: ['Black', 'White'],
      size: 0.5,
      isCute: true
    },
    {
      name: 'Gentoo',
      colors: ['Black', 'White'],
      size: 0.5,
      isCute: true
    },
    {
      name: 'Sea Gull',
      colors: ['Gray'],
      size: 0.25,
      isCute: false
    },
    {
      name: 'Chinstrap',
      colors: ['Black', 'White'],
      size: 0.25,
      isCute: true
    },
    {
      name: 'Macaroni',
      colors: ['Black', 'White', 'Yellow'],
      size: 0.5,
      isCute: true
    },
  ];
  
  
  
  
  
  
  
  
  
  
  
  Message lydian
  
  
  
  let penguins = [
    {
      name: 'Emperor',
      colors: ['Black', 'White', 'Yellow'],
      size: 1.0,
      isCute: true
    },
    {
      name: 'Little',
      colors: ['Slate-blue', 'White'],
      size: 0.5,
      isCute: true
    },
    {
      name: 'Rockhopper',
      colors: ['Black', 'White', 'Yellow'],
      size: 0.75,
      isCute: true
    },
    {
      name: 'African',
      colors: ['Black', 'White'],
      size: 0.5,
      isCute: true
    },
    {
      name: 'Gentoo',
      colors: ['Black', 'White'],
      size: 0.5,
      isCute: true
    },
    {
      name: 'Sea Gull',
      colors: ['Gray'],
      size: 0.25,
      isCute: false
    },
    {
      name: 'Chinstrap',
      colors: ['Black', 'White'],
      size: 0.25,
      isCute: true
    },
    {
      name: 'Macaroni',
      colors: ['Black', 'White', 'Yellow'],
      size: 0.5,
      isCute: true
    },
  ];
  
  
  
  
  
  
  
  
  
  
  
  Message lydian
  
  
  
  let penguins = [
    {
      name: 'Emperor',
      colors: ['Black', 'White', 'Yellow'],
      size: 1.0,
      isCute: true
    },
    {
      name: 'Little',
      colors: ['Slate-blue', 'White'],
      size: 0.5,
      isCute: true
    },
    {
      name: 'Rockhopper',
      colors: ['Black', 'White', 'Yellow'],
      size: 0.75,
      isCute: true
    },
    {
      name: 'African',
      colors: ['Black', 'White'],
      size: 0.5,
      isCute: true
    },
    {
      name: 'Gentoo',
      colors: ['Black', 'White'],
      size: 0.5,
      isCute: true
    },
    {
      name: 'Sea Gull',
      colors: ['Gray'],
      size: 0.25,
      isCute: false
    },
    {
      name: 'Chinstrap',
      colors: ['Black', 'White'],
      size: 0.25,
      isCute: true
    },
    {
      name: 'Macaroni',
      colors: ['Black', 'White', 'Yellow'],
      size: 0.5,
      isCute: true
    },
  ];
  
  
  
  
  
  
  
  
  
  
  
  Message lydian
  
  
  
console.log(penguins);

function findCuteSmolPenguins(penguinArray) {
    for(pizza of penguinArray){
        // but is it cute?
        if (penguinObject.isCute || penguinObject.size < .5){
            cuteIceburg.push(penguinObject);
    }
}
return cuteIceburg;
} 
console.log(findCuteSmolPenguins(penguins));