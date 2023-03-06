import React, { useEffect } from "react";
import { getProducts, searchProduct } from "../../api/Products";
import {useState} from 'react';
import Product  from "./Product"; 
import styles from "./home.module.scss";
import { useNavigate } from "react-router-dom";


const Home = () =>{
    const navigate = useNavigate();
    const [searchText,setSearchText] = useState("");
    const [products, setProducts] = useState([]);
    
    const onGetProducts = async () =>{
        const response = await getProducts();
        //data 불러옴
        if(response.status === 200){
            setProducts(response.data.products);
        }
    };

        //렌더링 시 최초 한번  실행
        useEffect(()=>{
            onGetProducts();
        },[])
        
        const onNavigateDetail = (id) =>{
            return()=>{
                navigate(`/${id}`);
            }
        }
    const onChange = (e) => {
        const {value} = e.currentTarget;
        setSearchText(value);
    }

    const onSearch = async ()=>{
        //console.log(searchText);
        const response = await searchProduct({
            q:searchText,
        });

        console.log(response);
        if(response.status===200){
            setProducts(response.data.products);
        }
    };

    const onClear = ()=>{
        onGetProducts();
        setSearchText("");
    };

    const onLogin = () =>{
        navigate("auth/login");
    }
    const onRegister = () =>{
        navigate("auth/register");
    }


    //productList 맵핑 
    const productList = products.map((product)=>(
        <Product 
            key={product.id} 
            product = {product}
            onClick = {onNavigateDetail(product.id)}
        />
    ));

    return(
        <main className={styles.wrapper}>
            <header className={styles.header}>
                <h1>HOME</h1>
                <div className={styles.navWrapper}>
                    <div className={styles.inputWrapper}>
                        <input name="searchText" value={searchText} placeholder="검색어를 입력하세요." onChange={onChange}></input>
                        <button type="button" onClick={onSearch}>search</button>
                        <button type="button" onClick={onClear}>reset</button>
                    </div>
                    <div className={styles.loginWrapper}>
                        <button type="button" onClick={onLogin}>Login</button>
                        <button type="button" onClick={onRegister}>Register</button> 
                    </div>
                </div>
            </header>
            <section className={styles.productsWrapper}>
                <ul>
                    {productList}
                </ul>
            </section>
        </main>
    )
}

export default Home;