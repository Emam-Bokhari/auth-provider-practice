import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MainLayout = () => {
    const { logout, user } = useContext(AuthContext)
    const handleLogout = () => {
        logout()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div>
            <section className="max-w-screen-xl px-8 md:px-16 my-10" >

                <div className="shadow-lg py-5 rounded-md flex justify-between px-4 items-center" >


                    <nav>
                        <ul className="flex justify-center gap-10 text-xl" >
                            <Link to="/" >Home</Link>
                            <Link to="/products" >Products</Link>
                            <Link to="/login" >Login</Link>
                            <Link to="/signUp" >SignUp</Link>
                            
                            {user && <Link to="/profile" >Profile</Link>}
                        </ul>
                    </nav>


                    {user ? <div>
                        <button onClick={handleLogout} className="bg-gray-300 px-3 py-1 rounded-md font-medium text-xl" >Logout</button>
                    </div>
                        :
                        <div>
                            <button className="bg-gray-300 px-3 py-1 rounded-md font-medium text-xl" >Login</button>
                        </div>}





                </div>


                {/* Outlet */}

                <div>
                    <Outlet />
                </div>

                <Toaster />

            </section>
        </div>
    );
};

export default MainLayout;