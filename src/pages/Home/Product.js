import { useNavigate } from 'react-router-dom';

import styles from './product.module.scss'


const Product = ({product}) => {

  const navigate = useNavigate();

  const onClick = (path) => {
    return () => {
      navigate(path);
    };
  };

  return (
    <li className={styles.wrapper} onClick={onClick(`${product.id}`)}>
      <img src={product.thumbnail} alt="product thumbnail"></img>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </li>
  );
}

export default Product;