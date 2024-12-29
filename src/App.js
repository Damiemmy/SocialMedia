import Home from './Pages/Home';
import './App.css';
import Register from './Pages/Register';
import {Navigate, Outlet, Route,Routes} from 'react-router-dom'
import Login from './Pages/Login';
import Nav from './Pages/Nav';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import LeftBar from './Pages/LeftBar';
import RightBar from './Pages/RightBar';
import Profile from './Pages/Profile';

function App() {
  const Layouts=()=>{
    return(
      <div>
        <Nav/>
        <div style={{display:"flex"}}>
          <LeftBar/>
          <div style={{flex:6, backgroundColor:'rgb(235, 232, 232)'}}>
          <Outlet/>
          </div>
          <RightBar/>

        </div>
      </div>
    )
  }
  const currentUser=true;
  const ProtectedLayout=({children})=>{
    if(!currentUser){return<Navigate to="/login"/>}
    
  return children}
  
  const router=createBrowserRouter([
    
    {
      path:"/",
      element:<ProtectedLayout><Layouts/></ProtectedLayout>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        }
      ]
    },
    {
      path:"/register",
      element:<Register/>
    },
    {
      path:"/About",
      element:<div>About Page</div>
    },
    {
      path:"/login",
      element:<Login/>
    },
  ])
  
  return (
    <div className="App">
      <RouterProvider router={router}/>

    </div>
  );
}

export default App;