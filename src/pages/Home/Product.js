import styles from "./product.module.scss";

const Product = ({ product }) => {
  return (
    <li className={styles.wrap}>
      <div
        style={{ backgroundImage: `url(${product.thumbnail})` }}
        className={styles.img_box}
      >
        {/*<img src={product.thumbnail} alt="product thumbnail" />*/}
      </div>

      <header className={styles.header}>
        <h2>{product.title}</h2>
        <div>
          <div className={styles.etc}>⭐️ {product.rating}</div>
          <div className={styles.etc}>$ {product.price}</div>
        </div>
      </header>

      <p>{product.description}</p>
    </li>
  );
};

export default Product;
