import React, { useState, useEffect } from "react";
import { getProducts, searchProduct } from "../../api/Products";
import Product from "./Product";
import styles from "./home.module.scss"
import { useNavigate, Link } from "react-router-dom";

const Home = ()=>{
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [searchText, setSearchText] = useState('');
    const onGetProducts = async () => {
        const response = await getProducts();
    
        if (response.status === 200) {
          setProducts(response.data.products);
        }
    };
    
    useEffect(() => {
        onGetProducts();
    }, []);
    
    const changeSearchText = (e)=>{
        //input에 들어간 문자열을 받아서 products 변수 변경
        const { value } = e.currentTarget;
        setSearchText(value);
    }

    const onSearch = async () =>{
        const response = await searchProduct({
            q: searchText,

        });
        if(response.status===200){
            setProducts(response.data.products);
            console.log(products);
        }
        
    }
    const onClear =()=>{
        setSearchText('');
        onGetProducts();
    }

    const onNavigateDetail=(id)=>{
        return()=>{
            navigate(`/${id}`);
        };
    }
    return(
        <main>
            <header className={styles.header}>
                <p className={styles.title}>Home</p>
                <div className={styles.inputContainer}>
                    <input type="text" value={searchText} onChange={changeSearchText} />
                    <button type="button" onClick={onSearch}>검색</button>
                    <button type="button" onClick={onClear} >초기화</button>
                    <Link to='/auth/login'><button type="button" className={styles.loginButton}>
                        LOGIN</button></Link>
                </div>
            </header>
            <section >
                <ul>
                    {products.map((product)=>{
                        return <Product key={product.id} product={product} 
                        onClick={onNavigateDetail(product.id)}
                        />
                    })}
                </ul>
            </section>
            
        </main>
    );
}


export default Home;