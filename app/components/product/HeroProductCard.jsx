"use client";

import React from "react";

const HeroProductCard = ({ products = [], className = "" }) => {
    return (
        <>
            {products.slice(0, 2).map((product) => (
                <div
                    key={product.id}
                    className={`rounded-2xl p-6 flex hover:shadow-lg transition-shadow duration-300 relative overflow-hidden
                      max-w-[373px] max-h-[262px] w-full h-full bg-gray-200 ${className}`}
                >
                    {/* Left */}
                    <div className="flex-1 flex flex-col justify-between pr-4">
                        <div className="mb-4">
                            <p className="text-sm font-medium text-gray-600 mb-3 tracking-wide uppercase">
                                {product.brand}
                            </p>
                            <h3 className="text-xl lg:text-2xl font-bold text-slate-800 leading-tight">
                                {product.title}
                            </h3>
                        </div>
                        <div className="mt-auto">
                            <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors text-base">
                                Shop Now
                            </button>
                        </div>
                    </div>

                    {/* Right image */}
                    <div className="flex-1 flex items-center justify-end">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="max-w-full max-h-full object-contain w-32 h-32 lg:w-36 lg:h-36"
                            loading="lazy"
                        />
                    </div>
                </div>
            ))}
        </>
    );
};

export default HeroProductCard;
