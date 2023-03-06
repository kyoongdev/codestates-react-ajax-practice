import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProduct } from '../../api/Products';
import styles from "./detail.module.scss"

const Detail = () => {
  const [product, setProduct] = useState();
  const params = useParams();
  //console.log(params);
  const onGetProduct = async()=>{
    const response = await getProduct(params.id);
    //console.log(response);
    if(response.status ===200){
      
      setProduct(response.data);
    }
  }
  //Optional Chaining : null 혹은 undefined 일 수 있는 객체의 property에 접근할 때 사용
 // console.log({product},product?.id);
//params.id에서 id는 path variable / router 에서 설정 /:id
  useEffect(()=>{
    if(!params.id){return}
    onGetProduct();
  },[params?.id]);

  return (
    <main>
      <header className={styles.header}>
        <p className={styles.title}>{product?.title}</p>
        <Link to="/">
          <button type='button' className={styles.button}>Home         
          </button>
        </Link>
      </header>
      <section >
        <img src={product?.thumbnail} alt="물건 이미지"/>
        <div className={styles.description}>{product?.description}</div>
      </section>
    </main>
  );
};

export default Detail;