import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import auth from "../firebase/firebase.config";


const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const googleSignin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)


    }

    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const githubSignin = () => {
        return signInWithPopup(auth, githubProvider)

    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)

        })
        return () => {
            unSubscribe()
        }
    }, [])


    const authInfo = { user, createUser, googleSignin, githubSignin, signin, logout, loading }

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