import { mensaje } from "./string"

/**
 * Grupo de pruebas a ejecutar
 */
describe( 'Pruebas de string', () => {
  /**
   * La prueba en si
   */
  it('Debe de regresar un string', () => {
    const respuesta = mensaje('Carlos Julio');
    /**
     * Indica que es lo esperado de la prueba
     * NOTA: Pueden haber multiples expect
     */
    // La siguiente linea realiza la misma comparativa de mejor manera o manera correcta
    // expect( typeof respuesta === 'string'); 
    expect( typeof respuesta).toBe('string');
  })

  it('Debe de regresar un saludo con el nombre enviado', () => {
    const respuesta = mensaje('Carlos Julio');
    /**
     * Con la siguiente linea se valida que la respuesta sea exactamente la frase indicada
     */
    expect( respuesta).toBe('Saludos Carlos Julio');
  })

  it('Debe de regresar un saludo con el nombre enviado INCLUIDO', () => {
    const nombre = 'Pedro'
    const respuesta = mensaje(nombre);
    /**
     * Con la siguiente linea se valida que la respuesta contenga el nombre enviado
     */
    expect( respuesta ).toContain(nombre);
  })
})