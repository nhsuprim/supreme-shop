import React from "react";
import PropTypes from "prop-types";
import {
    FaHourglassHalf,
    FaLifeRing,
    FaLightbulb,
    FaWindowRestore,
} from "react-icons/fa";

// Content Data
const contents = [
    {
        color: "red",
        icon: FaHourglassHalf,
        title: "Strategy",
        text: "First we collect all kinds of reviews from our clients, which then help us to understand the market value of our product.",
    },
    {
        color: "blue",
        icon: FaLifeRing,
        title: "Marketing",
        text: "First we collect all kinds of reviews from our clients, which then help us to understand the market value of our product.",
    },
    {
        color: "green",
        icon: FaWindowRestore,
        title: "Product Design",
        text: "First we collect all kinds of reviews from our clients, which then help us to understand the market value of our product.",
    },
    {
        color: "purple",
        icon: FaLightbulb,
        title: "Branding",
        text: "First we collect all kinds of reviews from our clients, which then help us to understand the market value of our product.",
    },
];

// Shape Component
const Shape = ({ src, position }: { src: any; position: any }) => (
    <img
        src={src}
        alt="Shape"
        className={`absolute ${position} max-w-[200px] h-auto -z-[1]`}
    />
);

Shape.propTypes = {
    src: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
};

// ContentItem Component
const ContentItem = ({ item, index }: { item: any; index: any }) => (
    <div
        className={`bg-${
            item.color
        }-500 flex flex-col items-center justify-center shadow-lg shadow-${
            item.color
        }-500 text-white rounded-2xl text-center p-6 md:py-10 h-full ${
            index % 2 === 1 && "lg:mt-16"
        }`}
    >
        <div className="text-5xl mb-6">
            <item.icon />
        </div>
        <h4 className="text-2xl font-medium mb-2">{item.title}</h4>
        <p className="opacity-75 mt-4">{item.text}</p>
    </div>
);

ContentItem.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};

// HowItWorks Component
const HowItWorks = () => {
    return (
        <section className="ezy__howitworks12 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-[1]">
            {/* Shape Components */}
            <Shape
                src="https://cdn.easyfrontend.com/pictures/sketch/sketch1.png"
                position="top-0 left-0"
            />
            <Shape
                src="https://cdn.easyfrontend.com/pictures/sketch/sketch2.png"
                position="bottom-0 right-0"
            />
            <Shape
                src="https://cdn.easyfrontend.com/pictures/sketch/sketch3.png"
                position="top-0 right-0"
            />

            <div className="container px-4">
                <div className="w-full text-center">
                    <h2 className="text-3xl md:text-[45px] leading-none font-thin tracking-wide uppercase mb-2">
                        Our Work Process
                    </h2>
                </div>
                <div className="grid grid-cols-12 gap-6 mt-12 md:mt-20">
                    {contents.map((item, i) => (
                        <div
                            className="col-span-12 sm:col-span-6 lg:col-span-3"
                            key={i}
                        >
                            <ContentItem index={i + 1} item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
