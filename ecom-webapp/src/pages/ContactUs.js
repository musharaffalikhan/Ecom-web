import React, { useRef } from "react";
import Footer from "../components/Layout/Footer";
import MainHeader from "../components/Layout/MainHeader";
import classes from './Contact.module.css';
const ContactUs = ()=>{
    const nameRef = useRef('');
    const emailIdRef = useRef('');
    const PhoneRef = useRef('');


    const submitHandler = (async(event) => {
        event.preventDefault();
        const userData = {
            name: nameRef.current.value,
            emailId: emailIdRef.current.value,
            phone: PhoneRef.current.value,
        };
        const response = await fetch('https://ecom-web-9ce0f-default-rtdb.firebaseio.com/userdata.json',{
            method:'POST',
            body:JSON.stringify(userData),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const data= response.json();
        console.log(data);
    })

    const confirmHandler = ()=>{
        alert('Thank you for contacting us! We will contact you soon');
    }



    return (
        <React.Fragment>
             <header className={classes.header}>
        <MainHeader />
        <h1 className={classes["header-h1"]}>The Generics</h1>
      </header>
      <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>NAME</label>
        <input type='text' id='name' ref={nameRef} required/>
      </div>
      <div className={classes.control}>
        <label htmlFor='email'>EMAIL-ID</label>
        <input type="email" id='emailId' ref={emailIdRef} required/>
      </div>
      <div className={classes.control}>
        <label htmlFor='phonenumber'>Ph-No</label>
        <input type='number' id='phonenumber' ref={PhoneRef} required/>
      </div>
      <div className={classes.control}>
      <button className={classes.button} onClick={confirmHandler}>CONFIRM</button>
      </div>
      </form>
      <Footer/>
        </React.Fragment>
    )
}
export default ContactUs;