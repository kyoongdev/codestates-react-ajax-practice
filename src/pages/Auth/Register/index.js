import React from "react"
import styles from "./register.module.scss"
import { useState } from "react"
import { registerApi } from "../../../api/Auth"
import { useNavigate } from "react-router-dom"
import { saveTokens ,isVaildateEmail} from "../../../utils"
const Register = () =>{
    const navigate = useNavigate();
    const [form,setForm] = useState({
        password:"",
        checkPassword:"",
        userName:"",
        email:"",
    });
    const onChange = (e) =>{
        const {name,value} = e.currentTarget;
        setForm({
            ...form,
            [name]:value,
        })
       
    }

    
    const onSubmit = async (e) =>{
        e.preventDefault();
        console.log(e);
        
        if(!isVaildateEmail(form.email)){
            alert("이메일 형식이 맞지않음");
            return;
        }
        if(form.checkPassword !== form.password){
            alert("비밀번호 맞지않음");
            return;
        }
        
        try{
            const response = await registerApi({
                "email":form.email,
                "password": form.password,
                "name": form.userName,
            });
            if(response.status ===200){
                const data = response.data;
                console.log(data);
                saveTokens(data);
                //결과확인위해 alert 넣음
                alert("회원가입 완료!");
                navigate("/");
            }
        }catch(error){
            if(error.response.status===409){
                alert("이미 가입한 회원입니다.");
            }
            else{
                alert("회원가입 실패!!");
            }
        }
       
    }
    return(
        <main className={styles.wrapper}>
            <form className={styles.registerWrapper} id="registerForm" onSubmit={onSubmit}>
             
                <div className={styles.inputWrapper} >
                    <h1>REGISTER</h1>
                </div>
                <div className={styles.inputWrapper}>
                    <label >
                    <p>이름</p>
                    <input name="userName" placeholder="홍길동" value={form.userName} onChange={onChange}/>
                    </label>
                </div>
                <div className={styles.inputWrapper}>
                    <label >     
                    <p>이메일</p>
                    <input name="email" placeholder="@codestate.com" value={form.email} onChange={onChange}/>
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
                

                <button type="submit"className={styles.submitButton}>SUBMIT</button>
            </form>
        </main>
    );
}

export default Register;