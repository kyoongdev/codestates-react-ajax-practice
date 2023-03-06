import React from "react"
import styles from "./register.module.scss"
import { useState } from "react"
const Register = () =>{
    const [form,setForm] = useState({
        userId:"",
        password:"",
        checkPassword:"",
        userName:"",
        email:"",
        phone:"",
    });
    const onChange = (e) =>{
        const {name,value} = e.currentTarget;
        setForm({
            ...form,
            [name]:value,
        })
    }
    const onClick = () => {
        console.log(form);
        
        setForm({
            userId:"",
            password:"",
            checkPassword:"",
            userName:"",
            email:"",
            phone:"",
        })
    }
    return(
        <main className={styles.wrapper}>
            <section className={styles.registerWrapper}>
                <div className={styles.inputWrapper} >
                    <h1>REGISTER</h1>
                </div>
                <div className={styles.inputWrapper}>
                    <label >     
                    <p>아이디</p>
                    <input name="userId" placeholder="@codestate.com" value={form.userId} onChange={onChange}/>
                    </label>
                </div>
                <div className={styles.inputWrapper}>
                    <label >
                        <p>비밀번호</p>
                    <input name="password" type="password" value={form.password} onChange={onChange}/></label>
                </div>
                <div className={styles.inputWrapper}>
                    <label >
                    <p>비밀번호 재확인</p>
                    <input name="checkPassword" type="password" value={form.checkPassword} onChange={onChange}/></label>
                </div>
                <div className={styles.inputWrapper}>
                    <label >
                    <p>이름</p>
                    <input name="userName" placeholder="홍길동" value={form.userName} onChange={onChange}/>
                    </label>
                </div>
                <div className={styles.inputWrapper}><label >
                <p>본인확인 이메일 </p>
                <input type="email" name="email" placeholder="선택사항 hongildong@codestate.com" value={form.email} onChange={onChange}/></label></div>
                <div className={styles.inputWrapper}><label >
                <p>휴대전화</p>
                <input type="tel" name="phone" placeholder="010-0000-0000" value={form.phone} onChange={onChange}/></label></div>

                <button className={styles.submitButton} onClick={onClick}>SUBMIT</button>
            </section>
        </main>
    );
}

export default Register;