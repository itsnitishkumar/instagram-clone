import './components/styles/App.css';
import React,{ useState} from 'react';
import { LoginContext } from './context/LoginContext';
import Navbar from './components/screens/Navbar';
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './components/screens/Home';
import SignUp from './components/screens/SignUp';
import SignIn from './components/screens/SignIn';
import Profile from './components/screens/Profile';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreatePost from './components/screens/CreatePost';
import Modal from './components/screens/Modal';

function App() {

  const [userLogin, setUserLogin] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  
  return (
    <BrowserRouter>
      <div className="App">
        <LoginContext.Provider value={{setUserLogin, setModalOpen}}>
          <Navbar login={userLogin}/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/signin' element={<SignIn/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            <Route path='/createPost' element={<CreatePost/>}></Route>
          </Routes>
          <ToastContainer theme='dark'/>
          {modalOpen && <Modal setModalOpen={setModalOpen}></Modal>}
        </LoginContext.Provider>
      </div>
    </BrowserRouter>
  );
}



export default App;
