"use client";

import { useState } from "react";
import { svgPaths } from "@/lib/svgPaths";

const navLinks = [
    { href: "#smart-contracts", label: "Smart Contracts" },
    { href: "#services", label: "Services" },
    { href: "#solutions", label: "Solutions" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#whitepaper", label: "Whitepaper" },
];

const socialLinks = [
    { href: "https://github.com", label: "GitHub", path: svgPaths.github },
    { href: "https://discord.com", label: "Discord", path: svgPaths.discord },
    { href: "https://reddit.com", label: "Reddit", path: svgPaths.reddit },
    { href: "https://twitter.com", label: "Twitter", path: svgPaths.twitter },
];

export function HeroSection() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <section className="relative bg-black min-h-screen w-full overflow-hidden">
            {/* Gradient Background Blur Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="orb-animate absolute top-[40%] right-[15%] w-[446px] h-[446px] rounded-full bg-[#FC4FF6] opacity-20 blur-[200px]" />
                <div className="orb-animate-slow absolute top-[35%] left-[10%] w-[464px] h-[462px] rounded-full bg-[#8593E8] opacity-20 blur-[200px]" />
                <div className="orb-animate-fast absolute top-[30%] left-[45%] w-[467px] h-[467px] rounded-full bg-[#5D6EF3] opacity-20 blur-[250px]" />
            </div>

            {/* Header */}
            <header className="relative z-20 max-w-[1440px] mx-auto px-6 lg:px-16 py-10">
                <div className="flex items-center justify-between">
                    <p className="font-medium text-[20px] lg:text-[24px] text-white tracking-wide">
                        SITE NAME
                    </p>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8 xl:gap-12" aria-label="Main navigation">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="font-[family-name:var(--font-clash-grotesk)] font-normal text-[18px] leading-[100%] tracking-[0] text-white hover:text-[#ff3bff] transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Social Icons + Hamburger */}
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center gap-4">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-70 transition-opacity"
                                    aria-label={s.label}
                                >
                                    <svg className="w-5 h-5" fill="white" viewBox="0 0 20 20">
                                        <path d={s.path} />
                                    </svg>
                                </a>
                            ))}
                        </div>

                        {/* Hamburger (mobile) */}
                        <button
                            className="lg:hidden flex flex-col gap-[5px] p-2"
                            onClick={() => setMobileOpen((v) => !v)}
                            aria-label="Toggle menu"
                        >
                            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-[400px] mt-6" : "max-h-0"}`}
                >
                    <nav className="flex flex-col gap-4 pb-6 border-b border-white/10" aria-label="Mobile navigation">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="font-[family-name:var(--font-clash-grotesk)] text-[18px] text-white hover:text-[#ff3bff] transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="flex items-center gap-4 pt-2 sm:hidden">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-70 transition-opacity"
                                    aria-label={s.label}
                                >
                                    <svg className="w-5 h-5" fill="white" viewBox="0 0 20 20">
                                        <path d={s.path} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </nav>
                </div>
            </header>

            {/* Hero Content */}
            <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 pt-28 lg:pt-40 pb-0">
                <div className="text-center">
                    {/* Main Heading */}
                    <h1
                        className="font-[family-name:var(--font-montserrat)] font-medium text-[48px] sm:text-[60px] lg:text-[80px] leading-[1.1] mb-2 gradient-text"
                        style={{ letterSpacing: "1.6px" }}
                    >
                        THE BEST WEBSITE EVER
                    </h1>

                    {/* Subheading */}
                    <p
                        className="font-[family-name:var(--font-montserrat)] font-medium text-[48px] sm:text-[60px] lg:text-[80px] leading-[1.1] text-white mb-8"
                        style={{ letterSpacing: "1.6px" }}
                    >
                        Scalable.
                    </p>

                    {/* Description */}
                    <p
                        className="font-[family-name:var(--font-montserrat)] text-[16px] sm:text-[18px] lg:text-[20px] text-white text-center max-w-[723px] mx-auto mb-12"
                        style={{ lineHeight: "33px", letterSpacing: "0.72px" }}
                    >
                        Our technology performing fast blockchain (120K TPS) and it has
                        guaranteed AI-based data security. Proof of Stake, its consensus
                        algorithm enables unlimited speeds.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
                        <button className="btn-gradient-border group px-10 h-[70px] hover:brightness-110 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,59,255,0.35)]">
                            <span className="font-[family-name:var(--font-space-grotesk)] text-[20px] text-white font-medium">Get started</span>
                        </button>
                        <button className="group relative bg-black border-2 border-white rounded-[100px] px-10 h-[70px] hover:bg-white/10 transition-all duration-300">
                            <span className="font-[family-name:var(--font-space-grotesk)] text-[20px] text-white font-medium">Read more</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Robot Image */}
            <div className="relative z-10 w-full px-0 mt-0">
                <div className="max-w-[1605px] mx-auto">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/hero.png"
                        alt="AI Robots — futuristic cyberpunk blockchain platform heroes"
                        className="w-full h-auto object-contain"
                        width={1605}
                        height={900}
                    />
                </div>
            </div>
        </section>
    );
}
