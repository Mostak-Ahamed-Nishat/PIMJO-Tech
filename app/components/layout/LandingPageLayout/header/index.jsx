import { TopBanner } from "./top-banner"
import { MainNav } from "./main-nav"
import { MobileMenu } from "./mobile-menu"
import { NavActions } from "./nav-actions"
import { Logo } from "../../../ui/logo"

export function Header() {
    return (
        <header className=" sticky top-0 z-40">
            {/* Top Banner */}
            <TopBanner />

            {/* Main Header */}
            <div className=" bg-white w-full border-b border-gray-200 shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Left Section - Mobile Menu + Logo */}
                        <div className="flex items-center gap-4">
                            <MobileMenu />
                            <Logo />
                        </div>


                        <MainNav className="flex-1 justify-center" />


                        <NavActions />
                    </div>
                </div>
            </div>
        </header>
    )
}

