import Home from './Pages/Home';
import './App.css';
import Register from './Pages/Register';
import {Route,Routes} from 'react-router-dom'
import Login from './Pages/Login';
import Nav from './Pages/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>

    </div>
  );
}

export default App;
