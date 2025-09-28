"use client"

import React from 'react';

const ProductCategoryCard = ({ category, className = "" }) => {
    return (
        <div className={`bg-gray-100 rounded-2xl p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 max-w-[224px] max-h-[292px] w-full h-full ${className}`}>
            <div className="mb-6 flex items-center justify-center">
                <img
                    src={category.image}
                    alt={category.name}
                    className="object-contain max-w-[208px] max-h-[188px] w-full h-auto"
                />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
                {category.name}
            </h3>

            <p className="text-gray-600 font-medium">
                {category.productCount} Products
            </p>
        </div>
    );
};

export default ProductCategoryCard;