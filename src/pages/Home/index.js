import React, { useEffect } from "react";
import { getProducts } from "../../api/Products";
import {useState} from 'react';
import Product  from "./Product";
import styles from "./home.module.scss";


const Home = () =>{
    const [products, setProduct] = useState([]);
    const onGetProducts = async () =>{
        const response = await getProducts();
        if(response.status === 200){
            setProduct(response.data.products);
        }
    }
    useEffect(()=>{
        onGetProducts();
    },[])
    
    const productList = products.map((product)=>(<Product product = {product}/>));

    return(
        <main className={styles.wrapper}>
            <header className={styles.header}><h1>HOME</h1></header>
            <section className={styles.productsWrapper}>
                <ul>
                    { productList}
                </ul>
            </section>
        </main>
    )
}

export default Home;