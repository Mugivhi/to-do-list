import React, { useState } from 'react'
import { Link } from 'react-router-dom';
function Login(){
    const [email,setEmaillog]=useState('');
    const [password,setPasswordlog]=useState('');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var pwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    const getInfo=(e)=>{
        e.preventDefault();
        let getD={
            email:email,
            password:password
        };
        if(getD.email===''){
            alert('email cant be empty');
        }
        else if(!filter.test(email)){
            alert('incorrect email format');
        }
        else if(getD.password===''){
            alert('password cant be empty');
        }
        else if(!pwd.test(password)){
            alert('incorrect password');
        }
        else{
            let storedUsers=JSON.parse(localStorage.getItem('user'));
            let userFound=false;
            for(let user of storedUsers){
                if(email===user.email && password ===user.password){
                    alert("correct login info yo now logged in");
                    userFound=true
                    window.location='/Landing';
                }
            }
            if (!userFound){
                alert('password does not match')
            }
        }
      }  
        return(
        <div>
        <form>
           <h1>Login</h1>
           <div className='the-fields'>
                    <label>email:</label>
                    <input type='text' className='form-control' placeholder='Enter email' onChange={(event)=>setEmaillog(event.target.value)}/>
                </div>
                <div className='the-fields'>
                    <label>password:</label>
                    <input type='password' className='form-control' placeholder='Enter Password' onChange={(event)=>setPasswordlog(event.target.value)}/>
                </div>
                <button onClick={getInfo} type='submit' className='btn btn-dark btn-lg btn-block'>Login</button>
                <p>No account? {""}<Link to="/sign-up">Register</Link></p>
                </form>
        </div>
    )
}
export default Login;