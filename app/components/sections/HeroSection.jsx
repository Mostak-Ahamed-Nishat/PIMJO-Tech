"use client";

import HeroProductSlider from "../slider/HeroProductSlider";
import HeroProductCard from "../product/HeroProductCard";
import { sliderData, sideProducts } from "@/app/constants/heroData";

export default function HeroSection() {
    return (
        <section className="container mx-auto px-4 md:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_373px] gap-6">
                {/* LEFT: HERO (sm: min(80vh, 622px); md: 440px; lg: 544px) */}
                {/* LEFT hero wrapper: SM cap 622px, MD 440px, LG 544px */}
                <div className="
  rounded-3xl overflow-hidden bg-blue-950
  h-[min(80vh,622px)] md:h-[440px] lg:h-[544px]
">
                    <HeroProductSlider data={sliderData} />
                </div>


                {/* RIGHT: TWO CARDS — each fixed 262px; gap-5 => 262 + 20 + 262 = 544 */}
                <div className="flex flex-col gap-5 justify-between lg:w-[373px] mx-auto lg:mx-0">
                    <HeroProductCard products={sideProducts} className="bg-white h-[262px]" />
                </div>
            </div>
        </section>
    );
}
