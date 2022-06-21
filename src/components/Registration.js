import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Registration(){
    const[name, setName]=useState('')
    const[surname, setSurname]=useState('')
    const[regNO, setRegno]=useState('')
    const[date, setDate]=useState('')
    const[image,setImg]=useState('')
    const[phone, setPhone]=useState('')
    const[email, setEmail]=useState('')
    const[password, setPassword]=useState('')
    const[login, setLogin]=useState(true)
    var letters=/^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var pwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;


    const register=()=>{
        let employeeDetails={
            name:name,
            surname:surname,
            regNO:regNO,
            date:date,
            image:image,
            phone:phone,
            email:email,
            password:password,
            date: new Date

        };
        if(employeeDetails.name===""){
           alert('make sure every field is filled')
         
        }else if(!letters.test(name)){
            alert('Name field requiregitd only alphabet characters')
        }
        else if(employeeDetails.surname===""){
           alert('make sure every field is filled')
          
        }
        else if(!letters.test(surname)){
            alert('surname field requiregitd only alphabet characters')}
        else if(employeeDetails.regNO===""){
           alert('make sure every field is filled')
          
        }else if(employeeDetails.phone===""){
           alert('make sure every field is filled')
          
        }else if(employeeDetails.phone.length <10 ||  employeeDetails.phone.length >10){
            alert('contact no must be 10')
        }
        else if(employeeDetails.regNO===""){
           alert('make sure every field is filled')
          
        }else if(employeeDetails.image===""){
          alert('make sure every field is filled')
         
        }
        else if(employeeDetails.date===''){
           alert('make sure every field is filled')
          
        }
        else if(employeeDetails.email===''){
            alert('make sure every field is filled')
          
        }else if(!filter.test(email)){
            alert('incorrect email format')
        }
        else if(employeeDetails.password===''){
           alert('incorect format of password')
          
        }
        else if(!pwd.test(password)){
        alert('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
       
        }
        else {
            let storedEmpolyeeDetails =new Array();
            let storedEmployeeUsers=JSON.parse(localStorage.getItem("user"));
            if(storedEmployeeUsers){
                storedEmpolyeeDetails=storedEmployeeUsers;
                storedEmpolyeeDetails.push(employeeDetails);
            }
            else{
                storedEmpolyeeDetails.push(employeeDetails);
                console.log('saved in local storage');
                 setLogin(!login)
            }
            localStorage.setItem('user',JSON.stringify(storedEmpolyeeDetails))
            window.location='/';
        }
    } 
    

    function handleSubmit(e){
        e.preventDefault();
        if(!name || !image || !surname || !regNO || !phone || !email || !password){
           alert('make sure every field is filled');
        }else if(name && image && surname && regNO  && phone && email && password){
            setLogin(!login)
        }
        else{ 
           console.log('saved in local storage');
           setLogin(!login)
        }
    }
    function handleClick(){
       setLogin(login)
    }

    return(
        <div>
            <form onSubmit={handleSubmit} >
                <h1>Register</h1>
                <div className='the-fields'>
                    <label>Name:</label>
                    <input type='text' className='form-control' placeholder='Enter Full Name' onChange={(event)=>setName(event.target.value)}/>
                </div>
                <div className='the-fields'>
                    <label>surname:</label>
                    <input type='text' className='form-control' placeholder='Enter Last Name' onChange={(event)=>setSurname(event.target.value)}/>
                </div>
                <div className='the-fields'>
                    <label>regNo:</label>
                    <input type='text' pattern="[0-9.]+"  className='form-control' placeholder='reg NO' onChange={(event)=>setRegno(event.target.value)}/>
                </div>
                <div className='the-fields'>
                    <label>Phone No:</label>
                    <input type='phone' className='form-control' pattern="[0-9.]+"  placeholder='Enter Contact' onChange={(event)=>setPhone(event.target.value)}/>
                </div>
                <div className='the-fields'>
                    <label>image:</label>
                    <input type='file' accept="image/png ,image/jpg" className='form-control' onChange={(event)=>setImg(event.target.value)}/>
                </div>
               
                <div className='the-fields'>
                    <label>email:</label>
                    <input type='text' className='form-control' placeholder='Enter email' onChange={(event)=>setEmail(event.target.value)}/>
                </div>
                <div className='the-fields'>
                    <label>password:</label>
                    <input type='password' className='form-control' placeholder='Enter Password' onChange={(event)=>setPassword(event.target.value)}/>
                </div>
                <button onClick={register} type='submit' className='btn btn-dark btn-lg btn-block'>Register</button>
                <p onClick={handleClick}>laready registered? {""}<Link to="/">Login</Link></p>
            </form>
        </div>
    )
}

export default Registration;