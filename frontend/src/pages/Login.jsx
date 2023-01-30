
import { useState,useEffect } from "react"
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify";
import { login,reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
function Login() {
 
   
   const [formData,setFormData]=useState({
    
    email:"",
    password:""
    
   })
   const { email, password}= formData;


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
  },[ isErrror, isSuccess, message, navigate,dispatch])
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

    const userData = {
      email,
      password
    }
    dispatch(login(userData))
  }


  if (isLoading) {
    return <Spinner/>
  }

  //   here we destractue our deafult input iput fields

   return (
  <>
    <section className="heading">
      <h1>
        <FaSignInAlt/> Login
      </h1>
      <p>Login and start setting goals</p>
    </section>
    <section className="form">
      <form onSubmit={onSubmit} >
     
         {/* 2------email------ */}
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
         {/* 2 password------ */}
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
       
         {/*  button */}
         <div className="form-control">
          <button type="submit" className="btn btn-block">Submit</button>
         </div>
      </form>
    </section>
  </>
  )
}

export default Login
