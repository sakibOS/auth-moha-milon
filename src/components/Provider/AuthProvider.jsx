import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase_config";

export const AuthContext=createContext(null);
const googleProvider=new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    };
    const singInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    };
    const singInWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    };
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    };
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log('observing current user',currentUser)
            setLoading(false);
        });
        return()=>{
            unSubscribe();
        }
    },[])
    const authInfo={user,loading,createUser,singInUser,singInWithGoogle,logOut};
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes={
    children:PropTypes.node,
}

export default AuthProvider;

/**
 * 1. create a context and export it
 * 2. set provider value
 * 3. use the auth provider in the main.jsx file
 * 4. Access children in the AuthProvider components as children and use it in the middle of the Provider
 * 5. 
 */