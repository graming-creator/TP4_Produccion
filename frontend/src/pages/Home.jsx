import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { getAllProducts } from "../services/api";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchingProducts = async () => {
            const data = await getAllProducts();
            setProducts(data);
        };
        fetchingProducts();
    }, []);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="hero is-primary is-bold">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title">Bienvenido a nuestra tienda</h1>
                        <h2 className="subtitle">Explora nuestros productos exclusivos</h2>
                    </div>
                </div>
            </section>

            {/* Product List */}
            <section className="section">
                <div className="container">
                    <h2 className="title has-text-centered mb-5">Nuestros Productos</h2>
                    {products.length > 0 ? (
                        <div className="columns is-multiline">
                            {products.map((product) => (
                                <div key={product.id} className="column is-4">
                                    <div className="card">
                                        <div className="card-content">
                                            <h3 className="title is-5">{product.name}</h3>
                                            <p className="subtitle is-6">Precio: ${product.price}</p>
                                            <p className="content">{product.description}</p>
                                            <p className="has-text-weight-semibold">Stock: {product.stock}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="has-text-centered">Cargando productos...</p>
                    )}
                </div>
            </section>
        </Layout>
    );
};

export { Home };
