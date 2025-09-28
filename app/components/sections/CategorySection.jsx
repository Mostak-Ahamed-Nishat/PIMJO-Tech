import ProductCategoryCard from "../product/ProductCategoryCard";
import { categoryCardData } from "@/app/constants/categoryData";

export default function CategorySection() {
    return (
        <section className="container mx-auto px-4 md:px-6 lg:px-8 py-10">
            {/* Heading + subtext */}
            <div className="max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
                    Shop by Category
                </h2>
                <p className="mt-4 text-slate-500 text-base md:text-lg">
                    Explore our curated selection of products across premium categories,
                    from everyday essentials to exclusive limited collections.
                </p>
            </div>

            {/* Cards grid */}
            <div className="mt-8 md:mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 xl:gap-8">
                {categoryCardData.map((cat) => (
                    <ProductCategoryCard
                        key={cat.id}
                        category={cat}
                        className="bg-white ring-1 ring-slate-200"
                    />
                ))}
            </div>
        </section>
    );
}



