const personFactory = function() {
    /**
     * Uma função fábrica, retorna um objeto de um determinado formato.
     * Ela pode usar os parâmetros ou não.
     */
    const createPerson = function(name, age) {
        return {
            name,
            age,
            walk() {
                console.log(`${this.name} está andando`);
            },
            sleep() {
                console.log(`${this.name} está dormindo`);
            },
            birth() {
                console.log(`Parabéns, agora ${this.name} tem ${++this.age} anos!`);
            }
        };
    };

    /**
     * Também é uma função fábrica, mas usa um parâmetro de objeto
     * ao invés de parâmetros passados por vírgula.
     * Esse método é mais recomendado, pois ajuda na criação de parâmetros opcionais
     * e é mais legível quando chamado
     * 
     * @param {name, age} 
     */
    const createPerson2 = function({name, age}) {
        if(age == undefined || age == null || age == "") {
             // se a variável age for undefined, null, 0 ou vazia, atribua a ela o valor 20
            age = 20;
        }
            
        return {
            getName() {
                return name;
            },
            getAge() {
                return age;
            },
            walk() {
                console.log(`${name} está andando`);
            },
            sleep() {
                console.log(`${name} está dormindo`);
            },
            birth() {
                console.log(`Parabéns, agora ${name} tem ${++age} anos!`);
            }
        };
    }

    /**
     * Expondo os atributos públicos
     * Neste caso um método que cria um objeto Pessoa
     */
    return {
        createPerson,
        createPerson2
    };
}

const factory = new personFactory();

const person1 = factory.createPerson('José', 21);

const person2 = factory.createPerson2({
    name: "José2",
    age: 30
});
