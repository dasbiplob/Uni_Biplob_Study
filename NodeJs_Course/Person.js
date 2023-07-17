class Person{
    constructor(name, age){

        this.name=name;
        this.age=age;
    }
    greetings(){
        console.log(`My Name ${this.name} and I am ${this.age}`)
    }
}

module.exports=Person;
