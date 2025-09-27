import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./components/ThemeProvider"

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
})

export const metadata = {
    title: {
        default: "PIMJO - Premium Tech & Fashion Store",
        template: "%s | PIMJO",
    },
    icons: {
        icon: "/favicon.ico",
    },
    description:
        "Discover the latest in technology and fashion at PIMJO. Shop premium smartphones, smartwatches, cameras, and lifestyle products with worldwide shipping.",
    keywords: [
        "ecommerce",
        "technology",
        "fashion",
        "smartphones",
        "smartwatches",
        "cameras",
        "premium products",
    ],
    authors: [{ name: "PIMJO Team" }],
    creator: "PIMJO",
    metadataBase: new URL("https://pimjo.com"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://pimjo.com",
        siteName: "PIMJO",
        title: "PIMJO - Premium Tech & Fashion Store",
        description:
            "Discover the latest in technology and fashion at PIMJO. Shop premium smartphones, smartwatches, cameras, and lifestyle products.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "PIMJO - Premium Tech & Fashion Store",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "PIMJO - Premium Tech & Fashion Store",
        description: "Discover the latest in technology and fashion at PIMJO.",
        images: ["/og-image.jpg"],
        creator: "@pimjo",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "your-google-verification-code",
        yandex: "your-yandex-verification-code",
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="theme-color" content="#3758F9" />
                <meta name="color-scheme" content="light dark" />
            </head>
            <body className={`${inter.variable} font-sans antialiased`}>
                <ThemeProvider defaultTheme="light">
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}