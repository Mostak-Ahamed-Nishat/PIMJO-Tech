// app/components/slider/HeroProductSlider.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroProductSlider({ data = [] }) {
    return (
        <Swiper
            modules={[Pagination]}
            pagination={{
                clickable: true,
                renderBullet: (i, className) =>
                    `<button type="button" class="${className}" aria-label="${data[i]?.title || `Slide ${i + 1}`}"></button>`,
            }}
            className="hero-swiper h-full"
        >
            {data.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className="h-full text-white px-6 md:px-10 lg:px-16 py-8 md:py-10">
                        {/* 1 col on small, 2 cols on lg */}
                        <div className="h-full grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
                            {/* LEFT: copy (center on sm, left on lg) */}
                            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                                <p className="uppercase tracking-[0.25em] text-white/70 text-xs md:text-sm">
                                    {item.brand}
                                </p>

                                <h2 className="mt-2 font-semibold leading-tight
                               text-3xl md:text-5xl lg:text-6xl">
                                    {item.title}
                                </h2>

                                <p className="mt-4 text-white/70 text-sm md:text-base lg:max-w-[48ch]">
                                    {item.description}
                                </p>

                                {/* CTA: wide on small like your mock */}
                                <div className="mt-6 md:mt-8 flex justify-center lg:justify-start">
                                    <button
                                        className="w-full max-w-[520px] lg:w-auto lg:max-w-none
                               inline-flex items-center justify-center
                               rounded-xl bg-white text-gray-900
                               px-6 py-3 text-sm font-semibold shadow-sm hover:shadow-md transition"
                                    >
                                        Buy Now ${item.price}
                                    </button>
                                </div>
                            </div>

                            {/* RIGHT: image (bottom on sm, right on lg) */}
                            <div className="relative flex items-end lg:items-center justify-center lg:justify-end
                              h-[280px] sm:h-[360px] md:h-[420px] lg:h-full">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full max-h-full w-auto object-contain"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
