import { navigationItems } from "@/app/constants/data"
import Link from "next/link"

export function MainNav({ className = "" }) {
    return (
        <nav className={`hidden lg:flex items-center space-x-8 ${className}`}>
            {navigationItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className="relative flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors py-2"
                >
                    <span className="font-medium">{item.label}</span>
                    {item.badge && (
                        <span className={`px-2 py-1 text-xs text-white rounded-full font-medium ${item.badgeColor}`}>
                            {item.badge}
                        </span>
                    )}
                </Link>
            ))}
        </nav>
    )
}