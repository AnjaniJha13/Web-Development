let obj ={
    a: 1,
    b: "Lallu"
}

console.log(obj)

let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

rabbit._proto_ = animal; // sets rabbit.[[Prototype]] = animal

//rabbit
//rabbit.eats
//Prototype: Adding a program into an object

class Animal{               //constructor
    constructor(name){             
        this.name = name
        console.log("Object is created...")
    }

    eats(){
        console.log("Eating")    //a.eats
    }

    jumps(){
        console.log("Jumping")   //a.jumps
    }
}

class Lion extends Animal{   //Establishing inheritance using extends instead of public(C++)
   constructor(name){
    super(name)
    this.name = name
    console.log("Object is created and he is a lion...")
   } 

   eats(){
    console.log("Eating and Roaring")  //overriding
   }
}

let a = new Animal("Bunny");
console.log(a)

let b = new Lion("Sher");
console.log(b)
