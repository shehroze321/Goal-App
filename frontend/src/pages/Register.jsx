
import { useState,useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify";
import { FaUser } from "react-icons/fa";
import { register,reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
function Register() {
 
   
   const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:"",
    password2:""
   })
   
  //   here we destractue our deafult input iput fields

  const {name, email, password, password2}= formData;

   const navigate = useNavigate()
   const dispatch= useDispatch()

   const {user, isLoading , isErrror, isSuccess, message} = useSelector(
    (state) => state.auth
   )


   useEffect(() => {
     if(isErrror) {
      toast.error(message)
     }

     if(isSuccess || user) {
      navigate("/")
     }
     dispatch(reset())
   },[user, isErrror, isSuccess, message, navigate,dispatch])
  //   here to create our onChange event

  const onChange = (e) =>{
    setFormData((prevState) =>({
      ...prevState,
      [e.target.name]:e.target.value,
    }))
  }
  //  onSubmit event

  const onSubmit= (e)=>{
    e.preventDefault()

    if(password !== password2){
      toast.error("Password do not match")
    } else {
      const userData= {
        name,
        email,
        password,
      }

      dispatch(register(userData))
    }
  }


  if(isLoading) {
    return <Spinner/>
  }


   return (
  <>
    <section className="heading">
      <h1>
        <FaUser/> Register
      </h1>
      <p>Please create an account</p>
    </section>
    <section className="form">
      <form onSubmit={onSubmit} >
      {/* 1------- */}
      <div className="form-group">
        <input 
        type="text"
        className="form-control"
        id="name"
        name="name"
        value={name}
        placeholder="Enter your name"
        onChange={onChange}
         />
         </div>
         {/* 2------------ */}
      <div className="form-group">
        <input 
        type="email"
        className="form-control"
        id="email"
        name="email"
        value={email}
        placeholder="Enter your email"
        onChange={onChange}
         />
         </div>
         {/* 3------ */}
      <div className="form-group">
        <input 
        type="password"
        className="form-control"
        id="password"
        name="password"
        value={password}
        placeholder="Enter  password"
        onChange={onChange}
         />
         </div>
         {/* ---4----- */}
         <div className="form-group">
        <input 
        type="password"
        className="form-control"
        id="password2"
        name="password2"
        value={password2}
        placeholder="Confirm  password"
        onChange={onChange}
         />
         </div>
         {/* 4------- */}
      {/* <div className="form-group">
        <input 
        type="pssword"
        className="form-control"
        id="password2"
        name="password2"
        value={password2}
        placeholder="Confirm password"
        onChange={onChange}
         />
         </div> */}
         {/*  button */}
         <div className="form-control">
          <button type="submit" className="btn btn-block">Submit</button>
         </div>
      </form>
    </section>
  </>
  )
}

export default Register
