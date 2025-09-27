"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { navigationItems } from "../../../constants/data"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const openMenu = () => {
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={openMenu}
        className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5 text-text-secondary" />
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={closeMenu}
        />

        {/* Menu Panel */}
        <div className={`fixed top-0 left-0 w-full max-w-[320px] h-full bg-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
          {/* Close Button */}
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={closeMenu}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-text-secondary" />
            </button>
          </div>

          {/* Scrollable Navigation Content */}
          <nav className="h-full overflow-y-auto pt-16 pb-6 px-6">
            <div className="space-y-1">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors group"
                  style={{
                    animationDelay: isOpen ? `${index * 50}ms` : '0ms',
                    animation: isOpen ? `slideInFromLeft 0.3s ease-out ${index * 50}ms both` : 'none'
                  }}
                >
                  <span className="font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                    {item.label}
                  </span>
                  {item.badge && (
                    <span className={`px-3 py-1 text-xs text-white rounded-full font-medium ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Auth Links */}
            <div className="mt-8 pt-6 border-t border-gray-100 space-y-1">
              <Link
                href="/login"
                onClick={closeMenu}
                className="flex items-center p-4 text-text-secondary hover:text-text-primary hover:bg-gray-50 rounded-xl transition-colors"
                style={{
                  animationDelay: isOpen ? `${navigationItems.length * 50 + 100}ms` : '0ms',
                  animation: isOpen ? `slideInFromLeft 0.3s ease-out ${navigationItems.length * 50 + 100}ms both` : 'none'
                }}
              >
                <span className="font-medium">Login</span>
              </Link>
              <Link
                href="/register"
                onClick={closeMenu}
                className="flex items-center p-4 text-text-secondary hover:text-text-primary hover:bg-gray-50 rounded-xl transition-colors"
                style={{
                  animationDelay: isOpen ? `${navigationItems.length * 50 + 150}ms` : '0ms',
                  animation: isOpen ? `slideInFromLeft 0.3s ease-out ${navigationItems.length * 50 + 150}ms both` : 'none'
                }}
              >
                <span className="font-medium">Register</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}