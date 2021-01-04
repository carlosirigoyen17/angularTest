export class Jugador {
  hp: number;

  constructor() {
    this.hp = 100;
  }

  recibeDano( damage: number) {
    if (damage >= this.hp) {
       return this.hp = 0;
    } else {
      return this.hp += -damage;
    }
  }
}