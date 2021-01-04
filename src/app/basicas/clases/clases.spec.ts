import { Jugador } from './clases';
/*
 * Grupo de pruebas a ejecutar
 */
describe( 'Pruebas de clases :: ', () => {

  // const jugador = new Jugador();
  let jugador = new Jugador();

  /**
   * Ciclo de las pruebas
   */

    // Antes de que todas las pruebas
    beforeAll(() => {});

    // Antes de que cada una las pruebas
    beforeEach(() => {
      // jugador.hp = 100;
      // O aplicar el new nuevamente pero cambiando a LET la declaracion de la variable
      jugador = new Jugador();
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
  it('Debe retornar 20 de HP si recibe 80 HP de daño el jugador', () => {
    // Para no repetir la declaracion se puede colocar dentro del describe
    // const jugador = new Jugador();
    const vida = jugador.recibeDano(80)
    expect( vida ).toEqual(20);

    /**
     * Caso de ejemplo para el negado de algo puede ser con .not.
     */
  })

  it('Debe retornar 0 de HP si recibe 100 o mas de HP de daño el jugador', () => {
    // Para no repetir la declaracion se puede colocar dentro del describe
    // const jugador = new Jugador();
    const vida = jugador.recibeDano(100)
    expect( vida ).toEqual(0);

    /**
     * Caso de ejemplo para el negado de algo puede ser con .not.
     */
  })

})