/**
 * Neste design patter há um "template" de objeto que será herdado pelo outros
 * É muito similar a herança na orientação a objetos
 */
const chair = {
    material: 'wood',
    numberOfLegs: 4
};

/**
 * Por meio da função create do Object podemos fazer essa ligação entre dois objetos
 * Na linha abaixo o objeto "myFirstObject" está herdando as características do objeto "chair"
 */
const myFirstChair = Object.create(chair);

/**
 * Em um console.log normal os atributos herdados não são revelados
 * Para mostrálos seria necessário criar um for para percorrer esse objeto
 */
console.log(myFirstChair); // vazio

/**
 * Deste modo, conseguimos acessar as propriedades herdadas
 */
for(key in myFirstChair) {
    const property = myFirstChair[key];
    console.log(`Na posição "${key}" está o valor "${property}"`);
}

/**
 * Conseguimos também, obtêlas referenciando as propriedade "__proto__" no objeto herdeiro
 */
console.log(myFirstChair.__proto__);

/**
 * Podemos inserir novos atributos ao fazer a herança 
 * A sintaxe está abaixo
 * Estes sim serão mostrando no console.log
 */
const mySecondChair = Object.create(chair, {
    owner: {
        value: "José"
    } 
});

console.log(mySecondChair) // {owner: "José"}

/**
 * É possível também, associar uma herança a um objeto já criado.
 * Para isso, basta atribuir o objeto Pai no atributo __proto__ do objeto filho
 * Como abaixo
 */
myThirdChair = {
    color: 'brown'
};
myThirdChair.__proto__ = chair;

/**
 * E para exibir os atributos herdados
 * Vale a mesma regra dita anteriormente
 */
for(key in myThirdChair) {
    const property = myThirdChair[key];
    console.log(`Na posição "${key}" está o valor "${property}"`);
}