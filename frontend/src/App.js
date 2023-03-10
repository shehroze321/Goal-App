import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import "G:\webdevelopment\MONGO-DB\MERN-TUTORIAL\frontend\node_modules\react-toastify\dist\ReactToastify.css"
import  "react-toastify/dist/ReactToastify.css"
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import { register, reset } from "./features/auth/authSlice";
function App() {
  return (
    <>
      <Router>
        <div className="container">
        <Header/>
       <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
       </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
