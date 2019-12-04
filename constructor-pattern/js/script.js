const Pessoa = function(nome, idade) {
    /**
     * É uma boa prática iniciar as variáveis privadas com underline
     */
    let _nome = nome;
    let _idade = idade;

    const andar = function() {
        console.log(`${_nome} está andando`);
    }

    const dormir = function() {
        console.log(`${_nome} está dormindo`);
    }

    const aniversario = function() {
        console.log(`Parabéns agora ${_nome} tem ${++_idade} anos`);
    }

    /**
     * Expondo os atributos públicos
     * Neste caso apenas duas funções
     * Ou seja, os atributos nome e idade são privados e só podem ser acessados por meio dos métodos
     */
    return {
        andar,
        dormir,
        aniversario
    };
}

// Instanciando um novo objeto com a função construtora
const pessoa1 = new Pessoa("José", 21);