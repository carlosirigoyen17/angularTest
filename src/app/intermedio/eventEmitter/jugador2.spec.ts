import { Jugador2 } from './jugador2';
/*
 * Grupo de pruebas a ejecutar
 */
describe( 'Pruebas de Jugador 2 :: ', () => {

  // const jugador = new Jugador();
  let jugador: Jugador2;

  /**
   * Ciclo de las pruebas
   */

    // Antes de que todas las pruebas
    beforeAll(() => {});

    // Antes de que cada una las pruebas
    beforeEach(() => {
      // jugador.hp = 100;
      // O aplicar el new nuevamente pero cambiando a LET la declaracion de la variable
      jugador = new Jugador2();
    });

    // Despues de que cada una las pruebas
    afterAll(() => {});

    // Despues de que cada una las pruebas
    afterEach(() => {});

  /**
   * FIN Ciclo de las pruebas
   */

  /**
   * La prueba en si
   */
  it('Debe retornar un evento cuando recibe daño si es mayor o igual a 100 el resultado es 0', () => {

    let nuevoHp = 0;
    /**
     * De esta manera a pesar de ser asincrono el espera a que se resuelva para continuar 
     * con la linea de jugador recibeDano
     */
    jugador.hpCambia.subscribe( (hp: number) => {
      nuevoHp = hp;
    })

    jugador.recibeDano(1000);
    expect(nuevoHp).toBe(0);
  })

  it('Debe retornar el resto de vida con el evento emitido', () => {
    let nuevoHp = 0;
    /**
     * De esta manera a pesar de ser asincrono el espera a que se resuelva para continuar 
     * con la linea de jugador recibeDano
     */
    jugador.hpCambia.subscribe( (hp: number) => {
      nuevoHp = hp;
    })

    jugador.recibeDano(25);
    expect(nuevoHp).toBe(75);
  })

})