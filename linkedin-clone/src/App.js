import React, { useEffect, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import "./App.css"
import Feed from './Feed';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, login, logout } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
import Loader from './Loader';
import Widgets from './Widgets';
import { SnackbarProvider } from "notistack";


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //login
        
        dispatch((login)({
          email: userAuth.email,
          uid: userAuth.uid,
          profileUrl: userAuth.photoURL,
          displayName: userAuth.displayName,
        }))
        setIsLoading(false)
      } else {
        //logout
        setIsLoading(false)
        dispatch(logout())
      }
    })
  }, [])
  // if (isLoading) {
  //   return <Loader />
  // }
  return (
    <>
      {isLoading ? <Loader /> : !user ? <Login /> :
        <div>
          <Header />
        <div className="App">
          <div className="app__body">
            <Sidebar />
            <SnackbarProvider maxSnack={3}>
            <Feed />
            </SnackbarProvider>
            <Widgets />
          </div>
          </div>
        </div>}
    </>
  );
}

export default App;
