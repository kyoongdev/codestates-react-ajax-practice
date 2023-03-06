import React from "react";
import styles from "./login.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () =>{
    const navigate = useNavigate();
    const [form, setForm] = useState({
        userId:"",
        password:"",
    });
    
    const onChange = (e) =>{
        const {name, value} = e.currentTarget;
        setForm({
            ...form,
            [name] : value,          
        });
    };
    const onClick = (e) => {
        console.log(form);
        setForm({
            userId:"",
            password:"",
        });
    }
    
    return(
        <main className={styles.wrapper}>
            <section className={styles.loginWrapper}>
                <form className={styles.loginForm}>
                    <h1>LOGIN</h1>
                    <div className={styles.inputWrapper}>
                        <input 
                        name="userId" 
                        value={form.userId} 
                        placeholder="아이디"
                        onChange={onChange}/>
            
                        <input 
                        name="password" 
                        value={form.password} 
                        type="password" 
                        placeholder="비밀번호"
                        onChange={onChange}/>
                    </div>
                    <button className={styles.submitButton} type="button" onClick={onClick}>로그인</button>
                </form>
            </section>
        </main>
    );
}

export default Login;