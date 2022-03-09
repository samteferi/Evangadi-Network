import { useContext } from 'react';
import './App.css';
import { UserContext } from './context/UserContext';
import SignUp from './Pages/SignUp/SignUp';
function App() {
  const [userData, setUserData] = useContext(UserContext);

  const checkLoggedIn = async () => {
    // let token = local
  }
  return (
    <div>
      <SignUp/>
     </div>
  );
}

export default App;
