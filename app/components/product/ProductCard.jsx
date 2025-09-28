// app/components/product/SmallProductCard.jsx
"use client";

export default function SmallProductCard({
    product = {
        name: "StormGuard Shell Jacket",
        price: 129,
        image:
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80",
    },
    className = "",
}) {
    return (
        <div
            className={`w-[283px] max-h-[454px] bg-white rounded-3xl ring-1 ring-slate-200 overflow-hidden flex flex-col ${className}`}
        >
            {/* Image (283 × 326) */}
            <div className="w-full h-[326px] bg-slate-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>

            {/* Details */}
            <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-slate-900 font-semibold text-base leading-snug line-clamp-2 min-h-[44px]">
                    {product.name}
                </h3>

                <div className="mt-3 flex items-center justify-between">
                    <span className="text-slate-900 font-bold text-lg">
                        ${product.price}
                    </span>
                    <button className="px-3 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition">
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}
