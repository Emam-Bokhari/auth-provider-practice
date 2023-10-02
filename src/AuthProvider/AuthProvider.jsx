import { createContext } from "react";
import PropTypes from "prop-types"
import {GoogleAuthProvider,  signInWithPopup} from "firebase/auth"
import auth from "../firebase/firebase.config";
const googleProvider=new GoogleAuthProvider()

export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    

    const googleSignin=()=>{
       return signInWithPopup(auth,googleProvider)
    }

    const authInfo={googleSignin}

    return (
        <div>
            <AuthContext.Provider value={authInfo} >
                {children}
            </AuthContext.Provider>
        </div>
    );
};

    AuthProvider.propTypes={
        children:PropTypes.node.isRequired
    }

export default AuthProvider;