import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import auth from "../firebase/firebase.config";
const googleProvider = new GoogleAuthProvider()

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({})

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const googleSignin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const signin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)

        })
        return () => {
            unSubscribe()
        }
    }, [])


    const authInfo = {user, createUser, googleSignin, signin, logout }

    return (
        <div>
            <AuthContext.Provider value={authInfo} >
                {children}
            </AuthContext.Provider>
        </div>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthProvider;