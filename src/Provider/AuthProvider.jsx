import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleRegister = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    const UpdateUserProfile = (name) =>{
        return updateProfile(auth.currentUser, {
            displayName:name
        })
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)      
            setLoading(false)
            console.log('current user -->', currentUser);
            if(currentUser){
                //get token and store client
            }else{
                //todo : remove token
            }
        })
        return () =>{
            return unsubscribe()
        }
    },[])

    const authInfo = {
        user, 
        setUser,
        loading,
        setLoading,
        createUser,
        loginUser,
        logOut,
        googleRegister,
        UpdateUserProfile
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}            
        </AuthContext.Provider>
    );
};

export default AuthProvider;