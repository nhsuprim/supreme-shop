"use client";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import PromoCard from "@/components/PromoCard/PromoCard";
import PromotionalOffers from "@/components/PromotionalOffer/PromoOffer";
import Slider from "@/components/Slider/Slider";
import TopCategories from "@/components/TopCategories/TopCategories";
import TopProducts from "@/components/TopProducts/TopProducts";

const HomePage = () => {
    return (
        <div className="container mx-auto mt-4 min-h-screen">
            <Slider />
            <TopCategories />
            <PromoCard />
            <TopProducts />
            <PromotionalOffers />
            <HowItWorks />
        </div>
    );
};

export default HomePage;
