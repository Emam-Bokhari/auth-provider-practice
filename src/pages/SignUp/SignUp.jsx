
const SignUp = () => {
    return (
        <div className="my-10" >
            <div>


                <div className="w-[300px] h-[400px] border-2 border-indigo-400 rounded-sm relative" >
                <form className="absolute top-[7%] text-center px-4">
                    <h2 className="text-center text-3xl font-medium text-indigo-600" >SignUp</h2>
                   
                        <input className=" px-2 border-2 border-gray-400 rounded-sm w-full mt-5" type="text" name="name" placeholder="Enter your name" />

                        <input className=" px-2 border-2 border-gray-400 rounded-sm w-full mt-5" type="email" name="email" placeholder="Enter your e-mail" />

                        <input className="px-2 border-2 border-gray-400 mt-5 rounded-sm w-full" type="password" name="password" placeholder="Password"/>

                        <input className="px-2 py-1  bg-indigo-400 mt-5 rounded-sm text-white text-xl w-full" type="submit" value="SignUp"/>

                        <div>
                        <p className="mt-5 text-sm" >Or SignUp Using</p>

                        <div className="flex justify-center mt-2" >
                        <hr className="border-[1px] w-16 border-gray-300" />
                        </div>

                        <div className="space-x-4 mt-2" >
                        <span className="text-indigo-500 font-medium" >Google</span>
                        <span className="text-indigo-500 font-medium" >Facebook</span>
                        </div>

                        </div>

                    </form>
                </div>


            </div>
        </div>
    );
};

export default SignUp;