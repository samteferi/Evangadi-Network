import axios from 'axios';
import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { UserContext } from './context/UserContext';
import Header1 from './Header/Header1';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
function App() {
  const [userData, setUserData] = useContext(UserContext);

  const checkLoggedIn = async () => {
    let token = localStorage.getItem('auth.token');
    if (token === null) {
      localStorage.setItem('auth-token', '');
      token = '';
    } else {
      const userRes = await axios.get('http://localhost:4000/api/users', {
        headers: { 'x-auth-token': token }
      });

      setUserData({
        token,
        user:userRes.data
      })
    }
  }

  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });

    localStorage.setItem('auth-token', '');
  };

  useEffect(() => {
   checkLoggedIn();
  }, []);
  return (
    <Router>
      <div>
       <Header1/>
       <SignUp/>
        <Routes>
          <Route path="/signup" element={<SignUp /> } />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home logout={logout}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
