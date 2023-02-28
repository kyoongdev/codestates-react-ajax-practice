import React, { useState } from 'react';
import styles from './auth.module.scss';
import loginButton from '../../assets/icons/enter.png';

const Auth = () => {
  const [form, setForm] = useState({userId:"", password:""});

  const onSubmit = (e) => {
    e.preventDefault();
  }

  const submitFormData = (e) => {
    const {name, value} = e.currentTarget;

    setForm({
      ...form,
      [name]: value,
    });
    console.log(form)
  };

  return (
    <main className={styles.container}>
      <section className={styles.wrapper}>
        <h1>Welcome</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="userId">
            <input 
              placeholder='UserID' 
              className={styles.userIdInput}
              id="userId"
              name="userId" 
              value={form.userId}
              onChange={submitFormData}
            >  
            </input>
          </label>
          <label htmlFor="password">
            <input 
              type='password'
              placeholder='Password' 
              className={styles.passwordInput}
              id="password"
              name="password" 
              value={form.password}
              onChange={submitFormData}
            >
            </input>
          </label>
          <button type='submit' 
            className={styles.submitBtn} 
            onClick={submitFormData}
          ><img src={loginButton} alt='login button'></img>
          </button>
        </form>
      </section>
    </main>
  );
}

export default Auth;