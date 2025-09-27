import { Header } from "../components/layout/LandingPageLayout/header"



export default function PublicLayout({ children }) {
    return (
        <div className="min-h-screen bg-background">
            {/* Sticky Header for Public Pages */}
            <Header />

            {/* Main Content */}
            <main className="flex-1">
                {children}
            </main>
        </div>
    )
}