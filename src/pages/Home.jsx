import React, { useState, useEffect } from "react";
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import {AiOutlineArrowLeft} from "react-icons/ai"
import {AiOutlineArrowRight} from "react-icons/ai"



const Home = () => {
    const [sliderRef, instanceRef] = useKeenSlider();
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedTime = time.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
    });

    const goToPreviousSlide = () => {
        instanceRef.current.prev();
    };

    const goToNextSlide = () => {
        instanceRef.current.next();
    };

    useEffect(() => {
        const autoSlideChangeInterval = setInterval(() => {
            if (instanceRef.current) {
                instanceRef.current.next();
            }
        }, 1000);

        return () => clearInterval(autoSlideChangeInterval);
    }, [instanceRef]);


    return (
        <div className="my-10">
            <h2>Home page</h2>
            {formattedTime}

            <div className="my-10">
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide">
                        <img className="w-full h-[500px]" src="https://picsum.photos/id/1/200/300" alt="" />
                    </div>
                    <div className="keen-slider__slide">
                        <img className="w-full h-[500px]" src="https://picsum.photos/id/2/200/300" alt="" />
                    </div>
                    <div className="keen-slider__slide">
                        <img className="w-full h-[500px]" src="https://picsum.photos/id/3/200/300" alt="" />
                    </div>
                </div>
                <button onClick={goToPreviousSlide}>
                    <AiOutlineArrowLeft />
                </button>
                <button onClick={goToNextSlide}>
                    <AiOutlineArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Home;
