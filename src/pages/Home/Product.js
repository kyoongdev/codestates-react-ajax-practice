import React,{useState} from "react"
import styles from "./product.module.scss"


const Product = ({product,onClick}) =>{
    return(
    <li className={styles.wrapper} onClick = {onClick}>
        <img src={product.thumbnail} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
    </li>
    )
}
export default Product;