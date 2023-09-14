import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AddFood from './Food/AddFood';
import EditFood from './Food/EditFood';
import ViewFood from './Food/ViewFood';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Forgot from './Pages/Forgot';
import Cart from './Pages/Cart';
import Users from './Pages/Users';
import ViewUser from './User/ViewUser';
import EditUser from './User/EditUser';
import About from './Pages/About';
import Shop from './Pages/Cart';
import AdminHome from './Pages/AdminHome';

function App() {
  return (
    <div className='login'>
      <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/addfood' element={<AddFood/>}></Route>
      <Route path='/viewfood/:foodID' element={<ViewFood/>}></Route>
      <Route path='/editfood/:foodID' element={<EditFood/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/login/:email/:pass' element={<Login/>}></Route>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/forgotpw/:id' element={<Forgot/>}></Route>
      <Route path='/cart' element={<Shop/>}></Route>
      <Route path='/users' element={<Users/>}></Route>
      <Route path='/viewuser/:id' element={<ViewUser/>}></Route>
      <Route path='/edituser/:id' element={<EditUser/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/admin/home' element={<AdminHome/>}></Route>
  </Routes>
      
    </div>
  );
}

export default App;