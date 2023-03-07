import React from "react"
import styles from "./register.module.scss"
import { useState } from "react"
import { kakaoRegister } from "../../../../api/Auth"
import { useLocation, useNavigate } from "react-router-dom"
import qs from "query-string"
import { saveTokens ,isVaildateEmail} from "../../../../utils"
const Register = () =>{
    const navigate = useNavigate();
    const location = useLocation();

    const [form,setForm] = useState({
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

        if(!isVaildateEmail(form.email)) return;
       
        const search = qs.parse(location.search);
        const response = await kakaoRegister({
            email:form.email,
            name: form.userName,
            token: search.token,
        });

        console.log({response});
        if(response.status ===200){
            const data = response.data;      
            saveTokens(data);
            //결과확인위해 alert 넣음
            alert("회원가입 완료!");
            navigate("/");
        }else{
            alert("회원가입 실패!!");
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
            

                <button type="submit"className={styles.submitButton}>SUBMIT</button>
            </form>
        </main>
    );
}

export default Register;