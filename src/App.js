import Home from './Pages/Home';
import './App.css';
import Register from './Pages/Register';
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Register/>}/>
      </Routes>

    </div>
  );
}

export default App;
