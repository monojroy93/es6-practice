class Parent{
    constructor(){
        this.fatherName= 'rohim  allom'
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;        
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child('riya');
const baby2= new Child('tom');
console.log(baby.getFullName());
console.log(baby2.getFullName());