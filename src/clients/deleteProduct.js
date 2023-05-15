import axios from 'axios';

const url = "http://localhost:8080";

const deleteProduct = async () => {
    try {
        setInterval(async () => {
            const arrayLength = await axios.get(`${url}/api/productos`)
            const lastId = arrayLength.data.length
            await axios.delete(`${url}/api/productos/${lastId}`)
            console.log("producto borrado")
        }, 8000);
    } catch (error) {
        console.log(error)
    }
}

deleteProduct()