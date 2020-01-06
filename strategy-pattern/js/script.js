/**
 * A função principal tem um objeto global que receberá uma instancia de outro.
 * Este outro terá um método em comúm use(). A diferença deste design pattern
 * para o polimorfismo é que no caso do polimorfismo, a classe usará herdará
 * a outra estaticamente, já neste, a instancia da classe é passada por
 * parâmetro por meio de um método set e em seguida ela fica disponível
 * para ser usada dentro de um método.
 * 
 * Percebe-se que neste caso não tem herança de classes.
 */
const Player = function() {
  weapon = {}; // o recipiente para a instancia da outra classe

  const getWeapon = function() {
    return weapon;
  }

  const setWeapon = function(_weapon) {
    weapon = _weapon;
  }

  const attack = function() {
    weapon.use(); // esse método precisa estar presente na instancia da classe
  }

  return { // colocando os métodos públicos
    getWeapon,
    setWeapon,
    attack
  };
}

const Sword = function() {
  const use = function() { // este método é necessário
    console.log("Using Sword ⚔️");
  }

  return {
    use // colocando o métdo público
  };
}

const Knife = function() {
  const use = function() { // este método é necessário
    console.log("Using Knife 🔪");
  }

  return {
    use // colocando o métdo público
  };
}

const player = new Player(); // instanciando um novo player

player.setWeapon(new Knife); // injetando a classe Knife dentro do objeto player

// player.setWeapon(new Sword);

player.attack(); // usando a Knife, caso fosse a Sword ele a usaria no lugar