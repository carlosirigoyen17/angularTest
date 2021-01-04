import { usuarioAutenticado } from "./booleans"

/**
 * Grupo de pruebas a ejecutar
 */
describe( 'Pruebas de booleans :: ', () => {
  /**
   * La prueba en si
   */
  it('Debe de regresar verdadero para usuario logueado', () => {
    const estado = usuarioAutenticado();
    expect( estado ).toBeTruthy();

    /**
     * Caso de ejemplo para el negado de algo puede ser con .not.
     */
  })

})