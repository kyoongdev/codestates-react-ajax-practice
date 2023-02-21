import { useEffect, useState } from "react";
import { getProducts } from "../../api/Products";
import styles from "./home.module.scss";
import Product from "./Product";

const Home = () => {
  const [products, setProducts] = useState([]);

  const getItems = async () => {
    const response = await getProducts();
    console.log(response.data.products);

    if (response.status === 200) {
      setProducts(response.data.products);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <main className={styles.wrap}>
      <header className={styles.header}>COOL PRODUCTS✨</header>
      <ul className={styles.items}>
        {products.map((product) => {
          return (
            <Product product={product} key={`${product.brand}${product.id}`} />
          );
        })}
      </ul>
    </main>
  );
};

export default Home;
