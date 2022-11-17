import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'

export const authContext = createContext()
const auth = getAuth(app)


const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }

    const logout = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSuscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
        });
        return () => unSuscribe()
    },[])

    const authInfo = {
        user,
        createUser,
        singIn,
        logout,
        updateUser,
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProviders;