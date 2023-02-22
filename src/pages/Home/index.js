import React, { useEffect, useState } from "react";
import { getProducts } from "../../api/Products";

import styles from "./home.module.scss";
import Product from "./Product";

const Home = () => {
  const [products, setProducts] = useState([]);

  const onGetProducts = async () => {
    const reponse = await getProducts();

    if (reponse.status === 200) {
      setProducts(reponse.data.products);
    }
  };

  useEffect(() => {
    onGetProducts();
  }, []);

  return (
    <main className={styles.wrapper}>
      <header className={styles.header}>
        <h1>Home</h1>
      </header>
      <section className={styles.productsWrapper}>
        <ul>
          {products.map((product) => {
            return <Product product={product} />;
          })}
        </ul>
      </section>
    </main>
  );
};

export default Home;
