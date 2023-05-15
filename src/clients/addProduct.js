import axios from 'axios';

const url = 'http://localhost:8080';

const addProduct = async () => {
    try {
        setInterval(async () => {
            const response = await axios.post(`${url}/api/productos`, {
                nombre: "cartuchera",
                precio: 970,
                imagen: "url"
            });
            console.log(response.data)
        }, 8000)
    } catch (error) {
        console.log(error)
    }
}

addProduct()