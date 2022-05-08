import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import About from './Component/About/About';
import AddItems from './Component/Add Items/AddItems';
import Blogs from './Component/Blogs/Blogs';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import ManageItems from './Component/Manage Items/ManageItems';
import MyItems from './Component/My items/MyItems';
import NotFound from './Component/NotFound/NotFound';
import Registration from './Component/Registation/Registration';
import Footer from './Shared Component/Footer/Footer';
import Nav from './Shared Component/Navigation/Nav';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/manageItem" element={<ManageItems/>} />
      <Route path="/addItems" element={<AddItems/>} />
      <Route path="/myItems" element={<MyItems/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/registration" element={<Registration/>} />
      <Route path="/blogs" element={<Blogs/>} />
      <Route path="/about" element={<About/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
