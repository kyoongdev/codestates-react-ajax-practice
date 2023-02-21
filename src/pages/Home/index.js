import React, { useState, useEffect } from "react";
import { getProducts } from "../../api/Products";
import Product from "./Product";

import s from "./home.module.scss"

const Home = ()=>{
    const [products, setProducts] = useState([]);

    const onGetProducts = async () => {
        const response = await getProducts();
    
        if (response.status === 200) {
          setProducts(response.data.products);
        }
      };
    
    useEffect(() => {
        onGetProducts();
    }, []);
    
    return(
        <main>
            <header className={s.header}>
                <h1 className={s.title}>home</h1>
            </header>
            <section>
                <ul>
                    {products.map((product)=>{
                        return <Product product={product}/>
                    })}
                </ul>
            </section>
        </main>
    );
}


export default Home;