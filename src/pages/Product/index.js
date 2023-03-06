import React,{useState} from "react"
import { getProduct } from "../../api/Products";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import styles from "./product.module.scss"


const Product = () =>{
    
    const params = useParams();
    const [product, setProduct]  = useState();
    
    const onGetProduct = async () => {
        const response = await getProduct(params.id);

        if(response.status ===200){
            setProduct(response.data);
        }
    };

    // MEMO: Optional Chaining !! 
   // console.log({product, params},product?.id);
    
    useEffect(()=>{
        if(!params.id){
            return;
        }
        onGetProduct();
    },[params.id]);

    
    return(
    <main className={styles.wrapper} >
        <section>
            <h1 >{product?.brand}</h1>
            <p >{product?.category}</p>
            <p >{`PRICE: ${product?.price}$`}</p>
            <p >{`DISCOUNT: ${product?.discountPercentage}%`}</p>
        </section>
    </main>
    )
}
export default Product;