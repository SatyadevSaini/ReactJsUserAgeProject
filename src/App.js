import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/AuthContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

 

  useEffect(()=>{
     
    console.log("Running useEffect");
    const getLogin = localStorage.getItem("login");   // here i will ge the item from local Storage 

    if(getLogin === '1'){
      setIsLoggedIn(true);
    }
  } , []);

  //login here & save 1 in local Storage here ...
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("login" , "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
   
  };

  return (
      
    <AuthContext.Provider value={
        {
         isLoggedIn: isLoggedIn ,
         onLogout  : logoutHandler,          // these values will be available for all the components in the react app  here ...
        }
    }>
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
    </AuthContext.Provider>

  );
}

export default App;
