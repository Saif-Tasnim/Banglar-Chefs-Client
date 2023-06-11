/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const createUserEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
        
    }
    
    const signWithGoogle = () => {
        return signInWithPopup(auth , googleProvider);
    }

    const signInEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            
        });

        return () => unsubscribe();
    }, []);



    const authInfo = {
        user,
        createUserEmail,
        signInEmail,
        signWithGoogle,
        logOut,
        loading
    }

    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;