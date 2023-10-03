import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
    const {createUser,googleSignin} = useContext(AuthContext)


    const handleSignUp=(event)=>{
        event.preventDefault()
        const name=event.target.name.value 
        const email=event.target.email.value 
        const password=event.target.password.value 
    

        
        if(password.length>6){
            return toast.error('Please make sure the password is 6 characters or long')
        }

        createUser(email,password)
         .then(result=>{
            console.log(result.user)
         })
         .catch(error=>{
            console.log(error)
         })
    }


    const handleSocialSignin=(media)=>{
        media()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className="my-10" >
            <div>


                <div className="w-[300px] h-[400px] border-2 border-indigo-400 rounded-sm relative" >
                    <form onSubmit={handleSignUp} className="absolute top-[7%] text-center px-4">
                        <h2 className="text-center text-3xl font-medium text-indigo-600" >SignUp</h2>

                        <input className=" px-2 border-2 border-gray-400 rounded-sm w-full mt-5" type="text" name="name" placeholder="Enter your name" />

                        <input className=" px-2 border-2 border-gray-400 rounded-sm w-full mt-5" type="email" name="email" placeholder="Enter your e-mail" />

                        <input className="px-2 border-2 border-gray-400 mt-5 rounded-sm w-full" type="password" name="password" placeholder="Password" />

                        <input className="px-2 py-1  bg-indigo-400 mt-5 rounded-sm text-white text-xl w-full" type="submit" value="SignUp" />

                        <div>
                            <p className="mt-5 text-sm" >Or SignUp Using</p>

                            <div className="flex justify-center mt-2" >
                                <hr className="border-[1px] w-16 border-gray-300" />
                            </div>

                            <div className="space-x-4 mt-2" >
                    <button onClick={()=>handleSocialSignin(googleSignin)} className="text-indigo-500 font-medium" >Google</button>
                    <button className="text-indigo-500 font-medium" >Facebook</button>
                            </div>

                        </div>

                    </form>
                </div>


            </div>
        </div>
    );
};

export default SignUp;