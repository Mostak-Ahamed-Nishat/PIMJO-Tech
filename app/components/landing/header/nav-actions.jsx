import Link from "next/link"
import { Search, User, ShoppingCart, Heart } from "lucide-react"

export function NavActions({ className = "" }) {
    return (
        <div className={`flex items-center gap-1 ${className}`}>
            {/* Search Icon */}
            <div>
                <button
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Search"
                >
                    <Search className="w-5 h-5 text-text-secondary" />
                </button>
            </div>

            {/* User Account */}
            <div>
                <Link
                    href="/login"
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Account"
                >
                    <User className="w-5 h-5 text-text-secondary" />
                </Link>
            </div>

            {/* Heart/Wishlist - Hidden on mobile */}
            <div className="hidden md:flex">
                <Link
                    href="/wishlist"
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Wishlist"
                >
                    <Heart className="w-5 h-5 text-text-secondary" />
                </Link>
            </div>

            {/* Shopping Cart */}
            <div>
                <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <ShoppingCart className="w-5 h-5 text-text-secondary" />
                    {/* Cart badge */}
                    <span className="absolute -top-1 -right-1 bg-brand-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                        3
                    </span>
                </button>
            </div>
        </div>
    )
}