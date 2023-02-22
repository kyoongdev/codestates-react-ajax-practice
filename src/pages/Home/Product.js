import React from "react";
import styles from "./product.module.scss";

const Product = ({ product }) => {
  return (
    <li className={styles.wrapper}>
      <img src={product.thumbnail} alt="" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </li>
  );
};

export default Product;
