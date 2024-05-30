import { expect, test, afterAll } from "bun:test";
import { contarClientes, contarProductos, selectWhere } from "./index";


test("contar los clientes", () => {
    // act
    const numeroClientes = contarClientes();
    // assert
    expect(numeroClientes).toBe(91);
})

test("contar los productos", () => {
    // act
    const numeroClientes = contarProductos();
    // assert
    expect(numeroClientes).toBe(91);
})

test("nombre de clientes de USA", () => {
    // act
    const numeroClientes = selectWhere ();
    // assert
    expect(numeroClientes).toBe(13);
})

test("nombre de clientes de USA", () => {
    // arrange
     

    // act
    const numeroClientes = selectWhere ();
    // assert
    expect(numeroClientes).toBe(13);
})



