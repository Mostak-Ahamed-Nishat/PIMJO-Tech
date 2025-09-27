"use client"

import { useState } from "react"
import { GlobeIcon, User } from "lucide-react"
import Image from "next/image"
import { Dropdown, DropdownItem } from "../../ui/dropdown"
import { languages, currencies } from "../../../constants/data"

export function TopBanner() {
    const [selectedLang, setSelectedLang] = useState(languages[0])
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0])

    return (
        <div className="bg-hero text-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:justify-between py-2 md:py-0 md:h-12">

                    {/* Left Section (Lang + Currency) */}
                    <div className="flex items-center gap-4 order-2 md:order-1">
                        {/* Language Dropdown */}
                        <Dropdown
                            trigger={
                                <div className="flex items-center gap-1 cursor-pointer">
                                    <GlobeIcon height={18} width={18} className="text-white" />
                                    <span className="text-sm text-white">{selectedLang.name}</span>
                                </div>
                            }
                        >
                            {languages.map((lang) => (
                                <DropdownItem
                                    key={lang.code}
                                    onClick={() => setSelectedLang(lang)}
                                    className="hover:cursor-pointer"
                                >
                                    <div className="flex items-center gap-2 text-black">
                                        <span>{lang.name}</span>
                                    </div>
                                </DropdownItem>
                            ))}
                        </Dropdown>

                        {/* Currency Dropdown */}
                        <Dropdown
                            trigger={
                                <div className="flex items-center gap-2 cursor-pointer">
                                    <div className="h-6 w-6 rounded-full overflow-hidden">
                                        <Image
                                            src={selectedCurrency.flag}
                                            alt={selectedCurrency.code}
                                            width={24}
                                            height={24}
                                            className="object-cover"
                                        />
                                    </div>
                                    <span className="text-sm text-white">{selectedCurrency.code}</span>
                                </div>
                            }
                        >
                            {currencies.map((currency) => (
                                <DropdownItem
                                    key={currency.code}
                                    onClick={() => setSelectedCurrency(currency)}
                                >
                                    <div className="flex items-center gap-2 text-black hover:cursor-pointer">
                                        <div className="w-4 h-4 rounded-full overflow-hidden">
                                            <Image
                                                src={currency.flag}
                                                alt={currency.code}
                                                width={24}
                                                height={24}
                                                className="object-cover"
                                            />
                                        </div>
                                        <span>{currency.code}</span>
                                    </div>
                                </DropdownItem>
                            ))}
                        </Dropdown>
                    </div>

                    {/* Center Section (Flash Sale Message) */}
                    <div className="order-1 md:order-2 text-center w-full md:w-auto">
                        <p className="text-sm font-medium">
                            Flash Sale Live – 30% Off Everything
                        </p>
                    </div>

                    {/* Right Section (Login/Register → only on md & lg) */}
                    <div className="hidden md:flex items-center gap-1 text-sm order-3">
                        <User height={16} width={16} />
                        <span>Login</span>
                        <span className="text-white/70">/</span>
                        <span>Register</span>
                    </div>
                </div>
            </div>
        </div>
    )
}