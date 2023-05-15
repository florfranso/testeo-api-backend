import axios from 'axios';

const url = "http://localhost:8080";

const updateProduct = async () => {
    try {
        setInterval(async () => {
            const arrayLength = await axios.get(`${url}/api/productos`)
            const lastId = arrayLength.data.length
            const response = await axios.put(`${url}/api/productos/${lastId}`, {
                nombre: "pizarron",
                precio: 18000,
                imagen: "url"
            })
            console.log(response.data);
        }, 8000);
    } catch (error) {
        console.log(error);
    }
}

updateProduct()