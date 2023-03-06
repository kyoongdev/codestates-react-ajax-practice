import React from "react";
import styles from "./login.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginApi} from "../../../api/Auth";

const Login = () =>{
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email:"",
        password:"",
    });
    
    const onChange = (e) =>{
        const {name, value} = e.currentTarget;
        setForm({
            ...form,
            [name] : value,          
        });
    };
    /*const onClick = (e) => {
        console.log(form);
        
        setForm({
            email:"",
            password:"",
        });
    }*/
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(e);
        const response = await loginApi({
            email:form.email,
            password:form.password,
        })
        
        if(response.status === 200){
            console.log(response.data);
            alert("로그인완료!");
            navigate("/");
        }else{
            alert("로그인실패!");
        }
    }

    
    
    return(
        <main className={styles.wrapper}>
            <section className={styles.loginWrapper}>
                <form className={styles.loginForm} id="loginForm" onSubmit = {onSubmit}>
                    <h1>LOGIN</h1>
                    <div className={styles.inputWrapper}>
                        <input 
                        name="email" 
                        value={form.userId} 
                        placeholder="이메일"
                        onChange={onChange}/>
            
                        <input 
                        name="password" 
                        value={form.password} 
                        type="password" 
                        placeholder="비밀번호"
                        onChange={onChange}/>
                    </div>
                    <button className={styles.submitButton} type="submit" form="loginForm" >로그인</button>
                </form>
            </section>
        </main>
    );
}

export default Login;