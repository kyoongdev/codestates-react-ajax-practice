import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../api/Products';

import styles from './productDetail.module.scss';

const ProductDetail = () => {
  const [product, setProduct] = useState();
  // 각 페이지에 어떤 param이 있는지 객체를 전달
  // 객체안에는 key(id), value(1,2,3...)이 들어있음
  // id라는 키는 라우터에서 명시됨 (:id)
  const {id} = useParams();

  const onGetProduct = async () => {
    const response = await getProduct(id);

    if(response.status === 200){
      setProduct(response.data);
      console.log(response)
    }
  }

  useEffect(()=>{
    if(!id) return;
    onGetProduct();
  }, [id]);

  return (
    <section className={styles.detailWrapper}>
      {/* 처음 들어오는 데이터는 undefinde일 수 있으니까 옵셔널체이닝 써줌 */}
      <div className={styles.wrapper}>
        <img src={product?.thumbnail} alt="product thumbnail" />
        <h2>{product?.title} </h2>
        <p className={styles.price}>
          ${product?.price}
          <span>{product?.discountPercentage}% Discount</span>
        </p>
        <p className={styles.description}>{product?.description}</p>
      </div>
    </section>
  );
}

export default ProductDetail;