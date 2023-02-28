import { useNavigate } from 'react-router-dom';

import styles from './product.module.scss'


const Product = ({product, onClick}) => {

  // const navigate = useNavigate();

  // const onClick = (path) => {
  //   return () => {
  //     navigate(path);
  //   };
  // };

  // onClick이 바로 들어갔으니 ()=>{} 이런 형태여야함
  return (
    <li className={styles.wrapper} onClick={onClick}>
      <img src={product.thumbnail} alt="product thumbnail"></img>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </li>
  );
}

export default Product;