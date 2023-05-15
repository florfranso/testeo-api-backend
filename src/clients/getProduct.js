import axios from 'axios';

const url = "http://localhost:8080";

const getProduct = async () => {
    try {
        setInterval(async () => {
            const response = await axios.get(`${url}/api/productos`);
            console.log(response.data);
        }, 5000)
    } catch (error) {
        console.log(error)
    }
}

getProduct()