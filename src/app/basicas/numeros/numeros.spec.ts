import { incrementar } from './numeros';

/**
 * Grupo de pruebas a ejecutar
 */
describe( 'Pruebas de numeros :: ', () => {
  /**
   * La prueba en si
   */
  it('Debe de regresar un numero', () => {
    const respuesta = incrementar(10);
    expect( typeof respuesta).toBe('number');
  })

  it('Debe de regresar 100 si el numero es mayor a 100', () => {
    const respuesta = incrementar(101);

    expect( respuesta ).toBe(100);
    expect( respuesta ).toEqual(100);
  })

  it('Debe de regresar el valor si es menor o igual a 100', () => {
    const valor = 99
    const respuesta = incrementar(valor);
    
    expect( respuesta ).toBe(valor + 1);
    expect( respuesta ).toEqual(valor + 1);
  })
})