import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <section className="max-w-screen-xl px-8 md:px-16 my-10" >

                <div className="shadow-lg py-5 rounded-md" >


                    <nav>
                        <ul className="flex justify-center gap-10 text-xl" >
                            <Link to="/" >Home</Link>
                            <Link to="/products" >Products</Link>
                            <Link to="/login" >Login</Link>
                            <Link to="/signUp" >SignUp</Link>
                        </ul>
                    </nav>




                </div>


                {/* Outlet */}

                <div>
                    <Outlet />
                </div>

            </section>
        </div>
    );
};

export default MainLayout;