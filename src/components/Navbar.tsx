"use client";

import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

export function NavbarDemo() {
    const pathname = usePathname();
    const navItems = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Skills", link: "/skills" },
        { name: "Contact", link: "/contact" },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="fixed top-3 sm:top-0 z-50 w-full">
            <Navbar>
                {/* Desktop Navigation */}  
                <NavBody>
                    <Link href={"/"}><h1 className="text-2xl font-bold">Animesh-Tech</h1> </Link>
                    <div className="hidden md:flex gap-6">
                        {navItems.map((item, idx) => (
                            <Link
                                key={idx}
                                href={item.link}
                                className={clsx(
                                    "transition-colors hover:text-primary font-medium",
                                    pathname === item.link
                                        ? "text-primary"
                                        : "text-muted-foreground"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <Link href={"/"}><h1 className="text-2xl font-bold">Animesh-Tech</h1> </Link>

                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        {navItems.map((item, idx) => (
                            <Link
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={clsx(
                                    "block text-lg font-medium py-2 transition-colors",
                                    pathname === item.link
                                        ? "text-primary"
                                        : "text-muted-foreground"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}

                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
        </div>
    );
}
