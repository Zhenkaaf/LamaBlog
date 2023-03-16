/* import Home from './pages/home/Home';
import Topbar from './components/topbar/Topbar';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

import { Outlet, Routes, Route } from "react-router-dom";



const Layout = () => {

  return (
    <>
      <Topbar />
      <Outlet /> 
    </>
  )
};




function App() {
  const user = false;
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='register' element={user ? <Home/> : <Register/>}/>
        <Route path='login' element={user ? <Home/> : <Login/>}/>
        <Route path='write' element={user ? <Write/> : <Register/>}/>
        <Route path='settings' element={user ? <Settings/> : <Register/>}/>
        <Route path='post/:postId' element={<Single/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App; */


import { lazy, Suspense } from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';
import Topbar from './components/topbar/Topbar';

const Home = lazy(() => import('./pages/home/Home'));
const Single = lazy(() => import('./pages/single/Single'));
const Write = lazy(() => import('./pages/write/Write'));
const Settings = lazy(() => import('./pages/settings/Settings'));
const Login = lazy(() => import('./pages/login/Login'));
const Register = lazy(() => import('./pages/register/Register'));

const Layout = ({ children }) => {
  return (
    <>
      <Topbar />
      {children}
    </>
  );
};

function App() {
  const user = false;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="register" element={user ? <Home /> : <Register />} />
          <Route path="login" element={user ? <Home /> : <Login />} />
          <Route path="write" element={user ? <Write /> : <Register />} />
          <Route path="settings" element={user ? <Settings /> : <Register />} />
          <Route path="post/:postId" element={<Single />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
