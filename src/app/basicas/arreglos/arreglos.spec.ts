import { obtenerRobots } from './arreglos';


/**
 * Grupo de pruebas a ejecutar
 */
describe( 'Pruebas de Arreglos :: ', () => {
  /**
   * La prueba en si
   */
  it('Debe de regresar al menos 3 elementos', () => {
    const resp = obtenerRobots();

    // expect( resp ).toHaveSize(3);
    // expect( resp.length ).toBe(3);
    /**
     * Se espera que sea igual o mayor que 3
     */
    expect( resp.length ).toBeGreaterThanOrEqual(3);

    /**
     * Caso de ejemplo para el negado de algo puede ser con .not.
     */
  })

  it('Debe de existir Megaman y Ultron', () => {
    const resp = obtenerRobots();

    /**
     * Se espera que sea igual o mayor que 3
     */
    expect( resp ).toContain('Megaman');
    expect( resp ).toContain('Ultron');

    /**
     * Caso de ejemplo para el negado de algo puede ser con .not.
     */
  })

})