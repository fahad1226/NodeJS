
class Person {

    constructor(name,age) {

        this.name = name;
        this.age = age;
    }

    greetings() {

        console.log(`hello my name is ${this.name} and i'm ${this.age } years old`)
    }

    goodMorning(name) {
        console.log(`Hello MRS ${name} Good Morning`)
    }
}


module.exports = Person;