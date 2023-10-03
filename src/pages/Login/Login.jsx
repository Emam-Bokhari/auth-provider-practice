import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Login = () => {
    const {signin}=useContext(AuthContext)

    const handleSignin=(event)=>{
        event.preventDefault()
        const email=event.target.email.value 
        const password=event.target.password.value 
        
        signin(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })

    }
    return (
        <div  className="my-10" >

            <div className="w-[300px] h-[400px] border-2 border-indigo-400 rounded-sm relative" >
                <form onSubmit={handleSignin} className="absolute top-[7%] text-center px-4">
                    <h2 className="text-center text-3xl font-medium text-indigo-600" >Login</h2>
                   
                        <input className=" px-2 border-2 border-gray-400 rounded-sm w-full mt-5" type="email" name="email" placeholder="Enter your e-mail" />

                        <input className="px-2 border-2 border-gray-400 mt-5 rounded-sm w-full" type="password" name="password" placeholder="Password"/>

                        <p className="text-right text-sm">Forgot password?</p>

                        <input className="px-2 py-1  bg-indigo-400 mt-5 rounded-sm text-white text-xl w-full" type="submit" value="Login"/>

                        <p className="mt-5 text-base" >Not a member? <span className="text-indigo-500 font-medium" >SignUp!</span></p>

                        

                    </form>
                </div>

        </div>
    );
};

export default Login;