import React,{useState} from "react"
import styles from "./product.module.scss"


const Product = ({product}) =>{

    const [clicked,setClicked] = useState(false);
    const onClickItem = () =>{
        setClicked(!clicked);
    }
    return(
    <li className={styles.wrapper} onClick={()=>{onClickItem()}}>
        {(!clicked ?
            <div>
                <img src={product.thumbnail}/>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
            </div>
        :
        <div className={styles.onClicked}>
            <h1>{product.brand}</h1>
            <p>{product.category}</p>
            <p>{`PRICE: ${product.price}$`}</p>
            <p>{`DISCOUNT: ${product.discountPercentage}%`}</p>
        </div>
        )}
       
    </li>
    )
}
export default Product;