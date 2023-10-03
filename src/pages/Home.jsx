import moment from "moment";
import Marquee from "react-fast-marquee";
import { useState, useEffect } from "react";

const Home = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // প্রতি সেকেন্ডে সময় আপডেট করা
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // কান্সল করে ইন্টারভাল স্থগিত করা
        return () => clearInterval(interval);
    }, []);

    const formattedTime = time.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
    });

    return (
        <div className="my-10">
            <h2>Home page</h2>
            {moment().format("MMM-D-YYYY,dddd, ")}
            {formattedTime}

            <div className="my-10" >
                <Marquee speed={80} >
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </div>
    );
};

export default Home;
