import React, { useEffect, useState } from 'react';
import { getProducts, searchProduct } from '../../api/Products';
import Product from './Product';
import { useNavigate } from 'react-router-dom';

import styles from './home.module.scss'
import loginButton from '../../assets/icons/enter.png';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState([]);
  
  const navigate = useNavigate();

  //id값을 받아서 path variable로 사용하는 함수
  const onNavigateDetail = (id) => {
    return () => {
      // navigate를 할 때는 /가 있어야함
      navigate(`/${id}`)
    }
  }

  const onGetProducts = async () => {
    const response = await getProducts();

    if(response.status === 200){
      //console.log(response)
      setProducts(response.data.products);
    }
  }

  const onSearch = async() => {
    const response = await searchProduct({
      q: searchText,
    });

    if(response.status === 200){
      setProducts(response.data.products);
    }
  }

  const onClear = () => {
    onGetProducts();
    setSearchText("");
  }

  const onChange = async(e) => {
    const {value} = e.currentTarget;
    setSearchText(value);
  }

  useEffect(()=>{
    onGetProducts();
  }, []);

  return (
    <main className={styles.wrapper}>
      <header className={styles.header}>
        <h1>Home</h1>
        <div className={styles.searchWrapper}>
          <input type='text' name='searchText' value={searchText} onChange={onChange} />
          <button type='button' onClick={onSearch}>search</button>
          <button type='button' onClick={onClear}>reset</button>
          <button type='button' className={styles.loginBtn} onClick={onNavigateDetail("auth")}>
            <img src={loginButton} alt='login button' />
          </button>
        </div>
      </header>
      <section className={styles.productsWrapper}>
        <ul>
          {products.map((product) => {
            return <Product key={product.id} product={product} onClick={onNavigateDetail(product.id)} />;
          })}
        </ul>
      </section>
    </main>
  );
}

export default Home;