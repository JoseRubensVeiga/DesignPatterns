function Singleton() {
    let instance;

    Singleton = function() {
        return instance;
    };
    Singleton.prototype = this;
    instance = new Singleton();
    instance.constructor = Singleton;

    instance.publicVariable = 'Public Variable';

    return instance;
}

const teste = new Singleton();
const teste2 = new Singleton();

console.log(teste);
console.log(teste2);
teste.publicVariable = "teste";
console.log(teste);
console.log(teste2);
