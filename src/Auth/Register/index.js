import React, { useState } from "react";
import styles from "./register.module.scss"

const Auth = ()=>{
    const [form, setForm] =useState({
        userId:'',
        password:'',
    })

    const onChange=(e)=>{
        const {name, value} = e.currentTarget;
        setForm({...form, [name]:value})
    };

    const onSubmit=(e)=>{
        e.preventDefault();
        console.log(e);
    };
    return(
        <div className={styles.wrapper}>
            
            <form className={styles.loginForm}
            onSubmit={onSubmit}>
            <h1>회원가입</h1>

            <label className={styles.inputWrapper}>
                <p>아이디</p>
                <input placeholder='ID'
                name="userId" 
                value={form.userId}
                onChange={onChange}
                />
            </label>
            <label className={styles.inputWrapper}>
                <p> 비밀번호 </p>
                <input placeholder="password"
                type='password'
                name="password" 
                value={form.password}
                onChange={onChange}
                />
            </label>
            <button className={styles.submitButton} type="submit">
                회원가입</button>
            </form>
        </div>
    )
}

export default Auth;