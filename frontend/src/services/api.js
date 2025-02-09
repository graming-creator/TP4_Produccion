import axios from "axios";

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000/api/products"
// Obtener productos
const getAllProducts = async () => {
    try {
        const response = await axios.get(URL);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

// Crear producto
const createProduct = async (product) => {
    try {
        const response = await axios.post(URL, product);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

// Modificar producto
const updateProduct = async (productId, updatedProduct) => {
    try {
        const response = await axios.patch(`${URL}/${productId}`, updatedProduct);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

// Borrar producto
const deleteProduct = async (productId) => {
    try {
        await axios.delete(`${URL}/${productId}`);
    } catch (error) {
        console.error(error);
    }
};

export { getAllProducts, createProduct, updateProduct, deleteProduct };
