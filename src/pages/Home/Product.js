import React from "react";
import styles from "./product.module.scss";

const Product = ({product})=>{
    return(
        <li className={styles.wrapper}>
            <img src={product.thumbnail} alt="물건 이미지"/>
            <h2>{product.title}</h2>
        </li>
    )
}

export default Product;