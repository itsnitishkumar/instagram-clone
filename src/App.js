import './App.css';
import React,{createContext, useState} from 'react';
import { LoginContext } from './context/LoginContext';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreatePost from './components/CreatePost';


function App() {

  const [userLogin, setUserLogin] = useState(false)
  return (
    <BrowserRouter>
      <div className="App">
        <LoginContext.Provider value={{setUserLogin}}>
          <Navbar login={userLogin}/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/signin' element={<SignIn/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            <Route path='/createPost' element={<CreatePost/>}></Route>
          </Routes>
          <ToastContainer theme='dark'/>
        </LoginContext.Provider>
      </div>
    </BrowserRouter>
  );
}



export default App;
