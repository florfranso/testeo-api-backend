import supertest from "supertest";
import chai from "chai";
import { app } from '../server.js';
import { ProductModel } from "../daos/dbModels/product.model.js"


const request = supertest(app);
const expect = chai.expect;

describe("api product test", function () {
    this.timeout(0)
    before(function () {

        console.log("Before: Este codigo se ejecuta antes de todas las pruebas");
    });

    beforeEach(function () {
        console.log("beforeEach: este codigo se ejecuta antes de cada prueba")
    })

    after(function () {
        console.log("After: Este codigo se ejecuta al final de todas las pruebas");
    });

    afterEach(async function () {
        console.log("afterEach: este codigo se ejecuta al finalizar cada prueba")
        await ProductModel.deleteMany({});
    })

    it("get productos test", async function () {
        console.log("primera prueba")
        const response = await request.get("/api/productos")
        expect(response.status).to.equal(200);
        expect(response.body).to.deep.equal([])
    })

    it("despues de crear un producto deberia haber un array con un producto", async function () {
        console.log("segunda prueba")
        const newObject = {
            title: "cuaderno",
            price: 1600,
            thumbnail: "url"
        }
        const response = await request.post("/api/productos").send(newObject);
        expect(response.status).to.equal(200);
        const datosArray = await request.get("/api/productos");
        expect(datosArray.body.length).to.equal(1)
    });

    it("despues de crear un producto este deberia tener un nombre", async function () {
        console.log("tercera prueba")
        const newObject = {
            title: "cuaderno",
            price: 1600,
            thumbnail: "url"
        }
        const response = await request.post("/api/productos").send(newObject);
        expect(response.status).to.equal(200);
        expect(response.body.nuevoProducto).to.haveOwnProperty("nombre")
    });

    it("despues de crear un productos se puede borrar con id", async function () {
        console.log("cuarta prueba")
        const newObject = {
            nombre: "tintero",
            precio: 1600,
            imagen: "url"
        }
        const response = await request.post("/api/productos").send(newObject);
        expect(response.status).to.equal(200);
        const producto = await request.get("/api/productos/1")
        const productoId = producto.body.id
        const deleteProduct = await request.delete(`/api/productos/${productoId}`)
        expect(deleteProduct.status).to.equal(200);
    });
})