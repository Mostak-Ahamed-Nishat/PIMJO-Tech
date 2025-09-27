import Link from "next/link"
import Image from "next/image"
import LogoImage from "@/public/logo.png"

export function Logo({ className = "", href = "/" }) {
    return (
        <Link href={href} className={`inline-flex items-center ${className}`}>
            <div className="flex items-center gap-2">
                <Image src={LogoImage} alt="PIMJO Logo" />
            </div>
        </Link>
    )
}
