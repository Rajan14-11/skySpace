import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/FirebaseInitialize";
import {signInWithEmailAndPassword , getAuth,signOut,onAuthStateChanged  , createUserWithEmailAndPassword } from "firebase/auth";




// Initialize Firebase App
initializeFirebase()


const useFirebase=()=>{
    
    const [user, setUser]=useState({})
   const [loading,setLoading]=useState(true)
   const [error,setError]=useState('')
   
    const auth = getAuth();

    // registationUser handle
    const registerUser=(email,password,name, navigate)=>{
        setLoading(true)
        createUserWithEmailAndPassword(auth,email,password)
        .then(() => {
            setError('')
            const newUser = { email, displayName: name };
            setUser(newUser);
            saveUser(email,password,name)
          })
          navigate('/')
          .catch((error) => {
            setError(error.message)
          })
          .finally(()=>setLoading(false))
    }


  //    signIn handle============
  const loginUser = (email, password, location, navigate) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        const destination = location?.state?.from || "/";
        navigate(destination);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };





  // save user database
  const saveUser=((email,password,displayName)=>{
    const user={email,password,displayName};
    fetch('https://theskyaural.herokuapp.com/users',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(()=>{})
    .catch((error) => {
      setError(error.message);
    })
  })




// user state update handle
    useEffect(()=>{

       const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
            setUser({})
            }
            setLoading(false)

          });

          return ()=>unsubscribe;
    },[auth])





    // handle logOut user
    const logOut=()=>{
        setLoading(true)
        signOut(auth).then(() => {
            setError("")
          }).catch((error) => {
            setError(error.message)          })
          .finally(()=>setLoading(false))

    }








return{
    user,
    registerUser,
    loginUser,
    loading,
    error,
    logOut
}



}

export default useFirebase;